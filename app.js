const GOOGLE_CLIENT_ID = "462063575242-tc03a98dv33t2p5hipagpfuhc1lda1b4.apps.googleusercontent.com";

// UNIT DATA

const UNITS = {
  length: {
    label: 'Length', base: 'meter',
    list: {
      kilometer:     { f: 1000,        sym: 'km',    name: 'Kilometer' },
      meter:         { f: 1,           sym: 'm',     name: 'Meter' },
      centimeter:    { f: 0.01,        sym: 'cm',    name: 'Centimeter' },
      millimeter:    { f: 0.001,       sym: 'mm',    name: 'Millimeter' },
      mile:          { f: 1609.344,    sym: 'mi',    name: 'Mile' },
      yard:          { f: 0.9144,      sym: 'yd',    name: 'Yard' },
      foot:          { f: 0.3048,      sym: 'ft',    name: 'Foot' },
      inch:          { f: 0.0254,      sym: 'in',    name: 'Inch' },
      nautical_mile: { f: 1852,        sym: 'nmi',   name: 'Nautical Mile' },
    }
  },
  weight: {
    label: 'Weight', base: 'kilogram',
    list: {
      tonne:    { f: 1000,       sym: 't',  name: 'Tonne' },
      kilogram: { f: 1,          sym: 'kg', name: 'Kilogram' },
      gram:     { f: 0.001,      sym: 'g',  name: 'Gram' },
      milligram:{ f: 1e-6,       sym: 'mg', name: 'Milligram' },
      pound:    { f: 0.453592,   sym: 'lb', name: 'Pound' },
      ounce:    { f: 0.0283495,  sym: 'oz', name: 'Ounce' },
      stone:    { f: 6.35029,    sym: 'st', name: 'Stone' },
    }
  },
  temperature: {
    label: 'Temperature', special: true,
    list: {
      celsius:    { sym: '°C', name: 'Celsius' },
      fahrenheit: { sym: '°F', name: 'Fahrenheit' },
      kelvin:     { sym: 'K',  name: 'Kelvin' },
      rankine:    { sym: '°R', name: 'Rankine' },
    }
  },
  volume: {
    label: 'Volume', base: 'liter',
    list: {
      cubic_meter: { f: 1000,        sym: 'm³',    name: 'Cubic Meter' },
      liter:       { f: 1,           sym: 'L',     name: 'Liter' },
      milliliter:  { f: 0.001,       sym: 'mL',    name: 'Milliliter' },
      gallon_us:   { f: 3.78541,     sym: 'gal',   name: 'US Gallon' },
      gallon_uk:   { f: 4.54609,     sym: 'imp g', name: 'UK Gallon' },
      quart:       { f: 0.946353,    sym: 'qt',    name: 'Quart' },
      pint:        { f: 0.473176,    sym: 'pt',    name: 'Pint' },
      cup:         { f: 0.236588,    sym: 'cup',   name: 'Cup' },
      fluid_ounce: { f: 0.0295735,   sym: 'fl oz', name: 'Fluid Ounce' },
      tablespoon:  { f: 0.0147868,   sym: 'tbsp',  name: 'Tablespoon' },
      teaspoon:    { f: 0.00492892,  sym: 'tsp',   name: 'Teaspoon' },
    }
  }
};


// APP STATE

let activeCategory = 'length';
let activeOp       = '+';
let opHistory      = [];
let gContext       = 'login'; // which form triggered Google sign-in


//   GOOGLE IDENTITY SERVICES

function initGoogle() {
  if (typeof google === 'undefined' || !google.accounts?.id) return;

  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback:  onGoogleCredential,
    ux_mode:   'popup',
  });
}

function launchGooglePopup() {
  if (typeof google === 'undefined' || !google.accounts?.id) {
    showToast('Google Sign-In is unavailable. Please check your connection.');
    return;
  }

  const container = document.getElementById('gsi-trigger');
  if (!container) return;
  
  container.innerHTML = ''; 

  google.accounts.id.renderButton(container, {
    type: 'standard',
    theme: 'outline',
    size: 'large'
  });

  setTimeout(() => {
    const hiddenBtn = container.querySelector('div[role="button"]');
    if (hiddenBtn) {
      hiddenBtn.click();
    } else {
      google.accounts.id.prompt();
    }
  }, 50);
}

function triggerGoogle(context) {
  gContext = context;
  launchGooglePopup(); 
}

function onGoogleCredential(response) {
  try {
    const payloadB64 = response.credential.split('.')[1];
    const padded     = payloadB64.replace(/-/g, '+').replace(/_/g, '/');
    const payload    = JSON.parse(atob(padded));

    const name    = payload.name    || payload.email.split('@')[0];
    const email   = payload.email   || '';
    const picture = payload.picture || null;
    const sub     = payload.sub;

    let users = getUsers();
    let user  = users.find(u => u.googleSub === sub || u.email === email);

    if (!user) {
      user = { name, email, pass: null, googleSub: sub, picture, googleUser: true };
      users.push(user);
      saveUsers(users);
      showToast('Account created with Google ✓');
    } else {
      user.name = name;
      user.picture = picture;
      saveUsers(users);
      showToast('Signed in with Google ✓');
    }

    enterDashboard(name, picture);
  } catch (err) {
    console.error('Auth error:', err);
    showToast('Google Sign-In failed. Try again.');
  }
}

function showGError(msg) {
  let el = document.getElementById('g-dialog-error');
  if (!el) {
    el = document.createElement('p');
    el.id = 'g-dialog-error';
    el.style.cssText = 'color:#ff6b6b;font-size:12px;margin-top:10px;text-align:center;';
    document.querySelector('.g-dialog').appendChild(el);
  }
  el.textContent = msg;
}

document.getElementById('g-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeGOverlay();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeGOverlay();
});


//   LOCAL EMAIL/PASSWORD AUTH

function getUsers()       { return JSON.parse(localStorage.getItem('ql_users') || '[]'); }
function saveUsers(users) { localStorage.setItem('ql_users', JSON.stringify(users)); }

function switchTab(tab) {
  ['login','signup'].forEach(t => {
    document.getElementById('tab-' + t)?.classList.toggle('active', t === tab);
    document.getElementById('form-' + t)?.classList.toggle('active', t === tab);
  });
}

function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value;
  const err   = document.getElementById('login-error');

  if (!email || !pass) { showAuthError(err, 'Please fill in both fields.'); return; }

  const user = getUsers().find(u => u.email === email && u.pass === pass);
  if (!user) { showAuthError(err, 'Incorrect email or password.'); return; }

  err.style.display = 'none';
  enterDashboard(user.name || email.split('@')[0], user.picture || null);
}

function handleSignup() {
  const name  = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const pass  = document.getElementById('signup-pass').value;
  const err   = document.getElementById('signup-error');

  if (!name || !email || !pass) { showAuthError(err, 'Please fill in all fields.'); return; }
  if (pass.length < 6)           { showAuthError(err, 'Password must be at least 6 characters.'); return; }
  if (!email.includes('@'))      { showAuthError(err, 'Please enter a valid email.'); return; }

  const users = getUsers();
  if (users.find(u => u.email === email)) {
    showAuthError(err, 'This email is already registered.'); return;
  }

  users.push({ name, email, pass, googleUser: false, picture: null });
  saveUsers(users);

  err.style.display = 'none';
  showToast('Account created! Welcome 🎉');
  enterDashboard(name, null);
}

function loginAsGuest() { enterDashboard('Guest', null); }

function showAuthError(el, msg) {
  el.textContent = msg;
  el.style.display = 'block';
}

function enterDashboard(name, picture) {
  // Hide auth, show dashboard
  document.getElementById('auth-page').style.display       = 'none';
  document.getElementById('dashboard-page').style.display  = 'block';

  // Set user chip
  document.getElementById('user-name-display').textContent = name;
  const av = document.getElementById('user-avatar');
  if (picture) {
    av.innerHTML = `<img src="${picture}" alt="${name}" referrerpolicy="no-referrer">`;
  } else {
    av.textContent = name[0].toUpperCase();
  }

  initDashboard();
}

function logout() {
  if (typeof google !== 'undefined' && google.accounts?.id) {
    google.accounts.id.disableAutoSelect();
  }
  document.getElementById('auth-page').style.display      = 'flex';
  document.getElementById('dashboard-page').style.display = 'none';
  opHistory = [];
}


//   DASHBOARD INIT
function initDashboard() {
  setCategory('length');
  updateCmpUnits();
  updateArithUnits();
  buildReference();
  renderHistory();
}


//   CONVERTER

function setCategory(cat) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('cat-' + cat);
  if (btn) btn.classList.add('active');

  activeCategory = cat;

  document.getElementById('conv-title').textContent = UNITS[cat].label + ' Conversion';

  fillSelects('conv-from', 'conv-to', cat);

  document.getElementById('conv-result').classList.add('hidden');
  document.getElementById('conv-value').value = '';
}

function fillSelects(aId, bId, cat) {
  const entries = Object.entries(UNITS[cat].list);
  const html    = entries.map(([k, v]) => `<option value="${k}">${v.name} (${v.sym})</option>`).join('');
  [aId, bId].forEach((id, i) => {
    const sel = document.getElementById(id);
    sel.innerHTML = html;
    if (i === 1 && entries.length > 1) sel.selectedIndex = 1;
  });
}

function convertTemp(val, from, to) {
  let c;
  switch (from) {
    case 'celsius':    c = val; break;
    case 'fahrenheit': c = (val - 32) * 5 / 9; break;
    case 'kelvin':     c = val - 273.15; break;
    case 'rankine':    c = (val - 491.67) * 5 / 9; break;
  }
  switch (to) {
    case 'celsius':    return c;
    case 'fahrenheit': return c * 9 / 5 + 32;
    case 'kelvin':     return c + 273.15;
    case 'rankine':    return (c + 273.15) * 9 / 5;
  }
}

function convertVal(val, from, to, cat) {
  if (cat === 'temperature') return convertTemp(val, from, to);
  return (val * UNITS[cat].list[from].f) / UNITS[cat].list[to].f;
}

function liveConvert() {
  const raw  = document.getElementById('conv-value').value;
  const val  = parseFloat(raw);
  const from = document.getElementById('conv-from').value;
  const to   = document.getElementById('conv-to').value;

  const box = document.getElementById('conv-result');
  if (isNaN(val) || raw === '') { box.classList.add('hidden'); return; }

  const result  = convertVal(val, from, to, activeCategory);
  const fSym    = UNITS[activeCategory].list[from].sym;
  const tSym    = UNITS[activeCategory].list[to].sym;
  const display = fmt(result);

  document.getElementById('conv-result-val').textContent    = `${display} ${tSym}`;
  document.getElementById('conv-result-detail').textContent = `${val} ${fSym} = ${display} ${tSym}`;
  box.classList.remove('hidden');
}



//   COMPARATOR

function updateCmpUnits() {
  fillSelects('cmp-unit-a', 'cmp-unit-b', document.getElementById('cmp-category').value);
}

function doCompare() {
  const cat = document.getElementById('cmp-category').value;
  const vA  = parseFloat(document.getElementById('cmp-val-a').value);
  const uA  = document.getElementById('cmp-unit-a').value;
  const vB  = parseFloat(document.getElementById('cmp-val-b').value);
  const uB  = document.getElementById('cmp-unit-b').value;

  if (isNaN(vA) || isNaN(vB)) { showToast('Enter both values first!'); return; }

  let baseA, baseB;
  if (cat === 'temperature') {
    baseA = convertTemp(vA, uA, 'celsius');
    baseB = convertTemp(vB, uB, 'celsius');
  } else {
    baseA = vA * UNITS[cat].list[uA].f;
    baseB = vB * UNITS[cat].list[uB].f;
  }

  const maxAbs = Math.max(Math.abs(baseA), Math.abs(baseB)) || 1;
  const pA     = ((Math.abs(baseA) / maxAbs) * 100).toFixed(1);
  const pB     = ((Math.abs(baseB) / maxAbs) * 100).toFixed(1);
  const symA   = UNITS[cat].list[uA].sym;
  const symB   = UNITS[cat].list[uB].sym;

  let verdict, vColor;
  if      (baseA > baseB) { verdict = 'A is greater'; vColor = 'var(--cyan)'; }
  else if (baseB > baseA) { verdict = 'B is greater'; vColor = 'var(--red)'; }
  else                    { verdict = 'Equal';         vColor = 'var(--green)'; }

  const ratio = baseB !== 0 ? (baseA / baseB).toFixed(4) : '∞';

  document.getElementById('cmp-visual').innerHTML = `
    <div class="compare-item">
      <div class="compare-item-label">
        <span>A: ${vA} ${symA}</span>
        <span style="color:var(--cyan)">${pA}%</span>
      </div>
      <div class="bar-track"><div class="bar-fill" style="width:${pA}%;background:var(--cyan)"></div></div>
    </div>
    <div class="compare-item">
      <div class="compare-item-label">
        <span>B: ${vB} ${symB}</span>
        <span style="color:var(--red)">${pB}%</span>
      </div>
      <div class="bar-track"><div class="bar-fill" style="width:${pB}%;background:var(--red)"></div></div>
    </div>
    <div class="cmp-stats">
      <div><div class="cmp-stat-label">Verdict</div>       <div class="cmp-stat-val" style="color:${vColor}">${verdict}</div></div>
      <div><div class="cmp-stat-label">Ratio A : B</div>   <div class="cmp-stat-val" style="color:var(--orange)">${ratio}</div></div>
      <div><div class="cmp-stat-label">Difference</div>    <div class="cmp-stat-val">${fmt(Math.abs(baseA - baseB))} (base)</div></div>
    </div>
  `;

  document.getElementById('cmp-result-card').classList.remove('hidden');
  addHistory(`Compare ${vA}${symA} vs ${vB}${symB}`, verdict);
  showToast('Comparison complete!');
}


//   ARITHMETIC

function updateArithUnits() {
  const cat     = document.getElementById('arith-category').value;
  const entries = Object.entries(UNITS[cat].list);
  const html    = entries.map(([k, v]) => `<option value="${k}">${v.name} (${v.sym})</option>`).join('');
  ['arith-u1','arith-u2','arith-ur'].forEach(id => {
    document.getElementById(id).innerHTML = html;
  });
  if (entries.length > 1) document.getElementById('arith-u2').selectedIndex = 1;
}

function selectOp(btn, op) {
  document.querySelectorAll('.op-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeOp = op;
}

function doArithmetic() {
  const cat = document.getElementById('arith-category').value;
  const v1  = parseFloat(document.getElementById('arith-v1').value);
  const u1  = document.getElementById('arith-u1').value;
  const v2  = parseFloat(document.getElementById('arith-v2').value);
  const u2  = document.getElementById('arith-u2').value;
  const ur  = document.getElementById('arith-ur').value;

  if (isNaN(v1) || isNaN(v2)) { showToast('Enter both values first!'); return; }

  const sym1 = UNITS[cat].list[u1].sym;
  const sym2 = UNITS[cat].list[u2].sym;
  const symR = UNITS[cat].list[ur].sym;

  let b1, b2;
  if (cat === 'temperature') {
    b1 = convertTemp(v1, u1, 'celsius');
    b2 = convertTemp(v2, u2, 'celsius');
  } else {
    b1 = v1 * UNITS[cat].list[u1].f;
    b2 = v2 * UNITS[cat].list[u2].f;
  }

  let bResult;
  switch (activeOp) {
    case '+': bResult = b1 + b2; break;
    case '-': bResult = b1 - b2; break;
    case '*': bResult = b1 * b2; break;
    case '/':
      if (b2 === 0) { showToast('Cannot divide by zero!'); return; }
      bResult = b1 / b2;
      break;
  }

  let final;
  if (cat === 'temperature' && (activeOp === '+' || activeOp === '-')) {
    final = convertTemp(bResult, 'celsius', ur);
  } else if (cat === 'temperature') {
    final = bResult;
  } else {
    final = bResult / UNITS[cat].list[ur].f;
  }

  const opSym  = { '+': '＋', '-': '－', '*': '×', '/': '÷' }[activeOp];
  const display = fmt(final);

  document.getElementById('arith-result-val').textContent    = `${display} ${symR}`;
  document.getElementById('arith-result-detail').textContent = `${v1} ${sym1} ${opSym} ${v2} ${sym2} = ${display} ${symR}`;
  document.getElementById('arith-result').classList.remove('hidden');

  addHistory(`${v1}${sym1} ${opSym} ${v2}${sym2}`, `${display} ${symR}`);
  showToast('Calculated!');
}


//   REFERENCE TABLES

function buildReference() {
  const ri = (k, v) =>
    `<div class="ref-item"><strong>${k}</strong><span>${v}</span></div>`;

  document.getElementById('ref-length').innerHTML = [
    ri('1 km',   '= 1000 m'),      ri('1 m',    '= 100 cm'),
    ri('1 mile', '= 1.609 km'),    ri('1 ft',   '= 0.3048 m'),
    ri('1 in',   '= 2.54 cm'),     ri('1 yd',   '= 3 feet'),
  ].join('');

  document.getElementById('ref-weight').innerHTML = [
    ri('1 kg',    '= 1000 g'),     ri('1 lb',   '= 453.6 g'),
    ri('1 stone', '= 6.35 kg'),    ri('1 oz',   '= 28.35 g'),
    ri('1 tonne', '= 1000 kg'),    ri('1 kg',   '= 2.205 lb'),
  ].join('');

  document.getElementById('ref-temp').innerHTML = `
    <div style="display:flex;flex-direction:column;gap:6px">
      <div class="formula">°F = °C × 9/5 + 32</div>
      <div class="formula">K = °C + 273.15</div>
      <div class="formula">°R = K × 9/5</div>
    </div>
    <div class="ref-list" style="margin-top:12px">
      ${ri('0°C',   '= 32°F / 273.15 K')}
      ${ri('100°C', '= 212°F / 373.15 K')}
      ${ri('−40°C', '= −40°F (crossover)')}
      ${ri('37°C',  '= 98.6°F (body)')}
    </div>`;

  document.getElementById('ref-volume').innerHTML = [
    ri('1 L',        '= 1000 mL'),    ri('1 gal(US)', '= 3.785 L'),
    ri('1 cup',      '= 236.6 mL'),   ri('1 qt',      '= 0.946 L'),
    ri('1 pint',     '= 473 mL'),     ri('1 tbsp',    '= 14.79 mL'),
  ].join('');
}


//   HISTORY

function addHistory(op, result) {
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  opHistory.unshift({ op, result, time });
  if (opHistory.length > 40) opHistory.pop();
  renderHistory();
}

function renderHistory() {
  const ul = document.getElementById('history-list');
  if (!opHistory.length) {
    ul.innerHTML = '<li class="history-empty">No operations yet — start converting!</li>';
    return;
  }
  ul.innerHTML = opHistory.map(h => `
    <li class="history-item">
      <span class="h-op">${h.op}</span>
      <span class="h-result">${h.result}</span>
      <span class="h-time">${h.time}</span>
    </li>`).join('');
}

function clearHistory() {
  opHistory = [];
  renderHistory();
}


//   PANEL NAVIGATION

function switchPanel(id) {
  const order = ['convert','compare','arithmetic','reference','history'];
  document.querySelectorAll('.nav-tab').forEach((t, i) => {
    t.classList.toggle('active', order[i] === id);
  });
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
}


//   TOAST

let _toastTimer;

function showToast(msg) {
  const el = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}


//   HELPERS

function fmt(n) {
  if (!isFinite(n)) return '∞';
  if (Math.abs(n) < 0.00001 || Math.abs(n) > 1e10) return n.toExponential(5);
  return parseFloat(n.toFixed(8)).toString();
}


//   KEYBOARD SHORTCUTS

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    if (!document.getElementById('g-overlay').classList.contains('hidden')) return;
    if (document.getElementById('auth-page').style.display === 'none') return;
    const loginActive = document.getElementById('form-login').classList.contains('active');
    loginActive ? handleLogin() : handleSignup();
  }
});


// BOOT

window.addEventListener('load', initGoogle);
