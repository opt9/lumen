environment = [{}];
target = "js";
nil63 = function (x) {
  return(x === undefined || x === null);
};
is63 = function (x) {
  return(!nil63(x));
};
_35 = function (x) {
  return(x.length || 0);
};
none63 = function (x) {
  return(_35(x) === 0);
};
some63 = function (x) {
  return(_35(x) > 0);
};
one63 = function (x) {
  return(_35(x) === 1);
};
hd = function (l) {
  return(l[0]);
};
type = function (x) {
  return(typeof(x));
};
string63 = function (x) {
  return(type(x) === "string");
};
number63 = function (x) {
  return(type(x) === "number");
};
boolean63 = function (x) {
  return(type(x) === "boolean");
};
function63 = function (x) {
  return(type(x) === "function");
};
obj63 = function (x) {
  return(is63(x) && type(x) === "object");
};
atom63 = function (x) {
  return(nil63(x) || !obj63(x));
};
nan = 0 / 0;
inf = 1 / 0;
_inf = -(1 / 0);
nan63 = function (n) {
  return(!(n === n));
};
inf63 = function (n) {
  return(n === inf || n === _inf);
};
clip = function (s, from, upto) {
  return(s.substring(from, upto));
};
cut = function (x, from, upto) {
  var l = [];
  var j = 0;
  var _u124;
  if (nil63(from) || from < 0) {
    _u124 = 0;
  } else {
    _u124 = from;
  }
  var i = _u124;
  var n = _35(x);
  var _u125;
  if (nil63(upto) || upto > n) {
    _u125 = n;
  } else {
    _u125 = upto;
  }
  var _u25 = _u125;
  while (i < _u25) {
    l[j] = x[i];
    i = i + 1;
    j = j + 1;
  }
  var _u26 = x;
  var k = undefined;
  for (k in _u26) {
    var v = _u26[k];
    var _u126;
    if (numeric63(k)) {
      _u126 = parseInt(k);
    } else {
      _u126 = k;
    }
    var _u28 = _u126;
    if (!number63(_u28)) {
      l[_u28] = v;
    }
  }
  return(l);
};
keys = function (x) {
  var t = [];
  var _u30 = x;
  var k = undefined;
  for (k in _u30) {
    var v = _u30[k];
    var _u127;
    if (numeric63(k)) {
      _u127 = parseInt(k);
    } else {
      _u127 = k;
    }
    var _u32 = _u127;
    if (!number63(_u32)) {
      t[_u32] = v;
    }
  }
  return(t);
};
edge = function (x) {
  return(_35(x) - 1);
};
inner = function (x) {
  return(clip(x, 1, edge(x)));
};
tl = function (l) {
  return(cut(l, 1));
};
char = function (s, n) {
  return(s.charAt(n));
};
code = function (s, n) {
  return(s.charCodeAt(n));
};
string_literal63 = function (x) {
  return(string63(x) && char(x, 0) === "\"");
};
id_literal63 = function (x) {
  return(string63(x) && char(x, 0) === "|");
};
add = function (l, x) {
  l.push(x);
  return(undefined);
};
drop = function (l) {
  return(l.pop());
};
last = function (l) {
  return(l[edge(l)]);
};
butlast = function (l) {
  return(cut(l, 0, edge(l)));
};
reverse = function (l) {
  var l1 = keys(l);
  var i = edge(l);
  while (i >= 0) {
    add(l1, l[i]);
    i = i - 1;
  }
  return(l1);
};
join = function (a, b) {
  if (a && b) {
    var c = [];
    var o = _35(a);
    var _u46 = a;
    var k = undefined;
    for (k in _u46) {
      var v = _u46[k];
      var _u128;
      if (numeric63(k)) {
        _u128 = parseInt(k);
      } else {
        _u128 = k;
      }
      var _u48 = _u128;
      c[_u48] = v;
    }
    var _u49 = b;
    var k = undefined;
    for (k in _u49) {
      var v = _u49[k];
      var _u129;
      if (numeric63(k)) {
        _u129 = parseInt(k);
      } else {
        _u129 = k;
      }
      var _u51 = _u129;
      if (number63(_u51)) {
        _u51 = _u51 + o;
      }
      c[_u51] = v;
    }
    return(c);
  } else {
    return(a || b || []);
  }
};
reduce = function (f, x) {
  if (none63(x)) {
    return(x);
  } else {
    if (one63(x)) {
      return(hd(x));
    } else {
      return(f(hd(x), reduce(f, tl(x))));
    }
  }
};
find = function (f, t) {
  var _u54 = t;
  var _u1 = undefined;
  for (_u1 in _u54) {
    var x = _u54[_u1];
    var _u130;
    if (numeric63(_u1)) {
      _u130 = parseInt(_u1);
    } else {
      _u130 = _u1;
    }
    var _u1 = _u130;
    var _u56 = f(x);
    if (_u56) {
      return(_u56);
    }
  }
};
first = function (f, l) {
  var n = _35(l);
  var i = 0;
  while (i < n) {
    var x = f(l[i]);
    if (x) {
      return(x);
    }
    i = i + 1;
  }
};
in63 = function (x, t) {
  return(find(function (y) {
    return(x === y);
  }, t));
};
pair = function (l) {
  var i = 0;
  var l1 = [];
  while (i < _35(l)) {
    add(l1, [l[i], l[i + 1]]);
    i = i + 2;
  }
  return(l1);
};
sort = function (l, f) {
  var _u131;
  if (f) {
    _u131 = function (a, b) {
      if (f(a, b)) {
        return(-1);
      } else {
        return(1);
      }
    };
  }
  return(l.sort(_u131));
};
map = function (f, x) {
  var t = [];
  var n = _35(x);
  var i = 0;
  while (i < n) {
    var y = f(x[i]);
    if (is63(y)) {
      add(t, y);
    }
    i = i + 1;
  }
  var _u65 = x;
  var k = undefined;
  for (k in _u65) {
    var v = _u65[k];
    var _u132;
    if (numeric63(k)) {
      _u132 = parseInt(k);
    } else {
      _u132 = k;
    }
    var _u67 = _u132;
    if (!number63(_u67)) {
      var y = f(v);
      if (is63(y)) {
        t[_u67] = y;
      }
    }
  }
  return(t);
};
keep = function (f, x) {
  return(map(function (v) {
    if (f(v)) {
      return(v);
    }
  }, x));
};
keys63 = function (t) {
  var _u71 = t;
  var k = undefined;
  for (k in _u71) {
    var _u2 = _u71[k];
    var _u133;
    if (numeric63(k)) {
      _u133 = parseInt(k);
    } else {
      _u133 = k;
    }
    var _u73 = _u133;
    if (!number63(_u73)) {
      return(true);
    }
  }
  return(false);
};
empty63 = function (t) {
  var _u75 = t;
  var _u3 = undefined;
  for (_u3 in _u75) {
    var _u4 = _u75[_u3];
    var _u134;
    if (numeric63(_u3)) {
      _u134 = parseInt(_u3);
    } else {
      _u134 = _u3;
    }
    var _u3 = _u134;
    return(false);
  }
  return(true);
};
stash = function (args) {
  if (keys63(args)) {
    var p = [];
    var _u78 = args;
    var k = undefined;
    for (k in _u78) {
      var v = _u78[k];
      var _u135;
      if (numeric63(k)) {
        _u135 = parseInt(k);
      } else {
        _u135 = k;
      }
      var _u80 = _u135;
      if (!number63(_u80)) {
        p[_u80] = v;
      }
    }
    p._stash = true;
    add(args, p);
  }
  return(args);
};
unstash = function (args) {
  if (none63(args)) {
    return([]);
  } else {
    var l = last(args);
    if (obj63(l) && l._stash) {
      var args1 = butlast(args);
      var _u82 = l;
      var k = undefined;
      for (k in _u82) {
        var v = _u82[k];
        var _u136;
        if (numeric63(k)) {
          _u136 = parseInt(k);
        } else {
          _u136 = k;
        }
        var _u84 = _u136;
        if (!(_u84 === "_stash")) {
          args1[_u84] = v;
        }
      }
      return(args1);
    } else {
      return(args);
    }
  }
};
search = function (s, pattern, start) {
  var i = s.indexOf(pattern, start);
  if (i >= 0) {
    return(i);
  }
};
split = function (s, sep) {
  if (s === "" || sep === "") {
    return([]);
  } else {
    var l = [];
    var n = _35(sep);
    while (true) {
      var i = search(s, sep);
      if (nil63(i)) {
        break;
      } else {
        add(l, clip(s, 0, i));
        s = clip(s, i + n);
      }
    }
    add(l, s);
    return(l);
  }
};
cat = function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  if (none63(xs)) {
    return("");
  } else {
    return(reduce(function (a, b) {
      return(a + b);
    }, xs));
  }
};
_43 = function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  return(reduce(function (a, b) {
    return(a + b);
  }, xs));
};
_ = function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  return(reduce(function (b, a) {
    return(a - b);
  }, reverse(xs)));
};
_42 = function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  return(reduce(function (a, b) {
    return(a * b);
  }, xs));
};
_47 = function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  return(reduce(function (b, a) {
    return(a / b);
  }, reverse(xs)));
};
_37 = function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  return(reduce(function (b, a) {
    return(a % b);
  }, reverse(xs)));
};
_62 = function (a, b) {
  return(a > b);
};
_60 = function (a, b) {
  return(a < b);
};
_61 = function (a, b) {
  return(a === b);
};
_6261 = function (a, b) {
  return(a >= b);
};
_6061 = function (a, b) {
  return(a <= b);
};
number = function (s) {
  var n = parseFloat(s);
  if (!isNaN(n)) {
    return(n);
  }
};
number_code63 = function (n) {
  return(n > 47 && n < 58);
};
numeric63 = function (s) {
  var n = _35(s);
  var i = 0;
  while (i < n) {
    if (!number_code63(code(s, i))) {
      return(false);
    }
    i = i + 1;
  }
  return(true);
};
var tostring = function (x) {
  return(x["toString"]());
};
escape = function (s) {
  var s1 = "\"";
  var i = 0;
  while (i < _35(s)) {
    var c = char(s, i);
    var _u137;
    if (c === "\n") {
      _u137 = "\\n";
    } else {
      var _u138;
      if (c === "\"") {
        _u138 = "\\\"";
      } else {
        var _u139;
        if (c === "\\") {
          _u139 = "\\\\";
        } else {
          _u139 = c;
        }
        _u138 = _u139;
      }
      _u137 = _u138;
    }
    var c1 = _u137;
    s1 = s1 + c1;
    i = i + 1;
  }
  return(s1 + "\"");
};
string = function (x, depth) {
  if (depth && depth > 7) {
    return("circular");
  } else {
    if (nil63(x)) {
      return("nil");
    } else {
      if (nan63(x)) {
        return("nan");
      } else {
        if (x === inf) {
          return("inf");
        } else {
          if (x === _inf) {
            return("-inf");
          } else {
            if (boolean63(x)) {
              if (x) {
                return("true");
              } else {
                return("false");
              }
            } else {
              if (function63(x)) {
                return("function");
              } else {
                if (string63(x)) {
                  return(escape(x));
                } else {
                  if (atom63(x)) {
                    return(tostring(x));
                  } else {
                    var s = "(";
                    var sp = "";
                    var xs = [];
                    var ks = [];
                    var d = (depth || 0) + 1;
                    var _u104 = x;
                    var k = undefined;
                    for (k in _u104) {
                      var v = _u104[k];
                      var _u140;
                      if (numeric63(k)) {
                        _u140 = parseInt(k);
                      } else {
                        _u140 = k;
                      }
                      var _u106 = _u140;
                      if (number63(_u106)) {
                        xs[_u106] = string(v, d);
                      } else {
                        add(ks, _u106 + ":");
                        add(ks, string(v, d));
                      }
                    }
                    var _u107 = join(xs, ks);
                    var _u5 = undefined;
                    for (_u5 in _u107) {
                      var v = _u107[_u5];
                      var _u141;
                      if (numeric63(_u5)) {
                        _u141 = parseInt(_u5);
                      } else {
                        _u141 = _u5;
                      }
                      var _u5 = _u141;
                      s = s + sp + v;
                      sp = " ";
                    }
                    return(s + ")");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
apply = function (f, args) {
  var _u110 = stash(args);
  return(f.apply(f, _u110));
};
call = function (f) {
  return(f());
};
_37message_handler = function (msg) {
  var i = search(msg, ": ");
  return(clip(msg, i + 2));
};
toplevel63 = function () {
  return(one63(environment));
};
setenv = function (k) {
  var _u114 = unstash(Array.prototype.slice.call(arguments, 1));
  var keys = cut(_u114, 0);
  if (string63(k)) {
    var _u142;
    if (keys.toplevel) {
      _u142 = hd(environment);
    } else {
      _u142 = last(environment);
    }
    var frame = _u142;
    var entry = frame[k] || {};
    var _u115 = keys;
    var _u117 = undefined;
    for (_u117 in _u115) {
      var v = _u115[_u117];
      var _u143;
      if (numeric63(_u117)) {
        _u143 = parseInt(_u117);
      } else {
        _u143 = _u117;
      }
      var _u118 = _u143;
      entry[_u118] = v;
    }
    frame[k] = entry;
  }
};
var fs = require("fs");
read_file = function (path) {
  return(fs.readFileSync(path, "utf8"));
};
write_file = function (path, data) {
  return(fs.writeFileSync(path, data, "utf8"));
};
print = function (x) {
  return(console.log(x));
};
write = function (x) {
  return(process.stdout.write(x));
};
exit = function (code) {
  return(process.exit(code));
};
argv = cut(process.argv, 2);
var math = Math;
abs = math.abs;
acos = math.acos;
asin = math.asin;
atan = math.atan;
atan2 = math.atan2;
ceil = math.ceil;
cos = math.cos;
floor = math.floor;
log = math.log;
log10 = math.log10;
max = math.max;
min = math.min;
pow = math.pow;
random = math.random;
sin = math.sin;
sinh = math.sinh;
sqrt = math.sqrt;
tan = math.tan;
tanh = math.tanh;
setenv("quote", {_stash: true, macro: function (form) {
  return(quoted(form));
}});
setenv("quasiquote", {_stash: true, macro: function (form) {
  return(quasiexpand(form, 1));
}});
setenv("at", {_stash: true, macro: function (l, i) {
  if (target === "lua" && number63(i)) {
    i = i + 1;
  } else {
    if (target === "lua") {
      i = ["+", i, 1];
    }
  }
  return(["get", l, i]);
}});
setenv("wipe", {_stash: true, macro: function (place) {
  if (target === "lua") {
    return(["set", place, "nil"]);
  } else {
    return(["%delete", place]);
  }
}});
setenv("list", {_stash: true, macro: function () {
  var body = unstash(Array.prototype.slice.call(arguments, 0));
  var l = [];
  var forms = [];
  var id = unique();
  var _u32 = body;
  var k = undefined;
  for (k in _u32) {
    var v = _u32[k];
    var _u361;
    if (numeric63(k)) {
      _u361 = parseInt(k);
    } else {
      _u361 = k;
    }
    var _u34 = _u361;
    if (number63(_u34)) {
      l[_u34] = v;
    } else {
      add(forms, ["set", ["get", id, ["quote", _u34]], v]);
    }
  }
  if (some63(forms)) {
    return(join(["let", [id, join(["%array"], l)]], join(forms, [id])));
  } else {
    return(join(["%array"], l));
  }
}});
setenv("if", {_stash: true, macro: function () {
  var branches = unstash(Array.prototype.slice.call(arguments, 0));
  return(hd(expand_if(branches)));
}});
setenv("when", {_stash: true, macro: function (cond) {
  var _u46 = unstash(Array.prototype.slice.call(arguments, 1));
  var body = cut(_u46, 0);
  return(["if", cond, join(["do"], body)]);
}});
setenv("unless", {_stash: true, macro: function (cond) {
  var _u53 = unstash(Array.prototype.slice.call(arguments, 1));
  var body = cut(_u53, 0);
  return(["if", ["not", cond], join(["do"], body)]);
}});
setenv("obj", {_stash: true, macro: function () {
  var body = unstash(Array.prototype.slice.call(arguments, 0));
  return(join(["%object"], mapo(function (x) {
    return(x);
  }, body)));
}});
setenv("let", {_stash: true, macro: function (bindings) {
  var _u73 = unstash(Array.prototype.slice.call(arguments, 1));
  var body = cut(_u73, 0);
  if (_35(bindings) < 2) {
    return(join(["do"], body));
  } else {
    var renames = [];
    var locals = [];
    var lh = bindings[0];
    var rh = bindings[1];
    var _u75 = bind(lh, rh);
    var k = undefined;
    for (k in _u75) {
      var _u77 = _u75[k];
      var id = _u77[0];
      var val = _u77[1];
      var _u362;
      if (numeric63(k)) {
        _u362 = parseInt(k);
      } else {
        _u362 = k;
      }
      var _u78 = _u362;
      if (number63(_u78)) {
        if (!unique63(id) && (bound63(id) || reserved63(id) || toplevel63())) {
          var id1 = unique();
          add(renames, id);
          add(renames, id1);
          id = id1;
        } else {
          setenv(id, {_stash: true, variable: true});
        }
        add(locals, ["%local", id, val]);
      }
    }
    return(join(["do"], join(locals, [["let-symbol", renames, join(["let", cut(bindings, 2)], body)]])));
  }
}});
setenv("define-macro", {_stash: true, macro: function (name, args) {
  var _u88 = unstash(Array.prototype.slice.call(arguments, 2));
  var body = cut(_u88, 0);
  var _u89 = ["setenv", ["quote", name]];
  _u89.macro = join(["fn", args], body);
  var form = _u89;
  eval(form);
  return(form);
}});
setenv("define-special", {_stash: true, macro: function (name, args) {
  var _u96 = unstash(Array.prototype.slice.call(arguments, 2));
  var body = cut(_u96, 0);
  var _u97 = ["setenv", ["quote", name]];
  _u97.special = join(["fn", args], body);
  var form = join(_u97, keys(body));
  eval(form);
  return(form);
}});
setenv("define-symbol", {_stash: true, macro: function (name, expansion) {
  setenv(name, {_stash: true, symbol: expansion});
  var _u105 = ["setenv", ["quote", name]];
  _u105.symbol = ["quote", expansion];
  return(_u105);
}});
setenv("define-reader", {_stash: true, macro: function (_u115) {
  var char = _u115[0];
  var s = _u115[1];
  var _u114 = unstash(Array.prototype.slice.call(arguments, 1));
  var body = cut(_u114, 0);
  return(["set", ["get", "read-table", char], join(["fn", [s]], body)]);
}});
setenv("define", {_stash: true, macro: function (name, x) {
  var _u123 = unstash(Array.prototype.slice.call(arguments, 2));
  var body = cut(_u123, 0);
  setenv(name, {_stash: true, variable: true});
  if (some63(body)) {
    return(join(["%local-function", name], bind42(x, body)));
  } else {
    return(["%local", name, x]);
  }
}});
setenv("define-global", {_stash: true, macro: function (name, x) {
  var _u129 = unstash(Array.prototype.slice.call(arguments, 2));
  var body = cut(_u129, 0);
  setenv(name, {_stash: true, toplevel: true, variable: true});
  if (some63(body)) {
    return(join(["%global-function", name], bind42(x, body)));
  } else {
    return(["set", name, x]);
  }
}});
setenv("with-frame", {_stash: true, macro: function () {
  var _u140 = unstash(Array.prototype.slice.call(arguments, 0));
  var body = cut(_u140, 0);
  var scope = _u140.scope;
  var x = unique();
  var _u143 = ["obj"];
  _u143._scope = scope;
  return(["do", ["add", "environment", _u143], ["let", [x, join(["do"], body)], ["drop", "environment"], x]]);
}});
setenv("with-bindings", {_stash: true, macro: function (_u155) {
  var names = _u155[0];
  var _u154 = unstash(Array.prototype.slice.call(arguments, 1));
  var body = cut(_u154, 0);
  var x = unique();
  var _u159 = ["setenv", x];
  _u159.variable = true;
  var _u156 = ["with-frame", ["each", ["_u1", x], names, _u159]];
  _u156.scope = true;
  return(join(_u156, body));
}});
setenv("let-fn", {_stash: true, macro: function (_u166) {
  var name = _u166[0];
  var args = _u166[1];
  var fn_body = cut(_u166, 2);
  var _u165 = unstash(Array.prototype.slice.call(arguments, 1));
  var body = cut(_u165, 0);
  return(join(["let", [name, join(["fn", args], fn_body)]], body));
}});
setenv("let-macro", {_stash: true, macro: function (definitions) {
  var _u175 = unstash(Array.prototype.slice.call(arguments, 1));
  var body = cut(_u175, 0);
  add(environment, {});
  map(function (m) {
    return(macroexpand(join(["define-macro"], m)));
  }, definitions);
  var _u176 = join(["do"], macroexpand(body));
  drop(environment);
  return(_u176);
}});
setenv("let-symbol", {_stash: true, macro: function (expansions) {
  var _u186 = unstash(Array.prototype.slice.call(arguments, 1));
  var body = cut(_u186, 0);
  add(environment, {});
  map(function (_u189) {
    var name = _u189[0];
    var exp = _u189[1];
    return(macroexpand(["define-symbol", name, exp]));
  }, pair(expansions));
  var _u187 = join(["do"], macroexpand(body));
  drop(environment);
  return(_u187);
}});
setenv("let-unique", {_stash: true, macro: function (names) {
  var _u197 = unstash(Array.prototype.slice.call(arguments, 1));
  var body = cut(_u197, 0);
  var bs = map(function (n) {
    return([n, ["unique"]]);
  }, names);
  return(join(["let", reduce(join, bs)], body));
}});
setenv("fn", {_stash: true, macro: function (args) {
  var _u204 = unstash(Array.prototype.slice.call(arguments, 1));
  var body = cut(_u204, 0);
  return(join(["%function"], bind42(args, body)));
}});
setenv("guard", {_stash: true, macro: function (expr) {
  if (target === "js") {
    return([["fn", [], ["%try", ["list", true, expr]]]]);
  } else {
    var e = unique();
    var x = unique();
    var ex = "|" + e + "," + x + "|";
    return(["let", [ex, ["xpcall", ["fn", [], expr], "%message-handler"]], ["list", e, x]]);
  }
}});
setenv("each", {_stash: true, macro: function (_u242, t) {
  var k = _u242[0];
  var v = _u242[1];
  var _u241 = unstash(Array.prototype.slice.call(arguments, 2));
  var body = cut(_u241, 0);
  var x = unique();
  var n = unique();
  var _u363;
  if (target === "lua") {
    _u363 = body;
  } else {
    _u363 = [join(["let", [k, ["if", ["numeric?", k], ["parseInt", k], k]]], body)];
  }
  return(["let", [x, t, k, "nil"], ["%for", x, k, join(["let", [v, ["get", x, k]]], _u363)]]);
}});
setenv("for", {_stash: true, macro: function (_u264) {
  var i = _u264[0];
  var to = _u264[1];
  var _u263 = unstash(Array.prototype.slice.call(arguments, 1));
  var body = cut(_u263, 0);
  return(["let", [i, 0], join(["while", ["<", i, to]], join(body, [["inc", i]]))]);
}});
setenv("across", {_stash: true, macro: function (_u282) {
  var v = _u282[0];
  var t = _u282[1];
  var _u281 = unstash(Array.prototype.slice.call(arguments, 1));
  var body = cut(_u281, 0);
  var x = unique();
  var n = unique();
  var i = unique();
  return(["let", [x, t, n, ["#", x]], ["for", [i, n], join(["let", [v, ["at", x, i]]], body)]]);
}});
setenv("set-of", {_stash: true, macro: function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  var l = [];
  var _u295 = xs;
  var _u2 = undefined;
  for (_u2 in _u295) {
    var x = _u295[_u2];
    var _u364;
    if (numeric63(_u2)) {
      _u364 = parseInt(_u2);
    } else {
      _u364 = _u2;
    }
    var _u2 = _u364;
    l[x] = true;
  }
  return(join(["obj"], l));
}});
setenv("language", {_stash: true, macro: function () {
  return(["quote", target]);
}});
setenv("target", {_stash: true, macro: function () {
  var clauses = unstash(Array.prototype.slice.call(arguments, 0));
  return(clauses[target]);
}});
setenv("join*", {_stash: true, macro: function () {
  var xs = unstash(Array.prototype.slice.call(arguments, 0));
  return(reduce(function (a, b) {
    return(["join", a, b]);
  }, xs));
}});
setenv("join!", {_stash: true, macro: function (a) {
  var _u309 = unstash(Array.prototype.slice.call(arguments, 1));
  var bs = cut(_u309, 0);
  return(["set", a, join(["join*", a], bs)]);
}});
setenv("cat!", {_stash: true, macro: function (a) {
  var _u315 = unstash(Array.prototype.slice.call(arguments, 1));
  var bs = cut(_u315, 0);
  return(["set", a, join(["cat", a], bs)]);
}});
setenv("inc", {_stash: true, macro: function (n, by) {
  return(["set", n, ["+", n, by || 1]]);
}});
setenv("dec", {_stash: true, macro: function (n, by) {
  return(["set", n, ["-", n, by || 1]]);
}});
setenv("with-indent", {_stash: true, macro: function (form) {
  var result = unique();
  return(["do", ["inc", "indent-level"], ["let", [result, form], ["dec", "indent-level"], result]]);
}});
setenv("export", {_stash: true, macro: function () {
  var names = unstash(Array.prototype.slice.call(arguments, 0));
  if (target === "js") {
    return(join(["do"], map(function (k) {
      return(["set", ["get", "exports", ["quote", k]], k]);
    }, names)));
  } else {
    var x = {};
    var _u357 = names;
    var _u3 = undefined;
    for (_u3 in _u357) {
      var k = _u357[_u3];
      var _u365;
      if (numeric63(_u3)) {
        _u365 = parseInt(_u3);
      } else {
        _u365 = _u3;
      }
      var _u3 = _u365;
      x[k] = k;
    }
    return(["return", join(["obj"], x)]);
  }
}});
var reader = require("reader");
var compiler = require("compiler");
var rep = function (s) {
  var form = reader["read-string"](s);
  var _u2 = (function () {
    try {
      return([true, compiler.eval(form)]);
    }
    catch (_u12) {
      return([false, _u12.message]);
    }
  })();
  var ok = _u2[0];
  var x = _u2[1];
  if (!ok) {
    return(print("error: " + x));
  } else {
    if (is63(x)) {
      return(print(string(x)));
    }
  }
};
var repl = function () {
  write("> ");
  var rep1 = function (s) {
    rep(s);
    return(write("> "));
  };
  process.stdin.setEncoding("utf8");
  return(process.stdin.on("data", rep1));
};
var usage = function () {
  print("usage: lumen [options] <object files>");
  print("options:");
  print("  -c <input>\tInput file");
  print("  -o <output>\tOutput file");
  print("  -t <target>\tTarget language (default: lua)");
  print("  -e <expr>\tExpression to evaluate");
  return(exit());
};
var main = function () {
  if (hd(argv) === "-h" || hd(argv) === "--help") {
    usage();
  }
  var pre = [];
  var input = undefined;
  var output = undefined;
  var target1 = undefined;
  var expr = undefined;
  var n = _35(argv);
  var i = 0;
  while (i < n) {
    var a = argv[i];
    if (a === "-c" || a === "-o" || a === "-t" || a === "-e") {
      if (i === n - 1) {
        print("missing argument for " + a);
      } else {
        i = i + 1;
        var val = argv[i];
        if (a === "-c") {
          input = val;
        } else {
          if (a === "-o") {
            output = val;
          } else {
            if (a === "-t") {
              target1 = val;
            } else {
              if (a === "-e") {
                expr = val;
              }
            }
          }
        }
      }
    } else {
      if (!("-" === char(a, 0))) {
        add(pre, a);
      }
    }
    i = i + 1;
  }
  var _u9 = pre;
  var _u10 = _35(_u9);
  var _u11 = 0;
  while (_u11 < _u10) {
    var file = _u9[_u11];
    compiler["run-file"](file);
    _u11 = _u11 + 1;
  }
  if (input && output) {
    if (target1) {
      target = target1;
    }
    var code = compiler["compile-file"](input);
    return(write_file(output, code));
  } else {
    if (expr) {
      return(rep(expr));
    } else {
      return(repl());
    }
  }
};
main();
