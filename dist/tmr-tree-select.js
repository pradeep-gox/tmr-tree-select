!(function(e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react'), require('react-dom')))
    : 'function' == typeof define && define.amd
    ? define('TMRTreeSelect', ['react', 'react-dom'], t)
    : 'object' == typeof exports
    ? (exports.TMRTreeSelect = t(require('react'), require('react-dom')))
    : (e.TMRTreeSelect = t(e.React, e.ReactDOM))
})(this, function(e, t) {
  return (function(e) {
    var t = {}
    function n(r) {
      if (t[r]) return t[r].exports
      var o = (t[r] = { i: r, l: !1, exports: {} })
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
      }),
      (n.r = function(e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e
        var r = Object.create(null)
        if ((n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var o in e)
            n.d(
              r,
              o,
              function(t) {
                return e[t]
              }.bind(null, o)
            )
        return r
      }),
      (n.n = function(e) {
        var t =
          e && e.__esModule
            ? function() {
                return e.default
              }
            : function() {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = 11))
    )
  })([
    function(t, n) {
      t.exports = e
    },
    function(e, t, n) {
      e.exports = n(5)()
    },
    function(e, n) {
      e.exports = t
    },
    function(e, t, n) {
      e.exports = (function(e) {
        var t = {}
        function n(r) {
          if (t[r]) return t[r].exports
          var o = (t[r] = { exports: {}, id: r, loaded: !1 })
          return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports
        }
        return (n.m = e), (n.c = t), (n.p = ''), n(0)
      })([
        function(e, t, n) {
          e.exports = n(1)
        },
        function(e, t, n) {
          'use strict'
          Object.defineProperty(t, '__esModule', { value: !0 })
          var r,
            o = n(2),
            a = (r = o) && r.__esModule ? r : { default: r }
          ;(t.default = a.default), (e.exports = t.default)
        },
        function(e, t, n) {
          'use strict'
          Object.defineProperty(t, '__esModule', { value: !0 })
          var r =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }
          function o(e) {
            return e && e.__esModule ? e : { default: e }
          }
          t.default = s
          var a = n(3),
            i = o(n(4)),
            l = n(14),
            c = o(n(15))
          function s(e) {
            var t = e.activeClassName,
              n = void 0 === t ? '' : t,
              o = e.activeIndex,
              i = void 0 === o ? -1 : o,
              s = e.activeStyle,
              u = e.autoEscape,
              d = e.caseSensitive,
              f = void 0 !== d && d,
              h = e.className,
              p = e.findChunks,
              g = e.highlightClassName,
              v = void 0 === g ? '' : g,
              b = e.highlightStyle,
              y = void 0 === b ? {} : b,
              m = e.highlightTag,
              w = void 0 === m ? 'mark' : m,
              O = e.sanitize,
              x = e.searchWords,
              S = e.textToHighlight,
              E = e.unhighlightTag,
              C = void 0 === E ? 'span' : E,
              j = e.unhighlightClassName,
              T = void 0 === j ? '' : j,
              k = e.unhighlightStyle,
              N = (function(e, t) {
                var n = {}
                for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
                return n
              })(e, [
                'activeClassName',
                'activeIndex',
                'activeStyle',
                'autoEscape',
                'caseSensitive',
                'className',
                'findChunks',
                'highlightClassName',
                'highlightStyle',
                'highlightTag',
                'sanitize',
                'searchWords',
                'textToHighlight',
                'unhighlightTag',
                'unhighlightClassName',
                'unhighlightStyle',
              ]),
              P = (0, a.findAll)({
                autoEscape: u,
                caseSensitive: f,
                findChunks: p,
                sanitize: O,
                searchWords: x,
                textToHighlight: S,
              }),
              D = w,
              _ = -1,
              R = '',
              I = void 0,
              M = (0, c.default)(function(e) {
                var t = {}
                for (var n in e) t[n.toLowerCase()] = e[n]
                return t
              })
            return (0, l.createElement)(
              'span',
              r({ className: h }, N, {
                children: P.map(function(e, t) {
                  var r = S.substr(e.start, e.end - e.start)
                  if (e.highlight) {
                    _++
                    var o = void 0
                    o = 'object' == typeof v ? (f ? v[r] : (v = M(v))[r.toLowerCase()]) : v
                    var a = _ === +i
                    ;(R = o + ' ' + (a ? n : '')), (I = !0 === a && null != s ? Object.assign({}, y, s) : y)
                    var c = { children: r, className: R, key: t, style: I }
                    return 'string' != typeof D && (c.highlightIndex = _), (0, l.createElement)(D, c)
                  }
                  return (0, l.createElement)(C, { children: r, className: T, key: t, style: k })
                }),
              })
            )
          }
          ;(s.propTypes = {
            activeClassName: i.default.string,
            activeIndex: i.default.number,
            activeStyle: i.default.object,
            autoEscape: i.default.bool,
            className: i.default.string,
            findChunks: i.default.func,
            highlightClassName: i.default.oneOfType([i.default.object, i.default.string]),
            highlightStyle: i.default.object,
            highlightTag: i.default.oneOfType([i.default.node, i.default.func, i.default.string]),
            sanitize: i.default.func,
            searchWords: i.default.arrayOf(i.default.oneOfType([i.default.string, i.default.instanceOf(RegExp)]))
              .isRequired,
            textToHighlight: i.default.string.isRequired,
            unhighlightTag: i.default.oneOfType([i.default.node, i.default.func, i.default.string]),
            unhighlightClassName: i.default.string,
            unhighlightStyle: i.default.object,
          }),
            (e.exports = t.default)
        },
        function(e, t) {
          e.exports = (function(e) {
            var t = {}
            function n(r) {
              if (t[r]) return t[r].exports
              var o = (t[r] = { exports: {}, id: r, loaded: !1 })
              return e[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports
            }
            return (n.m = e), (n.c = t), (n.p = ''), n(0)
          })([
            function(e, t, n) {
              e.exports = n(1)
            },
            function(e, t, n) {
              'use strict'
              Object.defineProperty(t, '__esModule', { value: !0 })
              var r = n(2)
              Object.defineProperty(t, 'combineChunks', {
                enumerable: !0,
                get: function() {
                  return r.combineChunks
                },
              }),
                Object.defineProperty(t, 'fillInChunks', {
                  enumerable: !0,
                  get: function() {
                    return r.fillInChunks
                  },
                }),
                Object.defineProperty(t, 'findAll', {
                  enumerable: !0,
                  get: function() {
                    return r.findAll
                  },
                }),
                Object.defineProperty(t, 'findChunks', {
                  enumerable: !0,
                  get: function() {
                    return r.findChunks
                  },
                })
            },
            function(e, t) {
              'use strict'
              Object.defineProperty(t, '__esModule', { value: !0 })
              t.findAll = function(e) {
                var t = e.autoEscape,
                  a = e.caseSensitive,
                  i = void 0 !== a && a,
                  l = e.findChunks,
                  c = void 0 === l ? r : l,
                  s = e.sanitize,
                  u = e.searchWords,
                  d = e.textToHighlight
                return o({
                  chunksToHighlight: n({
                    chunks: c({ autoEscape: t, caseSensitive: i, sanitize: s, searchWords: u, textToHighlight: d }),
                  }),
                  totalLength: d ? d.length : 0,
                })
              }
              var n = (t.combineChunks = function(e) {
                  var t = e.chunks
                  return (t = t
                    .sort(function(e, t) {
                      return e.start - t.start
                    })
                    .reduce(function(e, t) {
                      if (0 === e.length) return [t]
                      var n = e.pop()
                      if (t.start <= n.end) {
                        var r = Math.max(n.end, t.end)
                        e.push({ start: n.start, end: r })
                      } else e.push(n, t)
                      return e
                    }, []))
                }),
                r = function(e) {
                  var t = e.autoEscape,
                    n = e.caseSensitive,
                    r = e.sanitize,
                    o = void 0 === r ? a : r,
                    i = e.searchWords,
                    l = e.textToHighlight
                  return (
                    (l = o(l)),
                    i
                      .filter(function(e) {
                        return e
                      })
                      .reduce(function(e, r) {
                        ;(r = o(r)), t && (r = r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'))
                        for (var a = new RegExp(r, n ? 'g' : 'gi'), i = void 0; (i = a.exec(l)); ) {
                          var c = i.index,
                            s = a.lastIndex
                          s > c && e.push({ start: c, end: s }), i.index == a.lastIndex && a.lastIndex++
                        }
                        return e
                      }, [])
                  )
                }
              t.findChunks = r
              var o = (t.fillInChunks = function(e) {
                var t = e.chunksToHighlight,
                  n = e.totalLength,
                  r = [],
                  o = function(e, t, n) {
                    t - e > 0 && r.push({ start: e, end: t, highlight: n })
                  }
                if (0 === t.length) o(0, n, !1)
                else {
                  var a = 0
                  t.forEach(function(e) {
                    o(a, e.start, !1), o(e.start, e.end, !0), (a = e.end)
                  }),
                    o(a, n, !1)
                }
                return r
              })
              function a(e) {
                return e
              }
            },
          ])
        },
        function(e, t, n) {
          ;(function(t) {
            if ('production' !== t.env.NODE_ENV) {
              var r = ('function' == typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103
              e.exports = n(6)(function(e) {
                return 'object' == typeof e && null !== e && e.$$typeof === r
              }, !0)
            } else e.exports = n(13)()
          }.call(t, n(5)))
        },
        function(e, t) {
          var n,
            r,
            o = (e.exports = {})
          function a() {
            throw new Error('setTimeout has not been defined')
          }
          function i() {
            throw new Error('clearTimeout has not been defined')
          }
          function l(e) {
            if (n === setTimeout) return setTimeout(e, 0)
            if ((n === a || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0)
            try {
              return n(e, 0)
            } catch (t) {
              try {
                return n.call(null, e, 0)
              } catch (t) {
                return n.call(this, e, 0)
              }
            }
          }
          !(function() {
            try {
              n = 'function' == typeof setTimeout ? setTimeout : a
            } catch (e) {
              n = a
            }
            try {
              r = 'function' == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
              r = i
            }
          })()
          var c,
            s = [],
            u = !1,
            d = -1
          function f() {
            u && c && ((u = !1), c.length ? (s = c.concat(s)) : (d = -1), s.length && h())
          }
          function h() {
            if (!u) {
              var e = l(f)
              u = !0
              for (var t = s.length; t; ) {
                for (c = s, s = []; ++d < t; ) c && c[d].run()
                ;(d = -1), (t = s.length)
              }
              ;(c = null),
                (u = !1),
                (function(e) {
                  if (r === clearTimeout) return clearTimeout(e)
                  if ((r === i || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e)
                  try {
                    r(e)
                  } catch (t) {
                    try {
                      return r.call(null, e)
                    } catch (t) {
                      return r.call(this, e)
                    }
                  }
                })(e)
            }
          }
          function p(e, t) {
            ;(this.fun = e), (this.array = t)
          }
          function g() {}
          ;(o.nextTick = function(e) {
            var t = new Array(arguments.length - 1)
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
            s.push(new p(e, t)), 1 !== s.length || u || l(h)
          }),
            (p.prototype.run = function() {
              this.fun.apply(null, this.array)
            }),
            (o.title = 'browser'),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ''),
            (o.versions = {}),
            (o.on = g),
            (o.addListener = g),
            (o.once = g),
            (o.off = g),
            (o.removeListener = g),
            (o.removeAllListeners = g),
            (o.emit = g),
            (o.prependListener = g),
            (o.prependOnceListener = g),
            (o.listeners = function(e) {
              return []
            }),
            (o.binding = function(e) {
              throw new Error('process.binding is not supported')
            }),
            (o.cwd = function() {
              return '/'
            }),
            (o.chdir = function(e) {
              throw new Error('process.chdir is not supported')
            }),
            (o.umask = function() {
              return 0
            })
        },
        function(e, t, n) {
          ;(function(t) {
            'use strict'
            var r = n(7),
              o = n(8),
              a = n(9),
              i = n(10),
              l = n(11),
              c = n(12)
            e.exports = function(e, n) {
              var s = 'function' == typeof Symbol && Symbol.iterator
              var u = {
                array: p('array'),
                bool: p('boolean'),
                func: p('function'),
                number: p('number'),
                object: p('object'),
                string: p('string'),
                symbol: p('symbol'),
                any: h(r.thatReturnsNull),
                arrayOf: function(e) {
                  return h(function(t, n, r, o, a) {
                    if ('function' != typeof e)
                      return new f(
                        'Property `' + a + '` of component `' + r + '` has invalid PropType notation inside arrayOf.'
                      )
                    var i = t[n]
                    if (!Array.isArray(i))
                      return new f(
                        'Invalid ' +
                          o +
                          ' `' +
                          a +
                          '` of type `' +
                          v(i) +
                          '` supplied to `' +
                          r +
                          '`, expected an array.'
                      )
                    for (var c = 0; c < i.length; c++) {
                      var s = e(i, c, r, o, a + '[' + c + ']', l)
                      if (s instanceof Error) return s
                    }
                    return null
                  })
                },
                element: h(function(t, n, r, o, a) {
                  var i = t[n]
                  return e(i)
                    ? null
                    : new f(
                        'Invalid ' +
                          o +
                          ' `' +
                          a +
                          '` of type `' +
                          v(i) +
                          '` supplied to `' +
                          r +
                          '`, expected a single ReactElement.'
                      )
                }),
                instanceOf: function(e) {
                  return h(function(t, n, r, o, a) {
                    if (!(t[n] instanceof e)) {
                      var i = e.name || '<<anonymous>>'
                      return new f(
                        'Invalid ' +
                          o +
                          ' `' +
                          a +
                          '` of type `' +
                          (function(e) {
                            if (!e.constructor || !e.constructor.name) return '<<anonymous>>'
                            return e.constructor.name
                          })(t[n]) +
                          '` supplied to `' +
                          r +
                          '`, expected instance of `' +
                          i +
                          '`.'
                      )
                    }
                    return null
                  })
                },
                node: h(function(e, t, n, r, o) {
                  return g(e[t])
                    ? null
                    : new f('Invalid ' + r + ' `' + o + '` supplied to `' + n + '`, expected a ReactNode.')
                }),
                objectOf: function(e) {
                  return h(function(t, n, r, o, a) {
                    if ('function' != typeof e)
                      return new f(
                        'Property `' + a + '` of component `' + r + '` has invalid PropType notation inside objectOf.'
                      )
                    var i = t[n],
                      c = v(i)
                    if ('object' !== c)
                      return new f(
                        'Invalid ' + o + ' `' + a + '` of type `' + c + '` supplied to `' + r + '`, expected an object.'
                      )
                    for (var s in i)
                      if (i.hasOwnProperty(s)) {
                        var u = e(i, s, r, o, a + '.' + s, l)
                        if (u instanceof Error) return u
                      }
                    return null
                  })
                },
                oneOf: function(e) {
                  if (!Array.isArray(e))
                    return (
                      'production' !== t.env.NODE_ENV &&
                        a(!1, 'Invalid argument supplied to oneOf, expected an instance of array.'),
                      r.thatReturnsNull
                    )
                  return h(function(t, n, r, o, a) {
                    for (var i = t[n], l = 0; l < e.length; l++) if (d(i, e[l])) return null
                    return new f(
                      'Invalid ' +
                        o +
                        ' `' +
                        a +
                        '` of value `' +
                        i +
                        '` supplied to `' +
                        r +
                        '`, expected one of ' +
                        JSON.stringify(e) +
                        '.'
                    )
                  })
                },
                oneOfType: function(e) {
                  if (!Array.isArray(e))
                    return (
                      'production' !== t.env.NODE_ENV &&
                        a(!1, 'Invalid argument supplied to oneOfType, expected an instance of array.'),
                      r.thatReturnsNull
                    )
                  for (var n = 0; n < e.length; n++) {
                    var o = e[n]
                    if ('function' != typeof o)
                      return (
                        a(
                          !1,
                          'Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.',
                          y(o),
                          n
                        ),
                        r.thatReturnsNull
                      )
                  }
                  return h(function(t, n, r, o, a) {
                    for (var i = 0; i < e.length; i++) {
                      if (null == (0, e[i])(t, n, r, o, a, l)) return null
                    }
                    return new f('Invalid ' + o + ' `' + a + '` supplied to `' + r + '`.')
                  })
                },
                shape: function(e) {
                  return h(function(t, n, r, o, a) {
                    var i = t[n],
                      c = v(i)
                    if ('object' !== c)
                      return new f(
                        'Invalid ' + o + ' `' + a + '` of type `' + c + '` supplied to `' + r + '`, expected `object`.'
                      )
                    for (var s in e) {
                      var u = e[s]
                      if (u) {
                        var d = u(i, s, r, o, a + '.' + s, l)
                        if (d) return d
                      }
                    }
                    return null
                  })
                },
                exact: function(e) {
                  return h(function(t, n, r, o, a) {
                    var c = t[n],
                      s = v(c)
                    if ('object' !== s)
                      return new f(
                        'Invalid ' + o + ' `' + a + '` of type `' + s + '` supplied to `' + r + '`, expected `object`.'
                      )
                    var u = i({}, t[n], e)
                    for (var d in u) {
                      var h = e[d]
                      if (!h)
                        return new f(
                          'Invalid ' +
                            o +
                            ' `' +
                            a +
                            '` key `' +
                            d +
                            '` supplied to `' +
                            r +
                            '`.\nBad object: ' +
                            JSON.stringify(t[n], null, '  ') +
                            '\nValid keys: ' +
                            JSON.stringify(Object.keys(e), null, '  ')
                        )
                      var p = h(c, d, r, o, a + '.' + d, l)
                      if (p) return p
                    }
                    return null
                  })
                },
              }
              function d(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
              }
              function f(e) {
                ;(this.message = e), (this.stack = '')
              }
              function h(e) {
                if ('production' !== t.env.NODE_ENV)
                  var r = {},
                    i = 0
                function c(c, s, u, d, h, p, g) {
                  if (((d = d || '<<anonymous>>'), (p = p || u), g !== l))
                    if (n)
                      o(
                        !1,
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                      )
                    else if ('production' !== t.env.NODE_ENV && 'undefined' != typeof console) {
                      var v = d + ':' + u
                      !r[v] &&
                        i < 3 &&
                        (a(
                          !1,
                          'You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                          p,
                          d
                        ),
                        (r[v] = !0),
                        i++)
                    }
                  return null == s[u]
                    ? c
                      ? null === s[u]
                        ? new f(
                            'The ' + h + ' `' + p + '` is marked as required in `' + d + '`, but its value is `null`.'
                          )
                        : new f(
                            'The ' +
                              h +
                              ' `' +
                              p +
                              '` is marked as required in `' +
                              d +
                              '`, but its value is `undefined`.'
                          )
                      : null
                    : e(s, u, d, h, p)
                }
                var s = c.bind(null, !1)
                return (s.isRequired = c.bind(null, !0)), s
              }
              function p(e) {
                return h(function(t, n, r, o, a, i) {
                  var l = t[n]
                  return v(l) !== e
                    ? new f(
                        'Invalid ' +
                          o +
                          ' `' +
                          a +
                          '` of type `' +
                          b(l) +
                          '` supplied to `' +
                          r +
                          '`, expected `' +
                          e +
                          '`.'
                      )
                    : null
                })
              }
              function g(t) {
                switch (typeof t) {
                  case 'number':
                  case 'string':
                  case 'undefined':
                    return !0
                  case 'boolean':
                    return !t
                  case 'object':
                    if (Array.isArray(t)) return t.every(g)
                    if (null === t || e(t)) return !0
                    var n = (function(e) {
                      var t = e && ((s && e[s]) || e['@@iterator'])
                      if ('function' == typeof t) return t
                    })(t)
                    if (!n) return !1
                    var r,
                      o = n.call(t)
                    if (n !== t.entries) {
                      for (; !(r = o.next()).done; ) if (!g(r.value)) return !1
                    } else
                      for (; !(r = o.next()).done; ) {
                        var a = r.value
                        if (a && !g(a[1])) return !1
                      }
                    return !0
                  default:
                    return !1
                }
              }
              function v(e) {
                var t = typeof e
                return Array.isArray(e)
                  ? 'array'
                  : e instanceof RegExp
                  ? 'object'
                  : (function(e, t) {
                      return (
                        'symbol' === e ||
                        ('Symbol' === t['@@toStringTag'] || ('function' == typeof Symbol && t instanceof Symbol))
                      )
                    })(t, e)
                  ? 'symbol'
                  : t
              }
              function b(e) {
                if (null == e) return '' + e
                var t = v(e)
                if ('object' === t) {
                  if (e instanceof Date) return 'date'
                  if (e instanceof RegExp) return 'regexp'
                }
                return t
              }
              function y(e) {
                var t = b(e)
                switch (t) {
                  case 'array':
                  case 'object':
                    return 'an ' + t
                  case 'boolean':
                  case 'date':
                  case 'regexp':
                    return 'a ' + t
                  default:
                    return t
                }
              }
              return (f.prototype = Error.prototype), (u.checkPropTypes = c), (u.PropTypes = u), u
            }
          }.call(t, n(5)))
        },
        function(e, t) {
          'use strict'
          function n(e) {
            return function() {
              return e
            }
          }
          var r = function() {}
          ;(r.thatReturns = n),
            (r.thatReturnsFalse = n(!1)),
            (r.thatReturnsTrue = n(!0)),
            (r.thatReturnsNull = n(null)),
            (r.thatReturnsThis = function() {
              return this
            }),
            (r.thatReturnsArgument = function(e) {
              return e
            }),
            (e.exports = r)
        },
        function(e, t, n) {
          ;(function(t) {
            'use strict'
            var n = function(e) {}
            'production' !== t.env.NODE_ENV &&
              (n = function(e) {
                if (void 0 === e) throw new Error('invariant requires an error message argument')
              }),
              (e.exports = function(e, t, r, o, a, i, l, c) {
                if ((n(t), !e)) {
                  var s
                  if (void 0 === t)
                    s = new Error(
                      'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                    )
                  else {
                    var u = [r, o, a, i, l, c],
                      d = 0
                    ;(s = new Error(
                      t.replace(/%s/g, function() {
                        return u[d++]
                      })
                    )).name = 'Invariant Violation'
                  }
                  throw ((s.framesToPop = 1), s)
                }
              })
          }.call(t, n(5)))
        },
        function(e, t, n) {
          ;(function(t) {
            'use strict'
            var r = n(7)
            if ('production' !== t.env.NODE_ENV) {
              var o = function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
                var o = 0,
                  a =
                    'Warning: ' +
                    e.replace(/%s/g, function() {
                      return n[o++]
                    })
                'undefined' != typeof console && console.error(a)
                try {
                  throw new Error(a)
                } catch (e) {}
              }
              r = function(e, t) {
                if (void 0 === t)
                  throw new Error('`warning(condition, format, ...args)` requires a warning message argument')
                if (0 !== t.indexOf('Failed Composite propType: ') && !e) {
                  for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
                    r[a - 2] = arguments[a]
                  o.apply(void 0, [t].concat(r))
                }
              }
            }
            e.exports = r
          }.call(t, n(5)))
        },
        function(e, t) {
          /*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
          'use strict'
          var n = Object.getOwnPropertySymbols,
            r = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable
          function a(e) {
            if (null == e) throw new TypeError('Object.assign cannot be called with null or undefined')
            return Object(e)
          }
          e.exports = (function() {
            try {
              if (!Object.assign) return !1
              var e = new String('abc')
              if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
              for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
              if (
                '0123456789' !==
                Object.getOwnPropertyNames(t)
                  .map(function(e) {
                    return t[e]
                  })
                  .join('')
              )
                return !1
              var r = {}
              return (
                'abcdefghijklmnopqrst'.split('').forEach(function(e) {
                  r[e] = e
                }),
                'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
              )
            } catch (e) {
              return !1
            }
          })()
            ? Object.assign
            : function(e, t) {
                for (var i, l, c = a(e), s = 1; s < arguments.length; s++) {
                  for (var u in (i = Object(arguments[s]))) r.call(i, u) && (c[u] = i[u])
                  if (n) {
                    l = n(i)
                    for (var d = 0; d < l.length; d++) o.call(i, l[d]) && (c[l[d]] = i[l[d]])
                  }
                }
                return c
              }
        },
        function(e, t) {
          'use strict'
          e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
        },
        function(e, t, n) {
          ;(function(t) {
            'use strict'
            if ('production' !== t.env.NODE_ENV)
              var r = n(8),
                o = n(9),
                a = n(11),
                i = {}
            e.exports = function(e, n, l, c, s) {
              if ('production' !== t.env.NODE_ENV)
                for (var u in e)
                  if (e.hasOwnProperty(u)) {
                    var d
                    try {
                      r(
                        'function' == typeof e[u],
                        '%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.',
                        c || 'React class',
                        l,
                        u,
                        typeof e[u]
                      ),
                        (d = e[u](n, u, c, l, null, a))
                    } catch (e) {
                      d = e
                    }
                    if (
                      (o(
                        !d || d instanceof Error,
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        c || 'React class',
                        l,
                        u,
                        typeof d
                      ),
                      d instanceof Error && !(d.message in i))
                    ) {
                      i[d.message] = !0
                      var f = s ? s() : ''
                      o(!1, 'Failed %s type: %s%s', l, d.message, null != f ? f : '')
                    }
                  }
            }
          }.call(t, n(5)))
        },
        function(e, t, n) {
          'use strict'
          var r = n(7),
            o = n(8),
            a = n(11)
          e.exports = function() {
            function e(e, t, n, r, i, l) {
              l !== a &&
                o(
                  !1,
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                )
            }
            function t() {
              return e
            }
            e.isRequired = e
            var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
            }
            return (n.checkPropTypes = r), (n.PropTypes = n), n
          }
        },
        function(e, t) {
          e.exports = n(0)
        },
        function(e, t) {
          'use strict'
          var n = function(e, t) {
            return e === t
          }
          e.exports = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
              r = void 0,
              o = [],
              a = void 0,
              i = !1,
              l = function(e, n) {
                return t(e, o[n])
              },
              c = function() {
                for (var t = arguments.length, n = Array(t), c = 0; c < t; c++) n[c] = arguments[c]
                return i && r === this && n.length === o.length && n.every(l)
                  ? a
                  : ((i = !0), (r = this), (o = n), (a = e.apply(this, n)))
              }
            return c
          }
        },
      ])
    },
    function(e, t, n) {
      'use strict'
      e.exports = function(e, t) {
        var n = e.filter(t)
        return 0 !== n.length && n.length !== e.length
      }
    },
    function(e, t, n) {
      'use strict'
      var r = n(6)
      function o() {}
      function a() {}
      ;(a.resetWarningCache = o),
        (e.exports = function() {
          function e(e, t, n, o, a, i) {
            if (i !== r) {
              var l = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((l.name = 'Invariant Violation'), l)
            }
          }
          function t() {
            return e
          }
          e.isRequired = e
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: o,
          }
          return (n.PropTypes = n), n
        })
    },
    function(e, t, n) {
      'use strict'
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {
      'use strict'
      n.r(t)
      var r,
        o,
        a,
        i = n(1),
        l = n.n(i),
        c = n(0),
        s = n.n(c),
        u = function(e) {
          return e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
        },
        d = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object.keys(e).reduce(function(t, n) {
            return (t['data-' + u(n)] = e[n]), t
          }, {})
        },
        f = function(e) {
          return !e || (Array.isArray(e) && !e.length)
        },
        h = ((r = 'rdts'),
        (o = 1),
        (a = new WeakMap()),
        {
          get: function(e) {
            return a.has(e) || a.set(e, o++), '' + r + a.get(e)
          },
          reset: function() {
            ;(a = new WeakMap()), (o = 1)
          },
        })
      var p = function(e, t, n) {
        if (Array.prototype.findIndex) return e.findIndex(t, n)
        if (!e) throw new TypeError('findIndex called on null or undefined')
        if ('function' != typeof t) throw new TypeError('findIndex predicate must be a function')
        for (var r = 0; r < e.length; r++) {
          var o = e[r]
          if (t.call(n, o, r, e)) return r
        }
        return -1
      }
      function g(e, t) {
        var n = (function(e) {
          if (!e) return {}
          if ('#' === e[0]) return { 'aria-labelledby': e.substring(1).replace(/ #/g, ' ') }
          return { 'aria-label': e }
        })(e)
        return t && (n['aria-labelledby'] = ((n['aria-labelledby'] || '') + ' ' + t).trim()), n
      }
      var v =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        b = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var y = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n,
            r,
            o,
            a = (function(e, t) {
              if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            (a.handleInputChange = function(e) {
              e.persist(), a.delayedCallback(e)
            }),
            (a.delayedCallback = ((n = function(e) {
              return a.props.onInputChange(e.target.value)
            }),
            (r = 300),
            (o = void 0),
            function() {
              for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a]
              var i = function() {
                  ;(o = null), n.apply(void 0, t)
                },
                l = !o
              clearTimeout(o), (o = setTimeout(i, r)), l && n.apply(void 0, t)
            })),
            a
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, e),
          b(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.inputRef,
                  n = e.texts,
                  r = void 0 === n ? {} : n,
                  o = e.onFocus,
                  a = e.onBlur,
                  i = e.disabled,
                  l = e.readOnly,
                  c = e.onKeyDown,
                  u = e.activeDescendant,
                  d = e.inlineSearchInput
                return s.a.createElement(
                  'input',
                  v(
                    {
                      type: 'text',
                      disabled: i,
                      ref: t,
                      className: 'search',
                      placeholder: d ? r.inlineSearchPlaceholder || 'Search...' : r.placeholder || 'Choose...',
                      onKeyDown: c,
                      onChange: this.handleInputChange,
                      onFocus: o,
                      onBlur: a,
                      readOnly: l,
                      'aria-activedescendant': u,
                      'aria-autocomplete': c ? 'list' : void 0,
                    },
                    g(r.label)
                  )
                )
              },
            },
          ]),
          t
        )
      })(c.PureComponent)
      y.propTypes = {
        tags: l.a.array,
        texts: l.a.object,
        onInputChange: l.a.func,
        onFocus: l.a.func,
        onBlur: l.a.func,
        onTagRemove: l.a.func,
        onKeyDown: l.a.func,
        inputRef: l.a.func,
        disabled: l.a.bool,
        readOnly: l.a.bool,
        activeDescendant: l.a.string,
        inlineSearchInput: l.a.bool,
      }
      var m = y,
        w = (n(7),
        Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }),
        O = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function x(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function S(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var E = function(e) {
          return e + '_tag'
        },
        C = (function(e) {
          function t() {
            var e, n, r
            x(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = S(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.handleClick = function(e) {
                console.log('handleClick', r.props)
                var t = r.props,
                  n = t.id,
                  o = t.onDelete
                e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), o(n, void 0 !== (e.key || e.keyCode))
              }),
              (r.onKeyDown = function(e) {
                'Backspace' === e.key && (r.handleClick(e), e.preventDefault())
              }),
              (r.onKeyUp = function(e) {
                ;(32 === e.keyCode || ['Delete', 'Enter'].indexOf(e.key) > -1) && (r.handleClick(e), e.preventDefault())
              }),
              S(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, e),
            O(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.id,
                    n = e.label,
                    r = e.labelRemove,
                    o = void 0 === r ? 'Remove' : r,
                    a = e.readOnly,
                    i = e.disabled,
                    l = e.tagPrefix,
                    c = e.tagSuffix,
                    u = E(t),
                    d = t + '_button',
                    f = ['tag-remove', a && 'readOnly', i && 'disabled'].filter(Boolean).join(' '),
                    h = a || i
                  return s.a.createElement(
                    'span',
                    { className: 'tag', id: u, 'aria-label': n },
                    l ? l(w({}, this.props, { value: this.props.id })) : null,
                    n,
                    c ? c(w({}, this.props, { value: this.props.id })) : null,
                    s.a.createElement(
                      'button',
                      {
                        id: d,
                        onClick: h ? void 0 : this.handleClick,
                        onKeyDown: h ? void 0 : this.onKeyDown,
                        onKeyUp: h ? void 0 : this.onKeyUp,
                        className: f,
                        type: 'button',
                        'aria-label': o,
                        'aria-labelledby': d + ' ' + u,
                        'aria-disabled': h,
                      },
                      'X'
                    )
                  )
                },
              },
            ]),
            t
          )
        })(c.PureComponent)
      C.propTypes = {
        id: l.a.string.isRequired,
        label: l.a.string.isRequired,
        onDelete: l.a.func,
        readOnly: l.a.bool,
        disabled: l.a.bool,
        labelRemove: l.a.string,
        tagPrefix: l.a.func,
        tagSuffix: l.a.func,
      }
      var j = C,
        T = (n(8), n(2))
      const k = 'undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement
      function N(e) {
        const t = Object.prototype.toString.call(e)
        return '[object Window]' === t || '[object global]' === t
      }
      function P(e) {
        return 'nodeType' in e
      }
      function D(e) {
        var t, n
        return e
          ? N(e)
            ? e
            : P(e) && null != (t = null == (n = e.ownerDocument) ? void 0 : n.defaultView)
            ? t
            : window
          : window
      }
      function _(e) {
        const { Document: t } = D(e)
        return e instanceof t
      }
      function R(e) {
        return !N(e) && e instanceof D(e).HTMLElement
      }
      function I(e) {
        return e instanceof D(e).SVGElement
      }
      function M(e) {
        return e
          ? N(e)
            ? e.document
            : P(e)
            ? _(e)
              ? e
              : R(e) || I(e)
              ? e.ownerDocument
              : document
            : document
          : document
      }
      const A = k ? c.useLayoutEffect : c.useEffect
      function L(e) {
        const t = Object(c.useRef)(e)
        return (
          A(() => {
            t.current = e
          }),
          Object(c.useCallback)(function() {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]
            return null == t.current ? void 0 : t.current(...n)
          }, [])
        )
      }
      function F(e, t) {
        void 0 === t && (t = [e])
        const n = Object(c.useRef)(e)
        return (
          A(() => {
            n.current !== e && (n.current = e)
          }, t),
          n
        )
      }
      function B(e, t) {
        const n = Object(c.useRef)()
        return Object(c.useMemo)(() => {
          const t = e(n.current)
          return (n.current = t), t
        }, [...t])
      }
      function Y(e) {
        const t = L(e),
          n = Object(c.useRef)(null),
          r = Object(c.useCallback)(e => {
            e !== n.current && (null == t || t(e, n.current)), (n.current = e)
          }, [])
        return [n, r]
      }
      function V(e) {
        const t = Object(c.useRef)()
        return (
          Object(c.useEffect)(() => {
            t.current = e
          }, [e]),
          t.current
        )
      }
      let z = {}
      function K(e, t) {
        return Object(c.useMemo)(() => {
          if (t) return t
          const n = null == z[e] ? 0 : z[e] + 1
          return (z[e] = n), e + '-' + n
        }, [e, t])
      }
      function H(e) {
        return function(t) {
          for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o]
          return r.reduce(
            (t, n) => {
              const r = Object.entries(n)
              for (const [n, o] of r) {
                const r = t[n]
                null != r && (t[n] = r + e * o)
              }
              return t
            },
            { ...t }
          )
        }
      }
      const W = H(1),
        q = H(-1)
      function U(e) {
        if (!e) return !1
        const { KeyboardEvent: t } = D(e.target)
        return t && e instanceof t
      }
      function X(e) {
        if (
          (function(e) {
            if (!e) return !1
            const { TouchEvent: t } = D(e.target)
            return t && e instanceof t
          })(e)
        ) {
          if (e.touches && e.touches.length) {
            const { clientX: t, clientY: n } = e.touches[0]
            return { x: t, y: n }
          }
          if (e.changedTouches && e.changedTouches.length) {
            const { clientX: t, clientY: n } = e.changedTouches[0]
            return { x: t, y: n }
          }
        }
        return (function(e) {
          return 'clientX' in e && 'clientY' in e
        })(e)
          ? { x: e.clientX, y: e.clientY }
          : null
      }
      const J = Object.freeze({
          Translate: {
            toString(e) {
              if (!e) return
              const { x: t, y: n } = e
              return 'translate3d(' + (t ? Math.round(t) : 0) + 'px, ' + (n ? Math.round(n) : 0) + 'px, 0)'
            },
          },
          Scale: {
            toString(e) {
              if (!e) return
              const { scaleX: t, scaleY: n } = e
              return 'scaleX(' + t + ') scaleY(' + n + ')'
            },
          },
          Transform: {
            toString(e) {
              if (e) return [J.Translate.toString(e), J.Scale.toString(e)].join(' ')
            },
          },
          Transition: {
            toString(e) {
              let { property: t, duration: n, easing: r } = e
              return t + ' ' + n + 'ms ' + r
            },
          },
        }),
        $ =
          'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]'
      function G(e) {
        return e.matches($) ? e : e.querySelector($)
      }
      const Z = { display: 'none' }
      function Q(e) {
        let { id: t, value: n } = e
        return s.a.createElement('div', { id: t, style: Z }, n)
      }
      function ee(e) {
        let { id: t, announcement: n, ariaLiveType: r = 'assertive' } = e
        return s.a.createElement(
          'div',
          {
            id: t,
            style: {
              position: 'fixed',
              width: 1,
              height: 1,
              margin: -1,
              border: 0,
              padding: 0,
              overflow: 'hidden',
              clip: 'rect(0 0 0 0)',
              clipPath: 'inset(100%)',
              whiteSpace: 'nowrap',
            },
            role: 'status',
            'aria-live': r,
            'aria-atomic': !0,
          },
          n
        )
      }
      const te = Object(c.createContext)(null)
      const ne = {
          draggable:
            '\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  ',
        },
        re = {
          onDragStart(e) {
            let { active: t } = e
            return 'Picked up draggable item ' + t.id + '.'
          },
          onDragOver(e) {
            let { active: t, over: n } = e
            return n
              ? 'Draggable item ' + t.id + ' was moved over droppable area ' + n.id + '.'
              : 'Draggable item ' + t.id + ' is no longer over a droppable area.'
          },
          onDragEnd(e) {
            let { active: t, over: n } = e
            return n
              ? 'Draggable item ' + t.id + ' was dropped over droppable area ' + n.id
              : 'Draggable item ' + t.id + ' was dropped.'
          },
          onDragCancel(e) {
            let { active: t } = e
            return 'Dragging was cancelled. Draggable item ' + t.id + ' was dropped.'
          },
        }
      function oe(e) {
        let { announcements: t = re, container: n, hiddenTextDescribedById: r, screenReaderInstructions: o = ne } = e
        const { announce: a, announcement: i } = (function() {
            const [e, t] = Object(c.useState)('')
            return {
              announce: Object(c.useCallback)(e => {
                null != e && t(e)
              }, []),
              announcement: e,
            }
          })(),
          l = K('DndLiveRegion'),
          [u, d] = Object(c.useState)(!1)
        if (
          (Object(c.useEffect)(() => {
            d(!0)
          }, []),
          (function(e) {
            const t = Object(c.useContext)(te)
            Object(c.useEffect)(() => {
              if (!t) throw new Error('useDndMonitor must be used within a children of <DndContext>')
              return t(e)
            }, [e, t])
          })(
            Object(c.useMemo)(
              () => ({
                onDragStart(e) {
                  let { active: n } = e
                  a(t.onDragStart({ active: n }))
                },
                onDragMove(e) {
                  let { active: n, over: r } = e
                  t.onDragMove && a(t.onDragMove({ active: n, over: r }))
                },
                onDragOver(e) {
                  let { active: n, over: r } = e
                  a(t.onDragOver({ active: n, over: r }))
                },
                onDragEnd(e) {
                  let { active: n, over: r } = e
                  a(t.onDragEnd({ active: n, over: r }))
                },
                onDragCancel(e) {
                  let { active: n, over: r } = e
                  a(t.onDragCancel({ active: n, over: r }))
                },
              }),
              [a, t]
            )
          ),
          !u)
        )
          return null
        const f = s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(Q, { id: r, value: o.draggable }),
          s.a.createElement(ee, { id: l, announcement: i })
        )
        return n ? Object(T.createPortal)(f, n) : f
      }
      var ae, ie
      function le() {}
      function ce(e, t) {
        return Object(c.useMemo)(() => ({ sensor: e, options: null != t ? t : {} }), [e, t])
      }
      ;((ie = ae || (ae = {})).DragStart = 'dragStart'),
        (ie.DragMove = 'dragMove'),
        (ie.DragEnd = 'dragEnd'),
        (ie.DragCancel = 'dragCancel'),
        (ie.DragOver = 'dragOver'),
        (ie.RegisterDroppable = 'registerDroppable'),
        (ie.SetDroppableDisabled = 'setDroppableDisabled'),
        (ie.UnregisterDroppable = 'unregisterDroppable')
      const se = Object.freeze({ x: 0, y: 0 })
      function ue(e, t) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
      }
      function de(e, t) {
        const n = X(e)
        if (!n) return '0 0'
        return ((n.x - t.left) / t.width) * 100 + '% ' + ((n.y - t.top) / t.height) * 100 + '%'
      }
      function fe(e, t) {
        let {
            data: { value: n },
          } = e,
          {
            data: { value: r },
          } = t
        return n - r
      }
      function he(e, t) {
        let {
            data: { value: n },
          } = e,
          {
            data: { value: r },
          } = t
        return r - n
      }
      function pe(e) {
        let { left: t, top: n, height: r, width: o } = e
        return [{ x: t, y: n }, { x: t + o, y: n }, { x: t, y: n + r }, { x: t + o, y: n + r }]
      }
      function ge(e, t) {
        if (!e || 0 === e.length) return null
        const [n] = e
        return t ? n[t] : n
      }
      function ve(e, t, n) {
        return (
          void 0 === t && (t = e.left), void 0 === n && (n = e.top), { x: t + 0.5 * e.width, y: n + 0.5 * e.height }
        )
      }
      const be = e => {
        let { collisionRect: t, droppableRects: n, droppableContainers: r } = e
        const o = ve(t, t.left, t.top),
          a = []
        for (const e of r) {
          const { id: t } = e,
            r = n.get(t)
          if (r) {
            const n = ue(ve(r), o)
            a.push({ id: t, data: { droppableContainer: e, value: n } })
          }
        }
        return a.sort(fe)
      }
      function ye(e, t) {
        const n = Math.max(t.top, e.top),
          r = Math.max(t.left, e.left),
          o = Math.min(t.left + t.width, e.left + e.width),
          a = Math.min(t.top + t.height, e.top + e.height),
          i = o - r,
          l = a - n
        if (r < o && n < a) {
          const n = t.width * t.height,
            r = e.width * e.height,
            o = i * l
          return Number((o / (n + r - o)).toFixed(4))
        }
        return 0
      }
      const me = e => {
        let { collisionRect: t, droppableRects: n, droppableContainers: r } = e
        const o = []
        for (const e of r) {
          const { id: r } = e,
            a = n.get(r)
          if (a) {
            const n = ye(a, t)
            n > 0 && o.push({ id: r, data: { droppableContainer: e, value: n } })
          }
        }
        return o.sort(he)
      }
      function we(e, t) {
        return e && t ? { x: e.left - t.left, y: e.top - t.top } : se
      }
      function Oe(e) {
        return function(t) {
          for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o]
          return r.reduce(
            (t, n) => ({
              ...t,
              top: t.top + e * n.y,
              bottom: t.bottom + e * n.y,
              left: t.left + e * n.x,
              right: t.right + e * n.x,
            }),
            { ...t }
          )
        }
      }
      const xe = Oe(1)
      function Se(e) {
        if (e.startsWith('matrix3d(')) {
          const t = e.slice(9, -1).split(/, /)
          return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] }
        }
        if (e.startsWith('matrix(')) {
          const t = e.slice(7, -1).split(/, /)
          return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] }
        }
        return null
      }
      const Ee = { ignoreTransform: !1 }
      function Ce(e, t) {
        void 0 === t && (t = Ee)
        let n = e.getBoundingClientRect()
        if (t.ignoreTransform) {
          const { transform: t, transformOrigin: r } = D(e).getComputedStyle(e)
          t &&
            (n = (function(e, t, n) {
              const r = Se(t)
              if (!r) return e
              const { scaleX: o, scaleY: a, x: i, y: l } = r,
                c = e.left - i - (1 - o) * parseFloat(n),
                s = e.top - l - (1 - a) * parseFloat(n.slice(n.indexOf(' ') + 1)),
                u = o ? e.width / o : e.width,
                d = a ? e.height / a : e.height
              return { width: u, height: d, top: s, right: c + u, bottom: s + d, left: c }
            })(n, t, r))
        }
        const { top: r, left: o, width: a, height: i, bottom: l, right: c } = n
        return { top: r, left: o, width: a, height: i, bottom: l, right: c }
      }
      function je(e) {
        return Ce(e, { ignoreTransform: !0 })
      }
      function Te(e, t) {
        const n = []
        return e
          ? (function r(o) {
              if (null != t && n.length >= t) return n
              if (!o) return n
              if (_(o) && null != o.scrollingElement && !n.includes(o.scrollingElement))
                return n.push(o.scrollingElement), n
              if (!R(o) || I(o)) return n
              if (n.includes(o)) return n
              const a = D(e).getComputedStyle(o)
              return (
                o !== e &&
                  (function(e, t) {
                    void 0 === t && (t = D(e).getComputedStyle(e))
                    const n = /(auto|scroll|overlay)/
                    return ['overflow', 'overflowX', 'overflowY'].some(e => {
                      const r = t[e]
                      return 'string' == typeof r && n.test(r)
                    })
                  })(o, a) &&
                  n.push(o),
                (function(e, t) {
                  return void 0 === t && (t = D(e).getComputedStyle(e)), 'fixed' === t.position
                })(o, a)
                  ? n
                  : r(o.parentNode)
              )
            })(e)
          : n
      }
      function ke(e) {
        const [t] = Te(e, 1)
        return null != t ? t : null
      }
      function Ne(e) {
        return k && e
          ? N(e)
            ? e
            : P(e)
            ? _(e) || e === M(e).scrollingElement
              ? window
              : R(e)
              ? e
              : null
            : null
          : null
      }
      function Pe(e) {
        return N(e) ? e.scrollX : e.scrollLeft
      }
      function De(e) {
        return N(e) ? e.scrollY : e.scrollTop
      }
      function _e(e) {
        return { x: Pe(e), y: De(e) }
      }
      var Re
      function Ie(e) {
        return !(!k || !e) && e === document.scrollingElement
      }
      function Me(e) {
        const t = { x: 0, y: 0 },
          n = Ie(e)
            ? { height: window.innerHeight, width: window.innerWidth }
            : { height: e.clientHeight, width: e.clientWidth },
          r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height }
        return {
          isTop: e.scrollTop <= t.y,
          isLeft: e.scrollLeft <= t.x,
          isBottom: e.scrollTop >= r.y,
          isRight: e.scrollLeft >= r.x,
          maxScroll: r,
          minScroll: t,
        }
      }
      !(function(e) {
        ;(e[(e.Forward = 1)] = 'Forward'), (e[(e.Backward = -1)] = 'Backward')
      })(Re || (Re = {}))
      const Ae = { x: 0.2, y: 0.2 }
      function Le(e, t, n, r, o) {
        let { top: a, left: i, right: l, bottom: c } = n
        void 0 === r && (r = 10), void 0 === o && (o = Ae)
        const { isTop: s, isBottom: u, isLeft: d, isRight: f } = Me(e),
          h = { x: 0, y: 0 },
          p = { x: 0, y: 0 },
          g = t.height * o.y,
          v = t.width * o.x
        return (
          !s && a <= t.top + g
            ? ((h.y = Re.Backward), (p.y = r * Math.abs((t.top + g - a) / g)))
            : !u && c >= t.bottom - g && ((h.y = Re.Forward), (p.y = r * Math.abs((t.bottom - g - c) / g))),
          !f && l >= t.right - v
            ? ((h.x = Re.Forward), (p.x = r * Math.abs((t.right - v - l) / v)))
            : !d && i <= t.left + v && ((h.x = Re.Backward), (p.x = r * Math.abs((t.left + v - i) / v))),
          { direction: h, speed: p }
        )
      }
      function Fe(e) {
        if (e === document.scrollingElement) {
          const { innerWidth: e, innerHeight: t } = window
          return { top: 0, left: 0, right: e, bottom: t, width: e, height: t }
        }
        const { top: t, left: n, right: r, bottom: o } = e.getBoundingClientRect()
        return { top: t, left: n, right: r, bottom: o, width: e.clientWidth, height: e.clientHeight }
      }
      function Be(e) {
        return e.reduce((e, t) => W(e, _e(t)), se)
      }
      function Ye(e, t) {
        if ((void 0 === t && (t = Ce), !e)) return
        const { top: n, left: r, bottom: o, right: a } = t(e)
        ke(e) &&
          (o <= 0 || a <= 0 || n >= window.innerHeight || r >= window.innerWidth) &&
          e.scrollIntoView({ block: 'center', inline: 'center' })
      }
      const Ve = [
        [
          'x',
          ['left', 'right'],
          function(e) {
            return e.reduce((e, t) => e + Pe(t), 0)
          },
        ],
        [
          'y',
          ['top', 'bottom'],
          function(e) {
            return e.reduce((e, t) => e + De(t), 0)
          },
        ],
      ]
      class ze {
        constructor(e, t) {
          ;(this.rect = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.right = void 0),
            (this.left = void 0)
          const n = Te(t),
            r = Be(n)
          ;(this.rect = { ...e }), (this.width = e.width), (this.height = e.height)
          for (const [e, t, o] of Ve)
            for (const a of t)
              Object.defineProperty(this, a, {
                get: () => {
                  const t = o(n),
                    i = r[e] - t
                  return this.rect[a] + i
                },
                enumerable: !0,
              })
          Object.defineProperty(this, 'rect', { enumerable: !1 })
        }
      }
      class Ke {
        constructor(e) {
          ;(this.target = void 0),
            (this.listeners = []),
            (this.removeAll = () => {
              this.listeners.forEach(e => {
                var t
                return null == (t = this.target) ? void 0 : t.removeEventListener(...e)
              })
            }),
            (this.target = e)
        }
        add(e, t, n) {
          var r
          null == (r = this.target) || r.addEventListener(e, t, n), this.listeners.push([e, t, n])
        }
      }
      function He(e, t) {
        const n = Math.abs(e.x),
          r = Math.abs(e.y)
        return 'number' == typeof t
          ? Math.sqrt(n ** 2 + r ** 2) > t
          : 'x' in t && 'y' in t
          ? n > t.x && r > t.y
          : 'x' in t
          ? n > t.x
          : 'y' in t && r > t.y
      }
      var We, qe
      function Ue(e) {
        e.preventDefault()
      }
      function Xe(e) {
        e.stopPropagation()
      }
      !(function(e) {
        ;(e.Click = 'click'),
          (e.DragStart = 'dragstart'),
          (e.Keydown = 'keydown'),
          (e.ContextMenu = 'contextmenu'),
          (e.Resize = 'resize'),
          (e.SelectionChange = 'selectionchange'),
          (e.VisibilityChange = 'visibilitychange')
      })(We || (We = {})),
        (function(e) {
          ;(e.Space = 'Space'),
            (e.Down = 'ArrowDown'),
            (e.Right = 'ArrowRight'),
            (e.Left = 'ArrowLeft'),
            (e.Up = 'ArrowUp'),
            (e.Esc = 'Escape'),
            (e.Enter = 'Enter')
        })(qe || (qe = {}))
      const Je = { start: [qe.Space, qe.Enter], cancel: [qe.Esc], end: [qe.Space, qe.Enter] },
        $e = (e, t) => {
          let { currentCoordinates: n } = t
          switch (e.code) {
            case qe.Right:
              return { ...n, x: n.x + 25 }
            case qe.Left:
              return { ...n, x: n.x - 25 }
            case qe.Down:
              return { ...n, y: n.y + 25 }
            case qe.Up:
              return { ...n, y: n.y - 25 }
          }
        }
      class Ge {
        constructor(e) {
          ;(this.props = void 0),
            (this.autoScrollEnabled = !1),
            (this.referenceCoordinates = void 0),
            (this.listeners = void 0),
            (this.windowListeners = void 0),
            (this.props = e)
          const {
            event: { target: t },
          } = e
          ;(this.props = e),
            (this.listeners = new Ke(M(t))),
            (this.windowListeners = new Ke(D(t))),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this)),
            this.attach()
        }
        attach() {
          this.handleStart(),
            this.windowListeners.add(We.Resize, this.handleCancel),
            this.windowListeners.add(We.VisibilityChange, this.handleCancel),
            setTimeout(() => this.listeners.add(We.Keydown, this.handleKeyDown))
        }
        handleStart() {
          const { activeNode: e, onStart: t } = this.props,
            n = e.node.current
          n && Ye(n), t(se)
        }
        handleKeyDown(e) {
          if (U(e)) {
            const { active: t, context: n, options: r } = this.props,
              { keyboardCodes: o = Je, coordinateGetter: a = $e, scrollBehavior: i = 'smooth' } = r,
              { code: l } = e
            if (o.end.includes(l)) return void this.handleEnd(e)
            if (o.cancel.includes(l)) return void this.handleCancel(e)
            const { collisionRect: c } = n.current,
              s = c ? { x: c.left, y: c.top } : se
            this.referenceCoordinates || (this.referenceCoordinates = s)
            const u = a(e, { active: t, context: n.current, currentCoordinates: s })
            if (u) {
              const t = q(u, s),
                r = { x: 0, y: 0 },
                { scrollableAncestors: o } = n.current
              for (const n of o) {
                const o = e.code,
                  { isTop: a, isRight: l, isLeft: c, isBottom: s, maxScroll: d, minScroll: f } = Me(n),
                  h = Fe(n),
                  p = {
                    x: Math.min(
                      o === qe.Right ? h.right - h.width / 2 : h.right,
                      Math.max(o === qe.Right ? h.left : h.left + h.width / 2, u.x)
                    ),
                    y: Math.min(
                      o === qe.Down ? h.bottom - h.height / 2 : h.bottom,
                      Math.max(o === qe.Down ? h.top : h.top + h.height / 2, u.y)
                    ),
                  },
                  g = (o === qe.Right && !l) || (o === qe.Left && !c),
                  v = (o === qe.Down && !s) || (o === qe.Up && !a)
                if (g && p.x !== u.x) {
                  const e = n.scrollLeft + t.x,
                    a = (o === qe.Right && e <= d.x) || (o === qe.Left && e >= f.x)
                  if (a && !t.y) return void n.scrollTo({ left: e, behavior: i })
                  ;(r.x = a ? n.scrollLeft - e : o === qe.Right ? n.scrollLeft - d.x : n.scrollLeft - f.x),
                    r.x && n.scrollBy({ left: -r.x, behavior: i })
                  break
                }
                if (v && p.y !== u.y) {
                  const e = n.scrollTop + t.y,
                    a = (o === qe.Down && e <= d.y) || (o === qe.Up && e >= f.y)
                  if (a && !t.x) return void n.scrollTo({ top: e, behavior: i })
                  ;(r.y = a ? n.scrollTop - e : o === qe.Down ? n.scrollTop - d.y : n.scrollTop - f.y),
                    r.y && n.scrollBy({ top: -r.y, behavior: i })
                  break
                }
              }
              this.handleMove(e, W(q(u, this.referenceCoordinates), r))
            }
          }
        }
        handleMove(e, t) {
          const { onMove: n } = this.props
          e.preventDefault(), n(t)
        }
        handleEnd(e) {
          const { onEnd: t } = this.props
          e.preventDefault(), this.detach(), t()
        }
        handleCancel(e) {
          const { onCancel: t } = this.props
          e.preventDefault(), this.detach(), t()
        }
        detach() {
          this.listeners.removeAll(), this.windowListeners.removeAll()
        }
      }
      function Ze(e) {
        return Boolean(e && 'distance' in e)
      }
      function Qe(e) {
        return Boolean(e && 'delay' in e)
      }
      Ge.activators = [
        {
          eventName: 'onKeyDown',
          handler: (e, t, n) => {
            let { keyboardCodes: r = Je, onActivation: o } = t,
              { active: a } = n
            const { code: i } = e.nativeEvent
            if (r.start.includes(i)) {
              const t = a.activatorNode.current
              return (!t || e.target === t) && (e.preventDefault(), null == o || o({ event: e.nativeEvent }), !0)
            }
            return !1
          },
        },
      ]
      class et {
        constructor(e, t, n) {
          var r
          void 0 === n &&
            (n = (function(e) {
              const { EventTarget: t } = D(e)
              return e instanceof t ? e : M(e)
            })(e.event.target)),
            (this.props = void 0),
            (this.events = void 0),
            (this.autoScrollEnabled = !0),
            (this.document = void 0),
            (this.activated = !1),
            (this.initialCoordinates = void 0),
            (this.timeoutId = null),
            (this.listeners = void 0),
            (this.documentListeners = void 0),
            (this.windowListeners = void 0),
            (this.props = e),
            (this.events = t)
          const { event: o } = e,
            { target: a } = o
          ;(this.props = e),
            (this.events = t),
            (this.document = M(a)),
            (this.documentListeners = new Ke(this.document)),
            (this.listeners = new Ke(n)),
            (this.windowListeners = new Ke(D(a))),
            (this.initialCoordinates = null != (r = X(o)) ? r : se),
            (this.handleStart = this.handleStart.bind(this)),
            (this.handleMove = this.handleMove.bind(this)),
            (this.handleEnd = this.handleEnd.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this)),
            (this.handleKeydown = this.handleKeydown.bind(this)),
            (this.removeTextSelection = this.removeTextSelection.bind(this)),
            this.attach()
        }
        attach() {
          const {
            events: e,
            props: {
              options: { activationConstraint: t, bypassActivationConstraint: n },
            },
          } = this
          if (
            (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }),
            this.listeners.add(e.end.name, this.handleEnd),
            this.windowListeners.add(We.Resize, this.handleCancel),
            this.windowListeners.add(We.DragStart, Ue),
            this.windowListeners.add(We.VisibilityChange, this.handleCancel),
            this.windowListeners.add(We.ContextMenu, Ue),
            this.documentListeners.add(We.Keydown, this.handleKeydown),
            t)
          ) {
            if (
              null != n &&
              n({ event: this.props.event, activeNode: this.props.activeNode, options: this.props.options })
            )
              return this.handleStart()
            if (Qe(t)) return void (this.timeoutId = setTimeout(this.handleStart, t.delay))
            if (Ze(t)) return
          }
          this.handleStart()
        }
        detach() {
          this.listeners.removeAll(),
            this.windowListeners.removeAll(),
            setTimeout(this.documentListeners.removeAll, 50),
            null !== this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = null))
        }
        handleStart() {
          const { initialCoordinates: e } = this,
            { onStart: t } = this.props
          e &&
            ((this.activated = !0),
            this.documentListeners.add(We.Click, Xe, { capture: !0 }),
            this.removeTextSelection(),
            this.documentListeners.add(We.SelectionChange, this.removeTextSelection),
            t(e))
        }
        handleMove(e) {
          var t
          const { activated: n, initialCoordinates: r, props: o } = this,
            {
              onMove: a,
              options: { activationConstraint: i },
            } = o
          if (!r) return
          const l = null != (t = X(e)) ? t : se,
            c = q(r, l)
          if (!n && i) {
            if (Ze(i)) {
              if (null != i.tolerance && He(c, i.tolerance)) return this.handleCancel()
              if (He(c, i.distance)) return this.handleStart()
            }
            return Qe(i) && He(c, i.tolerance) ? this.handleCancel() : void 0
          }
          e.cancelable && e.preventDefault(), a(l)
        }
        handleEnd() {
          const { onEnd: e } = this.props
          this.detach(), e()
        }
        handleCancel() {
          const { onCancel: e } = this.props
          this.detach(), e()
        }
        handleKeydown(e) {
          e.code === qe.Esc && this.handleCancel()
        }
        removeTextSelection() {
          var e
          null == (e = this.document.getSelection()) || e.removeAllRanges()
        }
      }
      const tt = { move: { name: 'pointermove' }, end: { name: 'pointerup' } }
      class nt extends et {
        constructor(e) {
          const { event: t } = e,
            n = M(t.target)
          super(e, tt, n)
        }
      }
      nt.activators = [
        {
          eventName: 'onPointerDown',
          handler: (e, t) => {
            let { nativeEvent: n } = e,
              { onActivation: r } = t
            return !(!n.isPrimary || 0 !== n.button) && (null == r || r({ event: n }), !0)
          },
        },
      ]
      const rt = { move: { name: 'mousemove' }, end: { name: 'mouseup' } }
      var ot
      !(function(e) {
        e[(e.RightClick = 2)] = 'RightClick'
      })(ot || (ot = {}))
      ;(class extends et {
        constructor(e) {
          super(e, rt, M(e.event.target))
        }
      }.activators = [
        {
          eventName: 'onMouseDown',
          handler: (e, t) => {
            let { nativeEvent: n } = e,
              { onActivation: r } = t
            return n.button !== ot.RightClick && (null == r || r({ event: n }), !0)
          },
        },
      ])
      const at = { move: { name: 'touchmove' }, end: { name: 'touchend' } }
      var it, lt
      function ct(e) {
        let {
          acceleration: t,
          activator: n = it.Pointer,
          canScroll: r,
          draggingRect: o,
          enabled: a,
          interval: i = 5,
          order: l = lt.TreeOrder,
          pointerCoordinates: s,
          scrollableAncestors: u,
          scrollableAncestorRects: d,
          delta: f,
          threshold: h,
        } = e
        const p = (function(e) {
            let { delta: t, disabled: n } = e
            const r = V(t)
            return B(
              e => {
                if (n || !r || !e) return st
                const o = Math.sign(t.x - r.x),
                  a = Math.sign(t.y - r.y)
                return {
                  x: { [Re.Backward]: e.x[Re.Backward] || -1 === o, [Re.Forward]: e.x[Re.Forward] || 1 === o },
                  y: { [Re.Backward]: e.y[Re.Backward] || -1 === a, [Re.Forward]: e.y[Re.Forward] || 1 === a },
                }
              },
              [n, t, r]
            )
          })({ delta: f, disabled: !a }),
          [g, v] = (function() {
            const e = Object(c.useRef)(null)
            return [
              Object(c.useCallback)((t, n) => {
                e.current = setInterval(t, n)
              }, []),
              Object(c.useCallback)(() => {
                null !== e.current && (clearInterval(e.current), (e.current = null))
              }, []),
            ]
          })(),
          b = Object(c.useRef)({ x: 0, y: 0 }),
          y = Object(c.useRef)({ x: 0, y: 0 }),
          m = Object(c.useMemo)(() => {
            switch (n) {
              case it.Pointer:
                return s ? { top: s.y, bottom: s.y, left: s.x, right: s.x } : null
              case it.DraggableRect:
                return o
            }
          }, [n, o, s]),
          w = Object(c.useRef)(null),
          O = Object(c.useCallback)(() => {
            const e = w.current
            if (!e) return
            const t = b.current.x * y.current.x,
              n = b.current.y * y.current.y
            e.scrollBy(t, n)
          }, []),
          x = Object(c.useMemo)(() => (l === lt.TreeOrder ? [...u].reverse() : u), [l, u])
        Object(c.useEffect)(() => {
          if (a && u.length && m) {
            for (const e of x) {
              if (!1 === (null == r ? void 0 : r(e))) continue
              const n = u.indexOf(e),
                o = d[n]
              if (!o) continue
              const { direction: a, speed: l } = Le(e, o, m, t, h)
              for (const e of ['x', 'y']) p[e][a[e]] || ((l[e] = 0), (a[e] = 0))
              if (l.x > 0 || l.y > 0) return v(), (w.current = e), g(O, i), (b.current = l), void (y.current = a)
            }
            ;(b.current = { x: 0, y: 0 }), (y.current = { x: 0, y: 0 }), v()
          } else v()
        }, [t, O, r, v, a, i, JSON.stringify(m), JSON.stringify(p), g, u, x, d, JSON.stringify(h)])
      }
      ;((class extends et {
        constructor(e) {
          super(e, at)
        }
        static setup() {
          return (
            window.addEventListener(at.move.name, e, { capture: !1, passive: !1 }),
            function() {
              window.removeEventListener(at.move.name, e)
            }
          )
          function e() {}
        }
      }.activators = [
        {
          eventName: 'onTouchStart',
          handler: (e, t) => {
            let { nativeEvent: n } = e,
              { onActivation: r } = t
            const { touches: o } = n
            return !(o.length > 1) && (null == r || r({ event: n }), !0)
          },
        },
      ]),
        (function(e) {
          ;(e[(e.Pointer = 0)] = 'Pointer'), (e[(e.DraggableRect = 1)] = 'DraggableRect')
        })(it || (it = {})),
        (function(e) {
          ;(e[(e.TreeOrder = 0)] = 'TreeOrder'), (e[(e.ReversedTreeOrder = 1)] = 'ReversedTreeOrder')
        })(lt || (lt = {})))
      const st = { x: { [Re.Backward]: !1, [Re.Forward]: !1 }, y: { [Re.Backward]: !1, [Re.Forward]: !1 } }
      var ut, dt
      !(function(e) {
        ;(e[(e.Always = 0)] = 'Always'),
          (e[(e.BeforeDragging = 1)] = 'BeforeDragging'),
          (e[(e.WhileDragging = 2)] = 'WhileDragging')
      })(ut || (ut = {})),
        (function(e) {
          e.Optimized = 'optimized'
        })(dt || (dt = {}))
      const ft = new Map()
      function ht(e, t) {
        return B(n => (e ? n || ('function' == typeof t ? t(e) : e) : null), [t, e])
      }
      function pt(e) {
        let { callback: t, disabled: n } = e
        const r = L(t),
          o = Object(c.useMemo)(() => {
            if (n || 'undefined' == typeof window || void 0 === window.ResizeObserver) return
            const { ResizeObserver: e } = window
            return new e(r)
          }, [n])
        return Object(c.useEffect)(() => () => (null == o ? void 0 : o.disconnect()), [o]), o
      }
      function gt(e) {
        return new ze(Ce(e), e)
      }
      function vt(e, t, n) {
        void 0 === t && (t = gt)
        const [r, o] = Object(c.useReducer)(function(r) {
            if (!e) return null
            var o
            if (!1 === e.isConnected) return null != (o = null != r ? r : n) ? o : null
            const a = t(e)
            if (JSON.stringify(r) === JSON.stringify(a)) return r
            return a
          }, null),
          a = (function(e) {
            let { callback: t, disabled: n } = e
            const r = L(t),
              o = Object(c.useMemo)(() => {
                if (n || 'undefined' == typeof window || void 0 === window.MutationObserver) return
                const { MutationObserver: e } = window
                return new e(r)
              }, [r, n])
            return Object(c.useEffect)(() => () => (null == o ? void 0 : o.disconnect()), [o]), o
          })({
            callback(t) {
              if (e)
                for (const n of t) {
                  const { type: t, target: r } = n
                  if ('childList' === t && r instanceof HTMLElement && r.contains(e)) {
                    o()
                    break
                  }
                }
            },
          }),
          i = pt({ callback: o })
        return (
          A(() => {
            o(),
              e
                ? (null == i || i.observe(e), null == a || a.observe(document.body, { childList: !0, subtree: !0 }))
                : (null == i || i.disconnect(), null == a || a.disconnect())
          }, [e]),
          r
        )
      }
      const bt = []
      function yt(e, t) {
        void 0 === t && (t = [])
        const n = Object(c.useRef)(null)
        return (
          Object(c.useEffect)(() => {
            n.current = null
          }, t),
          Object(c.useEffect)(() => {
            const t = e !== se
            t && !n.current && (n.current = e), !t && n.current && (n.current = null)
          }, [e]),
          n.current ? q(e, n.current) : se
        )
      }
      function mt(e) {
        return Object(c.useMemo)(
          () =>
            e
              ? (function(e) {
                  const t = e.innerWidth,
                    n = e.innerHeight
                  return { top: 0, left: 0, right: t, bottom: n, width: t, height: n }
                })(e)
              : null,
          [e]
        )
      }
      const wt = []
      function Ot(e) {
        if (!e) return null
        if (e.children.length > 1) return e
        const t = e.children[0]
        return R(t) ? t : e
      }
      const xt = [{ sensor: nt, options: {} }, { sensor: Ge, options: {} }],
        St = { current: {} },
        Et = {
          draggable: { measure: je },
          droppable: { measure: je, strategy: ut.WhileDragging, frequency: dt.Optimized },
          dragOverlay: { measure: Ce },
        }
      class Ct extends Map {
        get(e) {
          var t
          return null != e && null != (t = super.get(e)) ? t : void 0
        }
        toArray() {
          return Array.from(this.values())
        }
        getEnabled() {
          return this.toArray().filter(e => {
            let { disabled: t } = e
            return !t
          })
        }
        getNodeFor(e) {
          var t, n
          return null != (t = null == (n = this.get(e)) ? void 0 : n.node.current) ? t : void 0
        }
      }
      const jt = {
          activatorEvent: null,
          active: null,
          activeNode: null,
          activeNodeRect: null,
          collisions: null,
          containerNodeRect: null,
          draggableNodes: new Map(),
          droppableRects: new Map(),
          droppableContainers: new Ct(),
          over: null,
          dragOverlay: { nodeRef: { current: null }, rect: null, setRef: le },
          scrollableAncestors: [],
          scrollableAncestorRects: [],
          measuringConfiguration: Et,
          measureDroppableContainers: le,
          windowRect: null,
          measuringScheduled: !1,
        },
        Tt = {
          activatorEvent: null,
          activators: [],
          active: null,
          activeNodeRect: null,
          ariaDescribedById: { draggable: '' },
          dispatch: le,
          draggableNodes: new Map(),
          over: null,
          measureDroppableContainers: le,
        },
        kt = Object(c.createContext)(Tt),
        Nt = Object(c.createContext)(jt)
      function Pt() {
        return {
          draggable: { active: null, initialCoordinates: { x: 0, y: 0 }, nodes: new Map(), translate: { x: 0, y: 0 } },
          droppable: { containers: new Ct() },
        }
      }
      function Dt(e, t) {
        switch (t.type) {
          case ae.DragStart:
            return { ...e, draggable: { ...e.draggable, initialCoordinates: t.initialCoordinates, active: t.active } }
          case ae.DragMove:
            return e.draggable.active
              ? {
                  ...e,
                  draggable: {
                    ...e.draggable,
                    translate: {
                      x: t.coordinates.x - e.draggable.initialCoordinates.x,
                      y: t.coordinates.y - e.draggable.initialCoordinates.y,
                    },
                  },
                }
              : e
          case ae.DragEnd:
          case ae.DragCancel:
            return {
              ...e,
              draggable: {
                ...e.draggable,
                active: null,
                initialCoordinates: { x: 0, y: 0 },
                translate: { x: 0, y: 0 },
              },
            }
          case ae.RegisterDroppable: {
            const { element: n } = t,
              { id: r } = n,
              o = new Ct(e.droppable.containers)
            return o.set(r, n), { ...e, droppable: { ...e.droppable, containers: o } }
          }
          case ae.SetDroppableDisabled: {
            const { id: n, key: r, disabled: o } = t,
              a = e.droppable.containers.get(n)
            if (!a || r !== a.key) return e
            const i = new Ct(e.droppable.containers)
            return i.set(n, { ...a, disabled: o }), { ...e, droppable: { ...e.droppable, containers: i } }
          }
          case ae.UnregisterDroppable: {
            const { id: n, key: r } = t,
              o = e.droppable.containers.get(n)
            if (!o || r !== o.key) return e
            const a = new Ct(e.droppable.containers)
            return a.delete(n), { ...e, droppable: { ...e.droppable, containers: a } }
          }
          default:
            return e
        }
      }
      function _t(e) {
        let { disabled: t } = e
        const { active: n, activatorEvent: r, draggableNodes: o } = Object(c.useContext)(kt),
          a = V(r),
          i = V(null == n ? void 0 : n.id)
        return (
          Object(c.useEffect)(() => {
            if (!t && !r && a && null != i) {
              if (!U(a)) return
              if (document.activeElement === a.target) return
              const e = o.get(i)
              if (!e) return
              const { activatorNode: t, node: n } = e
              if (!t.current && !n.current) return
              requestAnimationFrame(() => {
                for (const e of [t.current, n.current]) {
                  if (!e) continue
                  const t = G(e)
                  if (t) {
                    t.focus()
                    break
                  }
                }
              })
            }
          }, [r, t, o, i, a]),
          null
        )
      }
      function Rt(e, t) {
        let { transform: n, ...r } = t
        return null != e && e.length ? e.reduce((e, t) => t({ transform: e, ...r }), n) : n
      }
      const It = Object(c.createContext)({ ...se, scaleX: 1, scaleY: 1 })
      var Mt
      !(function(e) {
        ;(e[(e.Uninitialized = 0)] = 'Uninitialized'),
          (e[(e.Initializing = 1)] = 'Initializing'),
          (e[(e.Initialized = 2)] = 'Initialized')
      })(Mt || (Mt = {}))
      const At = Object(c.memo)(function(e) {
          var t, n, r, o
          let {
            id: a,
            accessibility: i,
            autoScroll: l = !0,
            children: u,
            sensors: d = xt,
            collisionDetection: f = me,
            measuring: h,
            modifiers: p,
            ...g
          } = e
          const v = Object(c.useReducer)(Dt, void 0, Pt),
            [b, y] = v,
            [m, w] = (function() {
              const [e] = Object(c.useState)(() => new Set()),
                t = Object(c.useCallback)(t => (e.add(t), () => e.delete(t)), [e])
              return [
                Object(c.useCallback)(
                  t => {
                    let { type: n, event: r } = t
                    e.forEach(e => {
                      var t
                      return null == (t = e[n]) ? void 0 : t.call(e, r)
                    })
                  },
                  [e]
                ),
                t,
              ]
            })(),
            [O, x] = Object(c.useState)(Mt.Uninitialized),
            S = O === Mt.Initialized,
            {
              draggable: { active: E, nodes: C, translate: j },
              droppable: { containers: N },
            } = b,
            P = E ? C.get(E) : null,
            _ = Object(c.useRef)({ initial: null, translated: null }),
            I = Object(c.useMemo)(() => {
              var e
              return null != E ? { id: E, data: null != (e = null == P ? void 0 : P.data) ? e : St, rect: _ } : null
            }, [E, P]),
            M = Object(c.useRef)(null),
            [L, V] = Object(c.useState)(null),
            [z, H] = Object(c.useState)(null),
            q = F(g, Object.values(g)),
            U = K('DndDescribedBy', a),
            J = Object(c.useMemo)(() => N.getEnabled(), [N]),
            $ = ((G = h),
            Object(c.useMemo)(
              () => ({
                draggable: { ...Et.draggable, ...(null == G ? void 0 : G.draggable) },
                droppable: { ...Et.droppable, ...(null == G ? void 0 : G.droppable) },
                dragOverlay: { ...Et.dragOverlay, ...(null == G ? void 0 : G.dragOverlay) },
              }),
              [null == G ? void 0 : G.draggable, null == G ? void 0 : G.droppable, null == G ? void 0 : G.dragOverlay]
            ))
          var G
          const { droppableRects: Z, measureDroppableContainers: Q, measuringScheduled: ee } = (function(e, t) {
              let { dragging: n, dependencies: r, config: o } = t
              const [a, i] = Object(c.useState)(null),
                { frequency: l, measure: s, strategy: u } = o,
                d = Object(c.useRef)(e),
                f = (function() {
                  switch (u) {
                    case ut.Always:
                      return !1
                    case ut.BeforeDragging:
                      return n
                    default:
                      return !n
                  }
                })(),
                h = F(f),
                p = Object(c.useCallback)(
                  function(e) {
                    void 0 === e && (e = []),
                      h.current || i(t => (null === t ? e : t.concat(e.filter(e => !t.includes(e)))))
                  },
                  [h]
                ),
                g = Object(c.useRef)(null),
                v = B(
                  t => {
                    if (f && !n) return ft
                    if (!t || t === ft || d.current !== e || null != a) {
                      const t = new Map()
                      for (let n of e) {
                        if (!n) continue
                        if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
                          t.set(n.id, n.rect.current)
                          continue
                        }
                        const e = n.node.current,
                          r = e ? new ze(s(e), e) : null
                        ;(n.rect.current = r), r && t.set(n.id, r)
                      }
                      return t
                    }
                    return t
                  },
                  [e, a, n, f, s]
                )
              return (
                Object(c.useEffect)(() => {
                  d.current = e
                }, [e]),
                Object(c.useEffect)(() => {
                  f || p()
                }, [n, f]),
                Object(c.useEffect)(() => {
                  a && a.length > 0 && i(null)
                }, [JSON.stringify(a)]),
                Object(c.useEffect)(() => {
                  f ||
                    'number' != typeof l ||
                    null !== g.current ||
                    (g.current = setTimeout(() => {
                      p(), (g.current = null)
                    }, l))
                }, [l, f, p, ...r]),
                { droppableRects: v, measureDroppableContainers: p, measuringScheduled: null != a }
              )
            })(J, { dragging: S, dependencies: [j.x, j.y], config: $.droppable }),
            ne = (function(e, t) {
              const n = null !== t ? e.get(t) : void 0,
                r = n ? n.node.current : null
              return B(
                e => {
                  var n
                  return null === t ? null : null != (n = null != r ? r : e) ? n : null
                },
                [r, t]
              )
            })(C, E),
            re = Object(c.useMemo)(() => (z ? X(z) : null), [z]),
            ie = (function() {
              const e = !1 === (null == L ? void 0 : L.autoScrollEnabled),
                t = 'object' == typeof l ? !1 === l.enabled : !1 === l,
                n = S && !e && !t
              if ('object' == typeof l) return { ...l, enabled: n }
              return { enabled: n }
            })(),
            le = (function(e, t) {
              return ht(e, t)
            })(ne, $.draggable.measure)
          !(function(e) {
            let { activeNode: t, measure: n, initialRect: r, config: o = !0 } = e
            const a = Object(c.useRef)(!1),
              { x: i, y: l } = 'boolean' == typeof o ? { x: o, y: o } : o
            A(() => {
              if ((!i && !l) || !t) return void (a.current = !1)
              if (a.current || !r) return
              const e = null == t ? void 0 : t.node.current
              if (!e || !1 === e.isConnected) return
              const o = we(n(e), r)
              if ((i || (o.x = 0), l || (o.y = 0), (a.current = !0), Math.abs(o.x) > 0 || Math.abs(o.y) > 0)) {
                const t = ke(e)
                t && t.scrollBy({ top: o.y, left: o.x })
              }
            }, [t, i, l, r, n])
          })({
            activeNode: E ? C.get(E) : null,
            config: ie.layoutShiftCompensation,
            initialRect: le,
            measure: $.draggable.measure,
          })
          const ce = vt(ne, $.draggable.measure, le),
            ue = vt(ne ? ne.parentElement : null),
            de = Object(c.useRef)({
              activatorEvent: null,
              active: null,
              activeNode: ne,
              collisionRect: null,
              collisions: null,
              droppableRects: Z,
              draggableNodes: C,
              draggingNode: null,
              draggingNodeRect: null,
              droppableContainers: N,
              over: null,
              scrollableAncestors: [],
              scrollAdjustedTranslate: null,
            }),
            fe = N.getNodeFor(null == (t = de.current.over) ? void 0 : t.id),
            he = (function(e) {
              let { measure: t } = e
              const [n, r] = Object(c.useState)(null),
                o = pt({
                  callback: Object(c.useCallback)(
                    e => {
                      for (const { target: n } of e)
                        if (R(n)) {
                          r(e => {
                            const r = t(n)
                            return e ? { ...e, width: r.width, height: r.height } : r
                          })
                          break
                        }
                    },
                    [t]
                  ),
                }),
                a = Object(c.useCallback)(
                  e => {
                    const n = Ot(e)
                    null == o || o.disconnect(), n && (null == o || o.observe(n)), r(n ? t(n) : null)
                  },
                  [t, o]
                ),
                [i, l] = Y(a)
              return Object(c.useMemo)(() => ({ nodeRef: i, rect: n, setRef: l }), [n, i, l])
            })({ measure: $.dragOverlay.measure }),
            pe = null != (n = he.nodeRef.current) ? n : ne,
            ve = S ? (null != (r = he.rect) ? r : ce) : null,
            be = Boolean(he.nodeRef.current && he.rect),
            ye = we((Oe = be ? null : ce), ht(Oe))
          var Oe
          const Se = mt(pe ? D(pe) : null),
            Ee = (function(e) {
              const t = Object(c.useRef)(e),
                n = B(
                  n =>
                    e ? (n && n !== bt && e && t.current && e.parentNode === t.current.parentNode ? n : Te(e)) : bt,
                  [e]
                )
              return (
                Object(c.useEffect)(() => {
                  t.current = e
                }, [e]),
                n
              )
            })(S ? (null != fe ? fe : ne) : null),
            je = (function(e, t) {
              void 0 === t && (t = Ce)
              const [n] = e,
                r = mt(n ? D(n) : null),
                [o, a] = Object(c.useReducer)(function() {
                  if (!e.length) return wt
                  return e.map(e => (Ie(e) ? r : new ze(t(e), e)))
                }, wt),
                i = pt({ callback: a })
              return (
                e.length > 0 && o === wt && a(),
                A(() => {
                  e.length ? e.forEach(e => (null == i ? void 0 : i.observe(e))) : (null == i || i.disconnect(), a())
                }, [e]),
                o
              )
            })(Ee),
            Pe = Rt(p, {
              transform: { x: j.x - ye.x, y: j.y - ye.y, scaleX: 1, scaleY: 1 },
              activatorEvent: z,
              active: I,
              activeNodeRect: ce,
              containerNodeRect: ue,
              draggingNodeRect: ve,
              over: de.current.over,
              overlayNodeRect: he.rect,
              scrollableAncestors: Ee,
              scrollableAncestorRects: je,
              windowRect: Se,
            }),
            De = re ? W(re, j) : null,
            Re = (function(e) {
              const [t, n] = Object(c.useState)(null),
                r = Object(c.useRef)(e),
                o = Object(c.useCallback)(e => {
                  const t = Ne(e.target)
                  t && n(e => (e ? (e.set(t, _e(t)), new Map(e)) : null))
                }, [])
              return (
                Object(c.useEffect)(() => {
                  const t = r.current
                  if (e !== t) {
                    a(t)
                    const i = e
                      .map(e => {
                        const t = Ne(e)
                        return t ? (t.addEventListener('scroll', o, { passive: !0 }), [t, _e(t)]) : null
                      })
                      .filter(e => null != e)
                    n(i.length ? new Map(i) : null), (r.current = e)
                  }
                  return () => {
                    a(e), a(t)
                  }
                  function a(e) {
                    e.forEach(e => {
                      const t = Ne(e)
                      null == t || t.removeEventListener('scroll', o)
                    })
                  }
                }, [o, e]),
                Object(c.useMemo)(
                  () => (e.length ? (t ? Array.from(t.values()).reduce((e, t) => W(e, t), se) : Be(e)) : se),
                  [e, t]
                )
              )
            })(Ee),
            Me = yt(Re),
            Ae = yt(Re, [ce]),
            Le = W(Pe, Me),
            Fe = ve ? xe(ve, Pe) : null,
            Ye =
              I && Fe
                ? f({ active: I, collisionRect: Fe, droppableRects: Z, droppableContainers: J, pointerCoordinates: De })
                : null,
            Ve = ge(Ye, 'id'),
            [Ke, He] = Object(c.useState)(null),
            We = (function(e, t, n) {
              return { ...e, scaleX: t && n ? t.width / n.width : 1, scaleY: t && n ? t.height / n.height : 1 }
            })(be ? Pe : W(Pe, Ae), null != (o = null == Ke ? void 0 : Ke.rect) ? o : null, ce),
            qe = Object(c.useCallback)(
              (e, t) => {
                let { sensor: n, options: r } = t
                if (null == M.current) return
                const o = C.get(M.current)
                if (!o) return
                const a = e.nativeEvent,
                  i = new n({
                    active: M.current,
                    activeNode: o,
                    event: a,
                    options: r,
                    context: de,
                    onStart(e) {
                      const t = M.current
                      if (null == t) return
                      const n = C.get(t)
                      if (!n) return
                      const { onDragStart: r } = q.current,
                        o = { active: { id: t, data: n.data, rect: _ } }
                      Object(T.unstable_batchedUpdates)(() => {
                        null == r || r(o),
                          x(Mt.Initializing),
                          y({ type: ae.DragStart, initialCoordinates: e, active: t }),
                          m({ type: 'onDragStart', event: o })
                      })
                    },
                    onMove(e) {
                      y({ type: ae.DragMove, coordinates: e })
                    },
                    onEnd: l(ae.DragEnd),
                    onCancel: l(ae.DragCancel),
                  })
                function l(e) {
                  return async function() {
                    const { active: t, collisions: n, over: r, scrollAdjustedTranslate: o } = de.current
                    let i = null
                    if (t && o) {
                      const { cancelDrop: l } = q.current
                      if (
                        ((i = { activatorEvent: a, active: t, collisions: n, delta: o, over: r }),
                        e === ae.DragEnd && 'function' == typeof l)
                      ) {
                        ;(await Promise.resolve(l(i))) && (e = ae.DragCancel)
                      }
                    }
                    ;(M.current = null),
                      Object(T.unstable_batchedUpdates)(() => {
                        y({ type: e }), x(Mt.Uninitialized), He(null), V(null), H(null)
                        const t = e === ae.DragEnd ? 'onDragEnd' : 'onDragCancel'
                        if (i) {
                          const e = q.current[t]
                          null == e || e(i), m({ type: t, event: i })
                        }
                      })
                  }
                }
                Object(T.unstable_batchedUpdates)(() => {
                  V(i), H(e.nativeEvent)
                })
              },
              [C]
            ),
            Ue = (function(e, t) {
              return Object(c.useMemo)(
                () =>
                  e.reduce((e, n) => {
                    const { sensor: r } = n
                    return [...e, ...r.activators.map(e => ({ eventName: e.eventName, handler: t(e.handler, n) }))]
                  }, []),
                [e, t]
              )
            })(
              d,
              Object(c.useCallback)(
                (e, t) => (n, r) => {
                  const o = n.nativeEvent,
                    a = C.get(r)
                  if (null !== M.current || !a || o.dndKit || o.defaultPrevented) return
                  const i = { active: a }
                  !0 === e(n, t.options, i) && ((o.dndKit = { capturedBy: t.sensor }), (M.current = r), qe(n, t))
                },
                [C, qe]
              )
            )
          !(function(e) {
            Object(c.useEffect)(
              () => {
                if (!k) return
                const t = e.map(e => {
                  let { sensor: t } = e
                  return null == t.setup ? void 0 : t.setup()
                })
                return () => {
                  for (const e of t) null == e || e()
                }
              },
              e.map(e => {
                let { sensor: t } = e
                return t
              })
            )
          })(d),
            A(() => {
              ce && O === Mt.Initializing && x(Mt.Initialized)
            }, [ce, O]),
            Object(c.useEffect)(() => {
              const { onDragMove: e } = q.current,
                { active: t, activatorEvent: n, collisions: r, over: o } = de.current
              if (!t || !n) return
              const a = { active: t, activatorEvent: n, collisions: r, delta: { x: Le.x, y: Le.y }, over: o }
              Object(T.unstable_batchedUpdates)(() => {
                null == e || e(a), m({ type: 'onDragMove', event: a })
              })
            }, [Le.x, Le.y]),
            Object(c.useEffect)(() => {
              const {
                active: e,
                activatorEvent: t,
                collisions: n,
                droppableContainers: r,
                scrollAdjustedTranslate: o,
              } = de.current
              if (!e || null == M.current || !t || !o) return
              const { onDragOver: a } = q.current,
                i = r.get(Ve),
                l = i && i.rect.current ? { id: i.id, rect: i.rect.current, data: i.data, disabled: i.disabled } : null,
                c = { active: e, activatorEvent: t, collisions: n, delta: { x: o.x, y: o.y }, over: l }
              Object(T.unstable_batchedUpdates)(() => {
                He(l), null == a || a(c), m({ type: 'onDragOver', event: c })
              })
            }, [Ve]),
            A(() => {
              ;(de.current = {
                activatorEvent: z,
                active: I,
                activeNode: ne,
                collisionRect: Fe,
                collisions: Ye,
                droppableRects: Z,
                draggableNodes: C,
                draggingNode: pe,
                draggingNodeRect: ve,
                droppableContainers: N,
                over: Ke,
                scrollableAncestors: Ee,
                scrollAdjustedTranslate: Le,
              }),
                (_.current = { initial: ve, translated: Fe })
            }, [I, ne, Ye, Fe, C, pe, ve, Z, N, Ke, Ee, Le]),
            ct({
              ...ie,
              delta: j,
              draggingRect: Fe,
              pointerCoordinates: De,
              scrollableAncestors: Ee,
              scrollableAncestorRects: je,
            })
          const Xe = Object(c.useMemo)(
              () => ({
                active: I,
                activeNode: ne,
                activeNodeRect: ce,
                activatorEvent: z,
                collisions: Ye,
                containerNodeRect: ue,
                dragOverlay: he,
                draggableNodes: C,
                droppableContainers: N,
                droppableRects: Z,
                over: Ke,
                measureDroppableContainers: Q,
                scrollableAncestors: Ee,
                scrollableAncestorRects: je,
                measuringConfiguration: $,
                measuringScheduled: ee,
                windowRect: Se,
              }),
              [I, ne, ce, z, Ye, ue, he, C, N, Z, Ke, Q, Ee, je, $, ee, Se]
            ),
            Je = Object(c.useMemo)(
              () => ({
                activatorEvent: z,
                activators: Ue,
                active: I,
                activeNodeRect: ce,
                ariaDescribedById: { draggable: U },
                dispatch: y,
                draggableNodes: C,
                over: Ke,
                measureDroppableContainers: Q,
              }),
              [z, Ue, I, ce, y, U, C, Ke, Q]
            )
          return s.a.createElement(
            te.Provider,
            { value: w },
            s.a.createElement(
              kt.Provider,
              { value: Je },
              s.a.createElement(Nt.Provider, { value: Xe }, s.a.createElement(It.Provider, { value: We }, u)),
              s.a.createElement(_t, { disabled: !1 === (null == i ? void 0 : i.restoreFocus) })
            ),
            s.a.createElement(oe, { ...i, hiddenTextDescribedById: U })
          )
        }),
        Lt = Object(c.createContext)(null),
        Ft = 'button'
      function Bt(e) {
        let { id: t, data: n, disabled: r = !1, attributes: o } = e
        const a = K('Droppable'),
          {
            activators: i,
            activatorEvent: l,
            active: s,
            activeNodeRect: u,
            ariaDescribedById: d,
            draggableNodes: f,
            over: h,
          } = Object(c.useContext)(kt),
          { role: p = Ft, roleDescription: g = 'draggable', tabIndex: v = 0 } = null != o ? o : {},
          b = (null == s ? void 0 : s.id) === t,
          y = Object(c.useContext)(b ? It : Lt),
          [m, w] = Y(),
          [O, x] = Y(),
          S = (function(e, t) {
            return Object(c.useMemo)(
              () =>
                e.reduce((e, n) => {
                  let { eventName: r, handler: o } = n
                  return (
                    (e[r] = e => {
                      o(e, t)
                    }),
                    e
                  )
                }, {}),
              [e, t]
            )
          })(i, t),
          E = F(n)
        A(
          () => (
            f.set(t, { id: t, key: a, node: m, activatorNode: O, data: E }),
            () => {
              const e = f.get(t)
              e && e.key === a && f.delete(t)
            }
          ),
          [f, t]
        )
        return {
          active: s,
          activatorEvent: l,
          activeNodeRect: u,
          attributes: Object(c.useMemo)(
            () => ({
              role: p,
              tabIndex: v,
              'aria-disabled': r,
              'aria-pressed': !(!b || p !== Ft) || void 0,
              'aria-roledescription': g,
              'aria-describedby': d.draggable,
            }),
            [r, p, v, b, g, d.draggable]
          ),
          isDragging: b,
          listeners: r ? void 0 : S,
          node: m,
          over: h,
          setNodeRef: w,
          setActivatorNodeRef: x,
          transform: y,
        }
      }
      function Yt() {
        return Object(c.useContext)(Nt)
      }
      const Vt = { timeout: 25 }
      function zt(e) {
        let { animation: t, children: n } = e
        const [r, o] = Object(c.useState)(null),
          [a, i] = Object(c.useState)(null),
          l = V(n)
        return (
          n || r || !l || o(l),
          A(() => {
            if (!a) return
            const e = null == r ? void 0 : r.key,
              n = null == r ? void 0 : r.props.id
            null != e && null != n
              ? Promise.resolve(t(n, a)).then(() => {
                  o(null)
                })
              : o(null)
          }, [t, r, a]),
          s.a.createElement(s.a.Fragment, null, n, r ? Object(c.cloneElement)(r, { ref: i }) : null)
        )
      }
      const Kt = { x: 0, y: 0, scaleX: 1, scaleY: 1 }
      function Ht(e) {
        let { children: t } = e
        return s.a.createElement(kt.Provider, { value: Tt }, s.a.createElement(It.Provider, { value: Kt }, t))
      }
      const Wt = { position: 'fixed', touchAction: 'none' },
        qt = e => (U(e) ? 'transform 250ms ease' : void 0),
        Ut = Object(c.forwardRef)((e, t) => {
          let {
            as: n,
            activatorEvent: r,
            adjustScale: o,
            children: a,
            className: i,
            rect: l,
            style: c,
            transform: u,
            transition: d = qt,
          } = e
          if (!l) return null
          const f = o ? u : { ...u, scaleX: 1, scaleY: 1 },
            h = {
              ...Wt,
              width: l.width,
              height: l.height,
              top: l.top,
              left: l.left,
              transform: J.Transform.toString(f),
              transformOrigin: o && r ? de(r, l) : void 0,
              transition: 'function' == typeof d ? d(r) : d,
              ...c,
            }
          return s.a.createElement(n, { className: i, style: h, ref: t }, a)
        }),
        Xt = {
          duration: 250,
          easing: 'ease',
          keyframes: e => {
            let {
              transform: { initial: t, final: n },
            } = e
            return [{ transform: J.Transform.toString(t) }, { transform: J.Transform.toString(n) }]
          },
          sideEffects: (e => t => {
            let { active: n, dragOverlay: r } = t
            const o = {},
              { styles: a, className: i } = e
            if (null != a && a.active)
              for (const [e, t] of Object.entries(a.active))
                void 0 !== t && ((o[e] = n.node.style.getPropertyValue(e)), n.node.style.setProperty(e, t))
            if (null != a && a.dragOverlay)
              for (const [e, t] of Object.entries(a.dragOverlay)) void 0 !== t && r.node.style.setProperty(e, t)
            return (
              null != i && i.active && n.node.classList.add(i.active),
              null != i && i.dragOverlay && r.node.classList.add(i.dragOverlay),
              function() {
                for (const [e, t] of Object.entries(o)) n.node.style.setProperty(e, t)
                null != i && i.active && n.node.classList.remove(i.active)
              }
            )
          })({ styles: { active: { opacity: '0' } } }),
        }
      function Jt(e) {
        let { config: t, draggableNodes: n, droppableContainers: r, measuringConfiguration: o } = e
        return L((e, a) => {
          if (null === t) return
          const i = n.get(e)
          if (!i) return
          const l = i.node.current
          if (!l) return
          const c = Ot(a)
          if (!c) return
          const { transform: s } = D(a).getComputedStyle(a),
            u = Se(s)
          if (!u) return
          const d =
            'function' == typeof t
              ? t
              : (function(e) {
                  const { duration: t, easing: n, sideEffects: r, keyframes: o } = { ...Xt, ...e }
                  return e => {
                    let { active: a, dragOverlay: i, transform: l, ...c } = e
                    if (!t) return
                    const s = i.rect.left - a.rect.left,
                      u = i.rect.top - a.rect.top,
                      d = {
                        scaleX: 1 !== l.scaleX ? (a.rect.width * l.scaleX) / i.rect.width : 1,
                        scaleY: 1 !== l.scaleY ? (a.rect.height * l.scaleY) / i.rect.height : 1,
                      },
                      f = { x: l.x - s, y: l.y - u, ...d },
                      h = o({ ...c, active: a, dragOverlay: i, transform: { initial: l, final: f } }),
                      [p] = h,
                      g = h[h.length - 1]
                    if (JSON.stringify(p) === JSON.stringify(g)) return
                    const v = null == r ? void 0 : r({ active: a, dragOverlay: i, ...c }),
                      b = i.node.animate(h, { duration: t, easing: n, fill: 'forwards' })
                    return new Promise(e => {
                      b.onfinish = () => {
                        null == v || v(), e()
                      }
                    })
                  }
                })(t)
          return (
            Ye(l, o.draggable.measure),
            d({
              active: { id: e, data: i.data, node: l, rect: o.draggable.measure(l) },
              draggableNodes: n,
              dragOverlay: { node: a, rect: o.dragOverlay.measure(c) },
              droppableContainers: r,
              measuringConfiguration: o,
              transform: u,
            })
          )
        })
      }
      let $t = 0
      const Gt = s.a.memo(e => {
        let {
          adjustScale: t = !1,
          children: n,
          dropAnimation: r,
          style: o,
          transition: a,
          modifiers: i,
          wrapperElement: l = 'div',
          className: u,
          zIndex: d = 999,
        } = e
        const {
            activatorEvent: f,
            active: h,
            activeNodeRect: p,
            containerNodeRect: g,
            draggableNodes: v,
            droppableContainers: b,
            dragOverlay: y,
            over: m,
            measuringConfiguration: w,
            scrollableAncestors: O,
            scrollableAncestorRects: x,
            windowRect: S,
          } = Yt(),
          E = Object(c.useContext)(It),
          C = ((j = null == h ? void 0 : h.id),
          Object(c.useMemo)(() => {
            if (null != j) return $t++, $t
          }, [j]))
        var j
        const T = Rt(i, {
            activatorEvent: f,
            active: h,
            activeNodeRect: p,
            containerNodeRect: g,
            draggingNodeRect: y.rect,
            over: m,
            overlayNodeRect: y.rect,
            scrollableAncestors: O,
            scrollableAncestorRects: x,
            transform: E,
            windowRect: S,
          }),
          k = ht(p),
          N = Jt({ config: r, draggableNodes: v, droppableContainers: b, measuringConfiguration: w }),
          P = k ? y.setRef : void 0
        return s.a.createElement(
          Ht,
          null,
          s.a.createElement(
            zt,
            { animation: N },
            h && C
              ? s.a.createElement(
                  Ut,
                  {
                    key: C,
                    id: h.id,
                    ref: P,
                    as: l,
                    activatorEvent: f,
                    adjustScale: t,
                    className: u,
                    transition: a,
                    rect: k,
                    style: { zIndex: d, ...o },
                    transform: T,
                  },
                  n
                )
              : null
          )
        )
      })
      function Zt(e, t, n) {
        const r = e.slice()
        return r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r
      }
      function Qt(e, t) {
        return e.reduce((e, n, r) => {
          const o = t.get(n)
          return o && (e[r] = o), e
        }, Array(e.length))
      }
      function en(e) {
        return null !== e && e >= 0
      }
      const tn = e => {
          let { rects: t, activeIndex: n, overIndex: r, index: o } = e
          const a = Zt(t, r, n),
            i = t[o],
            l = a[o]
          return l && i
            ? { x: l.left - i.left, y: l.top - i.top, scaleX: l.width / i.width, scaleY: l.height / i.height }
            : null
        },
        nn = e => {
          let t,
            n,
            { activeIndex: r, index: o, rects: a, overIndex: i } = e
          return (
            o === r && ((t = a[o]), (n = a[i])),
            o === i && ((t = a[o]), (n = a[r])),
            n && t
              ? { x: n.left - t.left, y: n.top - t.top, scaleX: n.width / t.width, scaleY: n.height / t.height }
              : null
          )
        }
      const rn = s.a.createContext({
        activeIndex: -1,
        containerId: 'Sortable',
        disableTransforms: !1,
        items: [],
        overIndex: -1,
        useDragOverlay: !1,
        sortedRects: [],
        strategy: tn,
        disabled: { draggable: !1, droppable: !1 },
      })
      function on(e) {
        let { children: t, id: n, items: r, strategy: o = tn, disabled: a = !1 } = e
        const { active: i, dragOverlay: l, droppableRects: u, over: d, measureDroppableContainers: f } = Yt(),
          h = K('Sortable', n),
          p = Boolean(null !== l.rect),
          g = Object(c.useMemo)(() => r.map(e => ('object' == typeof e && 'id' in e ? e.id : e)), [r]),
          v = null != i,
          b = i ? g.indexOf(i.id) : -1,
          y = d ? g.indexOf(d.id) : -1,
          m = Object(c.useRef)(g),
          w = !(function(e, t) {
            if (e === t) return !0
            if (e.length !== t.length) return !1
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
            return !0
          })(g, m.current),
          O = (-1 !== y && -1 === b) || w,
          x = (function(e) {
            return 'boolean' == typeof e ? { draggable: e, droppable: e } : e
          })(a)
        A(() => {
          w && v && f(g)
        }, [w, g, v, f]),
          Object(c.useEffect)(() => {
            m.current = g
          }, [g])
        const S = Object(c.useMemo)(
          () => ({
            activeIndex: b,
            containerId: h,
            disabled: x,
            disableTransforms: O,
            items: g,
            overIndex: y,
            useDragOverlay: p,
            sortedRects: Qt(g, u),
            strategy: o,
          }),
          [b, h, x.draggable, x.droppable, O, g, y, u, p, o]
        )
        return s.a.createElement(rn.Provider, { value: S }, t)
      }
      const an = e => {
          let { id: t, items: n, activeIndex: r, overIndex: o } = e
          return Zt(n, r, o).indexOf(t)
        },
        ln = e => {
          let {
            containerId: t,
            isSorting: n,
            wasDragging: r,
            index: o,
            items: a,
            newIndex: i,
            previousItems: l,
            previousContainerId: c,
            transition: s,
          } = e
          return !(!s || !r) && ((l === a || o !== i) && (!!n || (i !== o && t === c)))
        },
        cn = { duration: 200, easing: 'ease' },
        sn = J.Transition.toString({ property: 'transform', duration: 0, easing: 'linear' }),
        un = { roleDescription: 'sortable' }
      function dn(e) {
        let {
          animateLayoutChanges: t = ln,
          attributes: n,
          disabled: r,
          data: o,
          getNewIndex: a = an,
          id: i,
          strategy: l,
          resizeObserverConfig: s,
          transition: u = cn,
        } = e
        const {
            items: d,
            containerId: f,
            activeIndex: h,
            disabled: p,
            disableTransforms: g,
            sortedRects: v,
            overIndex: b,
            useDragOverlay: y,
            strategy: m,
          } = Object(c.useContext)(rn),
          w = (function(e, t) {
            var n, r
            if ('boolean' == typeof e) return { draggable: e, droppable: !1 }
            return {
              draggable: null != (n = null == e ? void 0 : e.draggable) ? n : t.draggable,
              droppable: null != (r = null == e ? void 0 : e.droppable) ? r : t.droppable,
            }
          })(r, p),
          O = d.indexOf(i),
          x = Object(c.useMemo)(() => ({ sortable: { containerId: f, index: O, items: d }, ...o }), [f, o, O, d]),
          S = Object(c.useMemo)(() => d.slice(d.indexOf(i)), [d, i]),
          { rect: E, node: C, isOver: j, setNodeRef: T } = (function(e) {
            let { data: t, disabled: n = !1, id: r, resizeObserverConfig: o } = e
            const a = K('Droppable'),
              { active: i, dispatch: l, over: s, measureDroppableContainers: u } = Object(c.useContext)(kt),
              d = Object(c.useRef)({ disabled: n }),
              f = Object(c.useRef)(!1),
              h = Object(c.useRef)(null),
              p = Object(c.useRef)(null),
              { disabled: g, updateMeasurementsFor: v, timeout: b } = { ...Vt, ...o },
              y = F(null != v ? v : r),
              m = pt({
                callback: Object(c.useCallback)(() => {
                  f.current
                    ? (null != p.current && clearTimeout(p.current),
                      (p.current = setTimeout(() => {
                        u(Array.isArray(y.current) ? y.current : [y.current]), (p.current = null)
                      }, b)))
                    : (f.current = !0)
                }, [b]),
                disabled: g || !i,
              }),
              w = Object(c.useCallback)(
                (e, t) => {
                  m && (t && (m.unobserve(t), (f.current = !1)), e && m.observe(e))
                },
                [m]
              ),
              [O, x] = Y(w),
              S = F(t)
            return (
              Object(c.useEffect)(() => {
                m && O.current && (m.disconnect(), (f.current = !1), m.observe(O.current))
              }, [O, m]),
              A(
                () => (
                  l({ type: ae.RegisterDroppable, element: { id: r, key: a, disabled: n, node: O, rect: h, data: S } }),
                  () => l({ type: ae.UnregisterDroppable, key: a, id: r })
                ),
                [r]
              ),
              Object(c.useEffect)(() => {
                n !== d.current.disabled &&
                  (l({ type: ae.SetDroppableDisabled, id: r, key: a, disabled: n }), (d.current.disabled = n))
              }, [r, a, n, l]),
              { active: i, rect: h, isOver: (null == s ? void 0 : s.id) === r, node: O, over: s, setNodeRef: x }
            )
          })({ id: i, data: x, disabled: w.droppable, resizeObserverConfig: { updateMeasurementsFor: S, ...s } }),
          {
            active: k,
            activatorEvent: N,
            activeNodeRect: P,
            attributes: D,
            setNodeRef: _,
            listeners: R,
            isDragging: I,
            over: M,
            setActivatorNodeRef: L,
            transform: B,
          } = Bt({ id: i, data: x, attributes: { ...un, ...n }, disabled: w.draggable }),
          V = (function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
            return Object(c.useMemo)(
              () => e => {
                t.forEach(t => t(e))
              },
              t
            )
          })(T, _),
          z = Boolean(k),
          H = z && !g && en(h) && en(b),
          W = !y && I,
          q = W && H ? B : null,
          X = H
            ? null != q
              ? q
              : (null != l ? l : m)({ rects: v, activeNodeRect: P, activeIndex: h, overIndex: b, index: O })
            : null,
          $ = en(h) && en(b) ? a({ id: i, items: d, activeIndex: h, overIndex: b }) : O,
          G = null == k ? void 0 : k.id,
          Z = Object(c.useRef)({ activeId: G, items: d, newIndex: $, containerId: f }),
          Q = d !== Z.current.items,
          ee = t({
            active: k,
            containerId: f,
            isDragging: I,
            isSorting: z,
            id: i,
            index: O,
            items: d,
            newIndex: Z.current.newIndex,
            previousItems: Z.current.items,
            previousContainerId: Z.current.containerId,
            transition: u,
            wasDragging: null != Z.current.activeId,
          }),
          te = (function(e) {
            let { disabled: t, index: n, node: r, rect: o } = e
            const [a, i] = Object(c.useState)(null),
              l = Object(c.useRef)(n)
            return (
              A(() => {
                if (!t && n !== l.current && r.current) {
                  const e = o.current
                  if (e) {
                    const t = Ce(r.current, { ignoreTransform: !0 }),
                      n = {
                        x: e.left - t.left,
                        y: e.top - t.top,
                        scaleX: e.width / t.width,
                        scaleY: e.height / t.height,
                      }
                    ;(n.x || n.y) && i(n)
                  }
                }
                n !== l.current && (l.current = n)
              }, [t, n, r, o]),
              Object(c.useEffect)(() => {
                a && i(null)
              }, [a]),
              a
            )
          })({ disabled: !ee, index: O, node: C, rect: E })
        return (
          Object(c.useEffect)(() => {
            z && Z.current.newIndex !== $ && (Z.current.newIndex = $),
              f !== Z.current.containerId && (Z.current.containerId = f),
              d !== Z.current.items && (Z.current.items = d)
          }, [z, $, f, d]),
          Object(c.useEffect)(() => {
            if (G === Z.current.activeId) return
            if (G && !Z.current.activeId) return void (Z.current.activeId = G)
            const e = setTimeout(() => {
              Z.current.activeId = G
            }, 50)
            return () => clearTimeout(e)
          }, [G]),
          {
            active: k,
            activeIndex: h,
            attributes: D,
            data: x,
            rect: E,
            index: O,
            newIndex: $,
            items: d,
            isOver: j,
            isSorting: z,
            isDragging: I,
            listeners: R,
            node: C,
            overIndex: b,
            over: M,
            setNodeRef: V,
            setActivatorNodeRef: L,
            setDroppableNodeRef: T,
            setDraggableNodeRef: _,
            transform: null != te ? te : X,
            transition: (function() {
              if (te || (Q && Z.current.newIndex === O)) return sn
              if ((W && !U(N)) || !u) return
              if (z || ee) return J.Transition.toString({ ...u, property: 'transform' })
              return
            })(),
          }
        )
      }
      function fn(e) {
        if (!e) return !1
        const t = e.data.current
        return !!(
          t &&
          'sortable' in t &&
          'object' == typeof t.sortable &&
          'containerId' in t.sortable &&
          'items' in t.sortable &&
          'index' in t.sortable
        )
      }
      const hn = [qe.Down, qe.Right, qe.Up, qe.Left],
        pn = (e, t) => {
          let {
            context: {
              active: n,
              collisionRect: r,
              droppableRects: o,
              droppableContainers: a,
              over: i,
              scrollableAncestors: l,
            },
          } = t
          if (hn.includes(e.code)) {
            if ((e.preventDefault(), !n || !r)) return
            const t = []
            a.getEnabled().forEach(n => {
              if (!n || (null != n && n.disabled)) return
              const a = o.get(n.id)
              if (a)
                switch (e.code) {
                  case qe.Down:
                    r.top < a.top && t.push(n)
                    break
                  case qe.Up:
                    r.top > a.top && t.push(n)
                    break
                  case qe.Left:
                    r.left > a.left && t.push(n)
                    break
                  case qe.Right:
                    r.left < a.left && t.push(n)
                }
            })
            const c = (e => {
              let { collisionRect: t, droppableRects: n, droppableContainers: r } = e
              const o = pe(t),
                a = []
              for (const e of r) {
                const { id: t } = e,
                  r = n.get(t)
                if (r) {
                  const n = pe(r),
                    i = o.reduce((e, t, r) => e + ue(n[r], t), 0),
                    l = Number((i / 4).toFixed(4))
                  a.push({ id: t, data: { droppableContainer: e, value: l } })
                }
              }
              return a.sort(fe)
            })({ active: n, collisionRect: r, droppableRects: o, droppableContainers: t, pointerCoordinates: null })
            let s = ge(c, 'id')
            if ((s === (null == i ? void 0 : i.id) && c.length > 1 && (s = c[1].id), null != s)) {
              const e = a.get(n.id),
                t = a.get(s),
                i = t ? o.get(t.id) : null,
                c = null == t ? void 0 : t.node.current
              if (c && i && e && t) {
                const n = Te(c).some((e, t) => l[t] !== e),
                  o = gn(e, t),
                  a = (function(e, t) {
                    if (!fn(e) || !fn(t)) return !1
                    if (!gn(e, t)) return !1
                    return e.data.current.sortable.index < t.data.current.sortable.index
                  })(e, t),
                  s = n || !o ? { x: 0, y: 0 } : { x: a ? r.width - i.width : 0, y: a ? r.height - i.height : 0 },
                  u = { x: i.left, y: i.top }
                return s.x && s.y ? u : q(u, s)
              }
            }
          }
        }
      function gn(e, t) {
        return !(!fn(e) || !fn(t)) && e.data.current.sortable.containerId === t.data.current.sortable.containerId
      }
      var vn = function(e, t) {
          if (Array.isArray(e)) return e
          if (Symbol.iterator in Object(e))
            return (function(e, t) {
              var n = [],
                r = !0,
                o = !1,
                a = void 0
              try {
                for (
                  var i, l = e[Symbol.iterator]();
                  !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                ;(o = !0), (a = e)
              } finally {
                try {
                  !r && l.return && l.return()
                } finally {
                  if (o) throw a
                }
              }
              return n
            })(e, t)
          throw new TypeError('Invalid attempt to destructure non-iterable instance')
        },
        bn =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }
      var yn = Object(c.forwardRef)(function(e, t) {
          var n = e.id,
            r = (function(e, t) {
              var n = {}
              for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
              return n
            })(e, ['id'])
          return s.a.createElement(
            'div',
            bn({}, r, { ref: t }),
            s.a.createElement(
              'li',
              bn({ className: ['tag-item', r.tagClassName].filter(Boolean).join(' ') }, d(r.dataset)),
              ' ',
              s.a.createElement(j, {
                label: r.tagLabel || r.label,
                tagPrefix: r.tagPrefix,
                tagSuffix: r.tagSuffix,
                id: n,
                onDelete: r.onDelete,
                readOnly: r.readOnly,
                disabled: r.disabled || r.tagDisabled,
                labelRemove: r.labelRemove,
              })
            )
          )
        }),
        mn = function(e) {
          var t = dn({ id: e.id }),
            n = t.attributes,
            r = t.listeners,
            o = t.setNodeRef,
            a = t.transform,
            i = t.transition,
            l = e.id,
            c = e.label,
            u = e.tagClassName,
            d = e.dataset,
            f = e.tagLabel,
            h = e.onDelete,
            p = e.readOnly,
            g = e.disabled,
            v = e.labelRemove,
            b = e.tagDisabled,
            y = e.tagPrefix,
            m = e.tagSuffix,
            w = { transform: J.Transform.toString(a), transition: i }
          return s.a.createElement(
            yn,
            bn({ ref: o, style: w }, n, r, {
              id: l,
              label: c,
              dataset: d,
              tagLabel: f,
              onDelete: h,
              readOnly: p,
              disabled: g,
              labelRemove: v,
              tagDisabled: b,
              tagPrefix: y,
              tagSuffix: m,
              tagClassName: u,
            })
          )
        },
        wn = function(e) {
          var t = e.tags,
            n = e.onTagRemove,
            r = e.onReorder,
            o = e.texts,
            a = void 0 === o ? {} : o,
            i = e.disabled,
            l = e.readOnly,
            u = e.children,
            d = e.tagPrefix,
            f = e.tagSuffix,
            h = e.tagClassName,
            p = Object(c.useState)(null),
            g = vn(p, 2),
            v = g[0],
            b = g[1],
            y = Object(c.useState)(t),
            m = vn(y, 2),
            w = m[0],
            O = m[1],
            x = (function() {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
              return Object(c.useMemo)(() => [...t].filter(e => null != e), [...t])
            })(ce(nt), ce(Ge, { coordinateGetter: pn })),
            S = u || s.a.createElement('span', { className: 'placeholder' }, a.placeholder || 'Choose...')
          Object(c.useEffect)(
            function() {
              console.log('props', e), console.log('items', t), O(t)
            },
            [t]
          )
          return s.a.createElement(
            'ul',
            { className: 'tag-list', style: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } },
            s.a.createElement(
              At,
              {
                sensors: x,
                collisionDetection: be,
                onDragStart: function(e) {
                  var t = e.active
                  console.log('active', t), b(t.id)
                },
                onDragEnd: function(e) {
                  return (function(e, t) {
                    var n = e.active,
                      o = e.over
                    if ((console.log('active', n), console.log('over', o), n.id !== o.id)) {
                      var a = t.findIndex(function(e) {
                          return e._id === n.id
                        }),
                        i = t.findIndex(function(e) {
                          return e._id === o.id
                        })
                      console.log('oldItems', t)
                      var l = Zt(t, a, i)
                      console.log('newItems', l), O(l), r(l)
                    }
                  })(e, w)
                },
              },
              s.a.createElement(
                on,
                { items: w, strategy: nn },
                w.map(function(e, t) {
                  return s.a.createElement(
                    mn,
                    bn(
                      {
                        id: e._id,
                        key: t,
                        onDelete: n,
                        readOnly: l,
                        disabled: i,
                        labelRemove: a.labelRemove,
                        tagDisabled: e.disabled,
                      },
                      e,
                      { tagPrefix: d, tagSuffix: f, tagClassName: h }
                    )
                  )
                }),
                s.a.createElement(
                  'li',
                  { className: 'tag-item' },
                  S,
                  s.a.createElement(
                    'span',
                    { className: 'dropdown-icon', style: { fontSize: '20px', color: '#bfbfbf' } },
                    '⌄'
                  )
                )
              ),
              s.a.createElement(
                Gt,
                null,
                (function(e) {
                  if (!e) return null
                  var t = w.find(function(t) {
                    return t._id === e
                  })
                  return t
                    ? s.a.createElement(yn, {
                        id: e,
                        label: t.label,
                        onDelete: n,
                        readOnly: l,
                        disabled: i,
                        labelRemove: a.labelRemove,
                        tagDisabled: t.disabled,
                        tagPrefix: d,
                        tagSuffix: f,
                        tagClassName: h,
                      })
                    : null
                })(v)
              )
            )
          )
        },
        On =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        xn = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function Sn(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function En(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var Cn = (function(e) {
        function t() {
          var e, n, r
          Sn(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = En(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.getAriaAttributes = function() {
              var e = r.props,
                t = e.mode,
                n = e.texts,
                o = void 0 === n ? {} : n,
                a = e.showDropdown,
                i = e.clientId,
                l = e.tags,
                c = i + '_trigger',
                s = [],
                u = g(o.label)
              return (
                l &&
                  l.length &&
                  (u['aria-label'] && s.push(c),
                  l.forEach(function(e) {
                    s.push(E(e._id))
                  }),
                  (u = g(o.label, s.join(' ')))),
                On(
                  {
                    id: c,
                    role: 'button',
                    tabIndex: r.props.tabIndex,
                    'aria-haspopup': 'simpleSelect' === t ? 'listbox' : 'tree',
                    'aria-expanded': a ? 'true' : 'false',
                  },
                  u
                )
              )
            }),
            (r.handleTrigger = function(e) {
              ;(e.key && 13 !== e.keyCode && 32 !== e.keyCode && 40 !== e.keyCode) ||
                (e.key && r.triggerNode && r.triggerNode !== document.activeElement) ||
                (r.props.showDropdown || 32 !== e.keyCode || e.preventDefault(), r.props.onTrigger(e))
            }),
            En(r, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, e),
          xn(t, [
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.disabled,
                  r = t.readOnly,
                  o = t.showDropdown,
                  a = ['dropdown-trigger', 'arrow', n && 'disabled', r && 'readOnly', o && 'top', !o && 'bottom']
                    .filter(Boolean)
                    .join(' ')
                return s.a.createElement(
                  'a',
                  On(
                    {
                      ref: function(t) {
                        e.triggerNode = t
                      },
                      className: a,
                      onClick: n ? void 0 : this.handleTrigger,
                      onKeyDown: n ? void 0 : this.handleTrigger,
                    },
                    this.getAriaAttributes()
                  ),
                  this.props.children
                )
              },
            },
          ]),
          t
        )
      })(c.PureComponent)
      Cn.propTypes = {
        onTrigger: l.a.func,
        disabled: l.a.bool,
        readOnly: l.a.bool,
        showDropdown: l.a.bool,
        mode: l.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        texts: l.a.object,
        clientId: l.a.string,
        tags: l.a.array,
        tabIndex: l.a.number,
      }
      var jn = Cn,
        Tn = function(e, t) {
          return (Tn =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function(e, t) {
                e.__proto__ = t
              }) ||
            function(e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(e, t)
        }
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var kn = function() {
        return (kn =
          Object.assign ||
          function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }).apply(this, arguments)
      }
      var Nn = 'Pixel',
        Pn = 'Percent',
        Dn = { unit: Pn, value: 0.8 }
      function _n(e) {
        return 'number' == typeof e
          ? { unit: Pn, value: 100 * e }
          : 'string' == typeof e
          ? e.match(/^(\d*(\.\d+)?)px$/)
            ? { unit: Nn, value: parseFloat(e) }
            : e.match(/^(\d*(\.\d+)?)%$/)
            ? { unit: Pn, value: parseFloat(e) }
            : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), Dn)
          : (console.warn('scrollThreshold should be string or number'), Dn)
      }
      var Rn = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this
            return (
              (n.lastScrollTop = 0),
              (n.actionTriggered = !1),
              (n.startY = 0),
              (n.currentY = 0),
              (n.dragging = !1),
              (n.maxPullDownDistance = 0),
              (n.getScrollableTarget = function() {
                return n.props.scrollableTarget instanceof HTMLElement
                  ? n.props.scrollableTarget
                  : 'string' == typeof n.props.scrollableTarget
                  ? document.getElementById(n.props.scrollableTarget)
                  : (null === n.props.scrollableTarget &&
                      console.warn(
                        'You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      '
                      ),
                    null)
              }),
              (n.onStart = function(e) {
                n.lastScrollTop ||
                  ((n.dragging = !0),
                  e instanceof MouseEvent
                    ? (n.startY = e.pageY)
                    : e instanceof TouchEvent && (n.startY = e.touches[0].pageY),
                  (n.currentY = n.startY),
                  n._infScroll &&
                    ((n._infScroll.style.willChange = 'transform'),
                    (n._infScroll.style.transition = 'transform 0.2s cubic-bezier(0,0,0.31,1)')))
              }),
              (n.onMove = function(e) {
                n.dragging &&
                  (e instanceof MouseEvent
                    ? (n.currentY = e.pageY)
                    : e instanceof TouchEvent && (n.currentY = e.touches[0].pageY),
                  n.currentY < n.startY ||
                    (n.currentY - n.startY >= Number(n.props.pullDownToRefreshThreshold) &&
                      n.setState({ pullToRefreshThresholdBreached: !0 }),
                    n.currentY - n.startY > 1.5 * n.maxPullDownDistance ||
                      (n._infScroll &&
                        ((n._infScroll.style.overflow = 'visible'),
                        (n._infScroll.style.transform = 'translate3d(0px, ' + (n.currentY - n.startY) + 'px, 0px)')))))
              }),
              (n.onEnd = function() {
                ;(n.startY = 0),
                  (n.currentY = 0),
                  (n.dragging = !1),
                  n.state.pullToRefreshThresholdBreached &&
                    (n.props.refreshFunction && n.props.refreshFunction(),
                    n.setState({ pullToRefreshThresholdBreached: !1 })),
                  requestAnimationFrame(function() {
                    n._infScroll &&
                      ((n._infScroll.style.overflow = 'auto'),
                      (n._infScroll.style.transform = 'none'),
                      (n._infScroll.style.willChange = 'unset'))
                  })
              }),
              (n.onScrollListener = function(e) {
                'function' == typeof n.props.onScroll &&
                  setTimeout(function() {
                    return n.props.onScroll && n.props.onScroll(e)
                  }, 0)
                var t =
                  n.props.height || n._scrollableNode
                    ? e.target
                    : document.documentElement.scrollTop
                    ? document.documentElement
                    : document.body
                n.actionTriggered ||
                  ((n.props.inverse
                    ? n.isElementAtTop(t, n.props.scrollThreshold)
                    : n.isElementAtBottom(t, n.props.scrollThreshold)) &&
                    n.props.hasMore &&
                    ((n.actionTriggered = !0), n.setState({ showLoader: !0 }), n.props.next && n.props.next()),
                  (n.lastScrollTop = t.scrollTop))
              }),
              (n.state = { showLoader: !1, pullToRefreshThresholdBreached: !1, prevDataLength: t.dataLength }),
              (n.throttledOnScrollListener = (function(e, t, n, r) {
                var o,
                  a = !1,
                  i = 0
                function l() {
                  o && clearTimeout(o)
                }
                function c() {
                  var c = this,
                    s = Date.now() - i,
                    u = arguments
                  function d() {
                    ;(i = Date.now()), n.apply(c, u)
                  }
                  function f() {
                    o = void 0
                  }
                  a ||
                    (r && !o && d(),
                    l(),
                    void 0 === r && s > e ? d() : !0 !== t && (o = setTimeout(r ? f : d, void 0 === r ? e - s : e)))
                }
                return (
                  'boolean' != typeof t && ((r = n), (n = t), (t = void 0)),
                  (c.cancel = function() {
                    l(), (a = !0)
                  }),
                  c
                )
              })(150, n.onScrollListener).bind(n)),
              (n.onStart = n.onStart.bind(n)),
              (n.onMove = n.onMove.bind(n)),
              (n.onEnd = n.onEnd.bind(n)),
              n
            )
          }
          return (
            (function(e, t) {
              function n() {
                this.constructor = e
              }
              Tn(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
            })(t, e),
            (t.prototype.componentDidMount = function() {
              if (void 0 === this.props.dataLength)
                throw new Error(
                  'mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage'
                )
              if (
                ((this._scrollableNode = this.getScrollableTarget()),
                (this.el = this.props.height ? this._infScroll : this._scrollableNode || window),
                this.el && this.el.addEventListener('scroll', this.throttledOnScrollListener),
                'number' == typeof this.props.initialScrollY &&
                  this.el &&
                  this.el instanceof HTMLElement &&
                  this.el.scrollHeight > this.props.initialScrollY &&
                  this.el.scrollTo(0, this.props.initialScrollY),
                this.props.pullDownToRefresh &&
                  this.el &&
                  (this.el.addEventListener('touchstart', this.onStart),
                  this.el.addEventListener('touchmove', this.onMove),
                  this.el.addEventListener('touchend', this.onEnd),
                  this.el.addEventListener('mousedown', this.onStart),
                  this.el.addEventListener('mousemove', this.onMove),
                  this.el.addEventListener('mouseup', this.onEnd),
                  (this.maxPullDownDistance =
                    (this._pullDown &&
                      this._pullDown.firstChild &&
                      this._pullDown.firstChild.getBoundingClientRect().height) ||
                    0),
                  this.forceUpdate(),
                  'function' != typeof this.props.refreshFunction))
              )
                throw new Error(
                  'Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\''
                )
            }),
            (t.prototype.componentWillUnmount = function() {
              this.el &&
                (this.el.removeEventListener('scroll', this.throttledOnScrollListener),
                this.props.pullDownToRefresh &&
                  (this.el.removeEventListener('touchstart', this.onStart),
                  this.el.removeEventListener('touchmove', this.onMove),
                  this.el.removeEventListener('touchend', this.onEnd),
                  this.el.removeEventListener('mousedown', this.onStart),
                  this.el.removeEventListener('mousemove', this.onMove),
                  this.el.removeEventListener('mouseup', this.onEnd)))
            }),
            (t.prototype.componentDidUpdate = function(e) {
              this.props.dataLength !== e.dataLength && ((this.actionTriggered = !1), this.setState({ showLoader: !1 }))
            }),
            (t.getDerivedStateFromProps = function(e, t) {
              return e.dataLength !== t.prevDataLength ? kn(kn({}, t), { prevDataLength: e.dataLength }) : null
            }),
            (t.prototype.isElementAtTop = function(e, t) {
              void 0 === t && (t = 0.8)
              var n =
                  e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                r = _n(t)
              return r.unit === Nn
                ? e.scrollTop <= r.value + n - e.scrollHeight + 1
                : e.scrollTop <= r.value / 100 + n - e.scrollHeight + 1
            }),
            (t.prototype.isElementAtBottom = function(e, t) {
              void 0 === t && (t = 0.8)
              var n =
                  e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                r = _n(t)
              return r.unit === Nn
                ? e.scrollTop + n >= e.scrollHeight - r.value
                : e.scrollTop + n >= (r.value / 100) * e.scrollHeight
            }),
            (t.prototype.render = function() {
              var e = this,
                t = kn(
                  { height: this.props.height || 'auto', overflow: 'auto', WebkitOverflowScrolling: 'touch' },
                  this.props.style
                ),
                n =
                  this.props.hasChildren ||
                  !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                r = this.props.pullDownToRefresh && this.props.height ? { overflow: 'auto' } : {}
              return s.a.createElement(
                'div',
                { style: r, className: 'infinite-scroll-component__outerdiv' },
                s.a.createElement(
                  'div',
                  {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function(t) {
                      return (e._infScroll = t)
                    },
                    style: t,
                  },
                  this.props.pullDownToRefresh &&
                    s.a.createElement(
                      'div',
                      {
                        style: { position: 'relative' },
                        ref: function(t) {
                          return (e._pullDown = t)
                        },
                      },
                      s.a.createElement(
                        'div',
                        { style: { position: 'absolute', left: 0, right: 0, top: -1 * this.maxPullDownDistance } },
                        this.state.pullToRefreshThresholdBreached
                          ? this.props.releaseToRefreshContent
                          : this.props.pullDownToRefreshContent
                      )
                    ),
                  this.props.children,
                  !this.state.showLoader && !n && this.props.hasMore && this.props.loader,
                  this.state.showLoader && this.props.hasMore && this.props.loader,
                  !this.props.hasMore && this.props.endMessage
                )
              )
            }),
            t
          )
        })(c.Component),
        In = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function Mn(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function An(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var Ln = (function(e) {
        function t() {
          var e, n, r
          Mn(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = An(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.handleClick = function() {
              var e = r.props,
                t = e.onAction,
                n = e.actionData
              t && t(n.nodeId, n.action)
            }),
            An(r, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, e),
          In(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.title,
                  n = e.className,
                  r = e.text,
                  o = e.readOnly
                return s.a.createElement('i', { title: t, className: n, onClick: o ? void 0 : this.handleClick }, r)
              },
            },
          ]),
          t
        )
      })(c.PureComponent)
      ;(Ln.propTypes = {
        title: l.a.string,
        text: l.a.string,
        className: l.a.string,
        actionData: l.a.object,
        onAction: l.a.func,
        readOnly: l.a.bool,
      }),
        (Ln.defaultProps = { onAction: function() {} })
      var Fn = Ln,
        Bn =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        Yn = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function Vn(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function zn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var Kn = (function(e) {
        function t() {
          return Vn(this, t), zn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, e),
          Yn(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.actions,
                  n = e.id,
                  r = (function(e, t) {
                    var n = {}
                    for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
                    return n
                  })(e, ['actions', 'id'])
                return f(t)
                  ? null
                  : t.map(function(e, t) {
                      var o = e.id || 'action-' + t
                      return s.a.createElement(
                        Fn,
                        Bn({ key: o }, r, e, { actionData: { action: Bn({}, e, { id: o }), nodeId: n } })
                      )
                    })
              },
            },
          ]),
          t
        )
      })(c.PureComponent)
      Kn.propTypes = { id: l.a.string.isRequired, actions: l.a.array }
      var Hn = Kn,
        Wn =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        qn = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function Un(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function Xn(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var Jn = function(e) {
          var t = e.checked,
            n = e.indeterminate
          return function(e) {
            e && ((e.checked = t), (e.indeterminate = n))
          }
        },
        $n = (function(e) {
          function t() {
            return Un(this, t), Xn(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, e),
            qn(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.checked,
                    n = e.indeterminate,
                    r = void 0 !== n && n,
                    o = e.onChange,
                    a = e.disabled,
                    i = e.readOnly,
                    l = (function(e, t) {
                      var n = {}
                      for (var r in e)
                        t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
                      return n
                    })(e, ['checked', 'indeterminate', 'onChange', 'disabled', 'readOnly']),
                    c = a || i
                  return s.a.createElement(
                    'input',
                    Wn({ type: 'checkbox', ref: Jn({ checked: t, indeterminate: r }), onChange: o, disabled: c }, l)
                  )
                },
              },
            ]),
            t
          )
        })(c.PureComponent)
      $n.propTypes = {
        checked: l.a.bool,
        indeterminate: l.a.bool,
        onChange: l.a.func,
        disabled: l.a.bool,
        readOnly: l.a.bool,
      }
      var Gn = $n,
        Zn =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        Qn = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function er(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function tr(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var nr = function(e) {
          var t = e.checked
          return function(e) {
            e && (e.checked = t)
          }
        },
        rr = (function(e) {
          function t() {
            return er(this, t), tr(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, e),
            Qn(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.name,
                    n = e.checked,
                    r = e.onChange,
                    o = e.disabled,
                    a = e.readOnly,
                    i = (function(e, t) {
                      var n = {}
                      for (var r in e)
                        t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
                      return n
                    })(e, ['name', 'checked', 'onChange', 'disabled', 'readOnly']),
                    l = o || a
                  return s.a.createElement(
                    'input',
                    Zn({ type: 'radio', name: t, ref: nr({ checked: n }), onChange: r, disabled: l }, i)
                  )
                },
              },
            ]),
            t
          )
        })(c.PureComponent)
      rr.propTypes = {
        name: l.a.string.isRequired,
        checked: l.a.bool,
        onChange: l.a.func,
        disabled: l.a.bool,
        readOnly: l.a.bool,
      }
      var or = rr,
        ar = n(3),
        ir = n.n(ar),
        lr =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        cr = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function sr(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function ur(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var dr = (function(e) {
        function t() {
          var e, n, r
          sr(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = ur(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.handleCheckboxChange = function(e) {
              var t = r.props,
                n = t.mode,
                o = t.id,
                a = t.onCheckboxChange
              'simpleSelect' === n || 'radioSelect' === n ? a(o, !0) : a(o, e.target.checked)
              e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            }),
            ur(r, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, e),
          cr(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.mode,
                  n = (e.title, e.label),
                  r = e.id,
                  o = e.partial,
                  a = e.checked,
                  i = e.isLeaf,
                  l = e.description,
                  c = e.searchTerm,
                  u = e.labelPrefix,
                  d = e.labelSuffix,
                  f = this.props,
                  h = f.value,
                  p = f.disabled,
                  g = f.showPartiallySelected,
                  v = f.readOnly,
                  b = f.clientId
                'simpleSelect' === t && !v && !p && this.handleCheckboxChange
                var y = { id: r, value: h, checked: a, disabled: p, readOnly: v, tabIndex: -1 },
                  m = ['checkbox-item', 'simpleSelect' === t && 'simple-select'].filter(Boolean).join(' ')
                return s.a.createElement(
                  'label',
                  { title: l, htmlFor: r, className: 'tree-node-label' },
                  'radioSelect' === t
                    ? s.a.createElement(
                        or,
                        lr({ name: b, className: 'radio-item', onChange: this.handleCheckboxChange }, y)
                      )
                    : i &&
                        s.a.createElement(
                          Gn,
                          lr({ name: r, className: m, indeterminate: g && o, onChange: this.handleCheckboxChange }, y)
                        ),
                  u ? u(this.props) : null,
                  s.a.createElement(ir.a, { searchWords: [c], textToHighlight: n }),
                  d ? d(this.props) : null
                )
              },
            },
          ]),
          t
        )
      })(c.PureComponent)
      dr.propTypes = {
        id: l.a.string.isRequired,
        actions: l.a.array,
        title: l.a.string,
        label: l.a.string.isRequired,
        labelPrefix: l.a.func,
        labelSuffix: l.a.func,
        value: l.a.string.isRequired,
        checked: l.a.bool,
        partial: l.a.bool,
        disabled: l.a.bool,
        dataset: l.a.object,
        mode: l.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: l.a.bool,
        onCheckboxChange: l.a.func,
        readOnly: l.a.bool,
        clientId: l.a.string,
        description: l.a.string,
      }
      var fr = dr,
        hr = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function pr(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function gr(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var vr = (function(e) {
        function t() {
          var e, n, r
          pr(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = gr(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.onToggle = function(e) {
              e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), r.props.onNodeToggle(r.props.id)
            }),
            (r.onKeyDown = function(e) {
              ;('Enter' !== e.key && 32 !== e.keyCode) || (r.props.onNodeToggle(r.props.id), e.preventDefault())
            }),
            gr(r, n)
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, e),
          hr(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.expanded,
                  n = e.isLeaf,
                  r = ['toggle', t && 'expanded', !t && 'collapsed'].filter(Boolean).join(' ')
                return n
                  ? s.a.createElement('i', {
                      role: 'button',
                      tabIndex: -1,
                      className: r,
                      style: { visibility: 'hidden' },
                      'aria-hidden': !0,
                    })
                  : s.a.createElement('i', {
                      role: 'button',
                      tabIndex: -1,
                      className: r,
                      onClick: this.onToggle,
                      onKeyDown: this.onKeyDown,
                      'aria-hidden': !0,
                    })
              },
            },
          ]),
          t
        )
      })(c.PureComponent)
      vr.propTypes = { expanded: l.a.bool, isLeaf: l.a.bool, onNodeToggle: l.a.func, id: l.a.string }
      var br = vr,
        yr = (n(9),
        Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }),
        mr = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      function wr(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function Or(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var xr = function(e) {
          return f(e)
        },
        Sr = (function(e) {
          function t() {
            var e, n, r
            wr(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = Or(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.getAriaAttributes = function() {
                var e = r.props,
                  t = e._children,
                  n = e._depth,
                  o = e.checked,
                  a = e.disabled,
                  i = e.expanded,
                  l = e.readOnly,
                  c = e.mode,
                  s = e.partial,
                  u = {}
                return (
                  (u.role = 'simpleSelect' === c ? 'option' : 'treeitem'),
                  (u['aria-disabled'] = a || l),
                  (u['aria-selected'] = o),
                  'simpleSelect' !== c &&
                    ((u['aria-checked'] = s ? 'mixed' : o),
                    (u['aria-level'] = (n || 0) + 1),
                    (u['aria-expanded'] = t && (i ? 'true' : 'false'))),
                  u
                )
              }),
              Or(r, n)
            )
          }
          return (
            (function(e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
            })(t, e),
            mr(t, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.mode,
                    n = e.keepTreeOnSearch,
                    r = e._id,
                    o = e._children,
                    a = e.dataset,
                    i = e._depth,
                    l = e.expanded,
                    c = e.title,
                    u = e.label,
                    f = e.labelPrefix,
                    h = e.labelSuffix,
                    p = e.partial,
                    g = e.checked,
                    v = e.value,
                    b = e.disabled,
                    y = e.actions,
                    m = e.onAction,
                    w = e.searchModeOn,
                    O = e.onNodeToggle,
                    x = e.onCheckboxChange,
                    S = e.showPartiallySelected,
                    E = e.readOnly,
                    C = e.clientId,
                    j = e.description,
                    T = e.searchTerm,
                    k = (function(e) {
                      var t = e.keepTreeOnSearch,
                        n = e.keepChildrenOnSearch,
                        r = e._children,
                        o = e.matchInChildren,
                        a = e.matchInParent,
                        i = e.disabled,
                        l = e.partial,
                        c = e.hide,
                        s = e.className,
                        u = e.showPartiallySelected,
                        d = e.readOnly,
                        f = e.checked,
                        h = e._focused
                      return [
                        'node',
                        xr(r) && 'leaf',
                        !xr(r) && 'tree',
                        i && 'disabled',
                        c && 'hide',
                        t && o && 'match-in-children',
                        t && n && a && 'match-in-parent',
                        u && l && 'partial',
                        d && 'readOnly',
                        f && 'checked',
                        h && 'focused',
                        s,
                      ]
                        .filter(Boolean)
                        .join(' ')
                    })(this.props),
                    N = n || !w ? { paddingLeft: 5 * (i || 0) + 'px' } : {},
                    P = r + '_li'
                  return s.a.createElement(
                    'li',
                    yr({ className: k, style: N, id: P }, d(a), this.getAriaAttributes(), {
                      onClick: function() {
                        return O(r)
                      },
                    }),
                    s.a.createElement(br, { isLeaf: xr(o), expanded: l, id: r, onNodeToggle: O }),
                    s.a.createElement(fr, {
                      description: j,
                      title: c,
                      label: u,
                      labelPrefix: f,
                      labelSuffix: h,
                      id: r,
                      isLeaf: xr(o),
                      partial: p,
                      checked: g,
                      value: v,
                      disabled: b,
                      mode: t,
                      onCheckboxChange: x,
                      showPartiallySelected: S,
                      readOnly: E,
                      clientId: C,
                      searchTerm: T,
                    }),
                    s.a.createElement(Hn, { actions: y, onAction: m, id: r, readOnly: E })
                  )
                },
              },
            ]),
            t
          )
        })(c.PureComponent)
      Sr.propTypes = {
        _id: l.a.string.isRequired,
        _depth: l.a.number,
        _children: l.a.array,
        actions: l.a.array,
        className: l.a.string,
        title: l.a.string,
        label: l.a.string.isRequired,
        labelPrefix: l.a.func,
        labelSuffix: l.a.func,
        value: l.a.string.isRequired,
        checked: l.a.bool,
        expanded: l.a.bool,
        disabled: l.a.bool,
        partial: l.a.bool,
        dataset: l.a.object,
        keepTreeOnSearch: l.a.bool,
        keepChildrenOnSearch: l.a.bool,
        searchModeOn: l.a.bool,
        onNodeToggle: l.a.func,
        onAction: l.a.func,
        onCheckboxChange: l.a.func,
        mode: l.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: l.a.bool,
        readOnly: l.a.bool,
        clientId: l.a.string,
      }
      var Er = Sr,
        Cr =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        jr = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var Tr = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            kr.call(n),
            (n.currentPage = 1),
            n.computeInstanceProps(e, !0),
            (n.state = { items: n.allVisibleNodes.slice(0, n.props.pageSize) }),
            n
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, e),
          jr(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props.searchModeOn
                return s.a.createElement(
                  'ul',
                  Cr(
                    { className: 'root ' + (e ? 'searchModeOn' : ''), ref: this.setNodeRef },
                    this.getAriaAttributes()
                  ),
                  this.state.scrollableTarget &&
                    s.a.createElement(
                      Rn,
                      {
                        dataLength: this.state.items.length,
                        next: this.loadMore,
                        hasMore: this.hasMore(),
                        loader: s.a.createElement('span', { className: 'searchLoader' }, 'Loading...'),
                        scrollableTarget: this.state.scrollableTarget,
                      },
                      this.state.items
                    )
                )
              },
            },
          ]),
          t
        )
      })(c.Component)
      ;(Tr.propTypes = {
        data: l.a.object,
        keepTreeOnSearch: l.a.bool,
        keepChildrenOnSearch: l.a.bool,
        searchModeOn: l.a.bool,
        onChange: l.a.func,
        onNodeToggle: l.a.func,
        onAction: l.a.func,
        onCheckboxChange: l.a.func,
        mode: l.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: l.a.bool,
        pageSize: l.a.number,
        readOnly: l.a.bool,
        clientId: l.a.string,
        activeDescendant: l.a.string,
        labelPrefix: l.a.func,
        labelSuffix: l.a.func,
      }),
        (Tr.defaultProps = { pageSize: 100 })
      var kr = function() {
          var e = this
          ;(this.componentWillReceiveProps = function(t) {
            var n = t.activeDescendant === e.props.activeDescendant
            e.computeInstanceProps(t, !n),
              e.setState({ items: e.allVisibleNodes.slice(0, e.currentPage * e.props.pageSize) })
          }),
            (this.componentDidMount = function() {
              e.setState({ scrollableTarget: e.node.parentNode })
            }),
            (this.computeInstanceProps = function(t, n) {
              if (
                ((e.allVisibleNodes = e.getNodes(t)),
                (e.totalPages = Math.ceil(e.allVisibleNodes.length / e.props.pageSize)),
                n && t.activeDescendant)
              ) {
                var r = t.activeDescendant.replace(/_li$/, ''),
                  o =
                    p(e.allVisibleNodes, function(e) {
                      return e.key === r
                    }) + 1
                e.currentPage = o > 0 ? Math.ceil(o / e.props.pageSize) : 1
              }
            }),
            (this.getNodes = function(e) {
              var t = e.data,
                n = e.keepTreeOnSearch,
                r = e.keepChildrenOnSearch,
                o = e.searchModeOn,
                a = e.mode,
                i = e.showPartiallySelected,
                l = e.readOnly,
                c = e.onAction,
                u = e.onChange,
                d = e.onCheckboxChange,
                f = e.onNodeToggle,
                h = e.activeDescendant,
                p = e.clientId,
                g = e.searchTerm,
                v = e.labelPrefix,
                b = e.labelSuffix,
                y = []
              return (
                t.forEach(function(e) {
                  ;(function(e, t, n) {
                    if (t || e.expanded) return !0
                    var r = e._parent && n.get(e._parent)
                    return !r || r.expanded
                  })(e, o, t) &&
                    y.push(
                      s.a.createElement(
                        Er,
                        Cr({ keepTreeOnSearch: n, keepChildrenOnSearch: r, key: e._id }, e, {
                          searchModeOn: o,
                          onChange: u,
                          onCheckboxChange: d,
                          onNodeToggle: f,
                          onAction: c,
                          mode: a,
                          showPartiallySelected: i,
                          readOnly: l,
                          clientId: p,
                          activeDescendant: h,
                          searchTerm: g,
                          labelPrefix: v,
                          labelSuffix: b,
                        })
                      )
                    )
                }),
                y
              )
            }),
            (this.hasMore = function() {
              return e.currentPage < e.totalPages
            }),
            (this.loadMore = function() {
              e.currentPage = e.currentPage + 1
              var t = e.allVisibleNodes.slice(0, e.currentPage * e.props.pageSize)
              e.setState({ items: t })
            }),
            (this.setNodeRef = function(t) {
              e.node = t
            }),
            (this.getAriaAttributes = function() {
              var t = e.props.mode
              return {
                role: 'simpleSelect' === t ? 'listbox' : 'tree',
                'aria-multiselectable': /multiSelect|hierarchical/.test(t),
              }
            })
        },
        Nr = Tr,
        Pr = n(4),
        Dr = n.n(Pr),
        _r = function(e) {
          return e
        },
        Rr = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'children',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _r
          return (
            Dr()(e[t], function(e) {
              return n(e).checked
            }) ||
            e[t].some(function(e) {
              return n(e).partial
            })
          )
        }
      var Ir = function(e) {
          var t = e.tree,
            n = e.simple,
            r = e.radio,
            o = e.showPartialState,
            a = e.hierarchical,
            i = e.rootPrefixId
          return (function e(t) {
            var n = t.nodes,
              r = t.parent,
              o = t.depth,
              a = void 0 === o ? 0 : o,
              i = t.simple,
              l = t.radio,
              c = t.showPartialState,
              s = t.hierarchical,
              u = t.rootPrefixId,
              d = t._rv,
              h = void 0 === d ? { list: new Map(), defaultValues: [], singleSelectedNode: null } : d,
              p = i || l
            return (
              n.forEach(function(t, n) {
                ;(t._depth = a),
                  r
                    ? ((t._id = t.id || r._id + '-' + n), (t._parent = r._id), r._children.push(t._id))
                    : (t._id = t.id || '' + (u ? u + '-' + n : n)),
                  p && t.checked && (h.singleSelectedNode ? (t.checked = !1) : (h.singleSelectedNode = t)),
                  p &&
                    t.isDefaultValue &&
                    h.singleSelectedNode &&
                    !h.singleSelectedNode.isDefaultValue &&
                    ((h.singleSelectedNode.checked = !1), (h.singleSelectedNode = null)),
                  !t.isDefaultValue ||
                    (p && 0 !== h.defaultValues.length) ||
                    (h.defaultValues.push(t._id), (t.checked = !0), p && (h.singleSelectedNode = t)),
                  (s && !l) ||
                    (function(e) {
                      for (
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                          n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                          r = n ? ['checked', 'disabled'] : ['disabled'],
                          o = 0;
                        o < r.length;
                        o++
                      ) {
                        var a = r[o]
                        void 0 === e[a] && void 0 !== t[a] && (e[a] = t[a])
                      }
                    })(t, r, !l),
                  h.list.set(t._id, t),
                  !i &&
                    t.children &&
                    ((t._children = []),
                    e({
                      nodes: t.children,
                      parent: t,
                      depth: a + 1,
                      radio: l,
                      showPartialState: c,
                      hierarchical: s,
                      _rv: h,
                    }),
                    c &&
                      !t.checked &&
                      ((t.partial = Rr(t)),
                      p ||
                        f(t.children) ||
                        !t.children.every(function(e) {
                          return e.checked
                        }) ||
                        (t.checked = !0)),
                    (t.children = void 0))
              }),
              h
            )
          })({
            nodes: Array.isArray(t) ? t : [t],
            simple: n,
            radio: r,
            showPartialState: o,
            hierarchical: a,
            rootPrefixId: i,
          })
        },
        Mr = function e(t, n, r) {
          ;(n[t._id] = !0),
            f(t._children) ||
              t._children.forEach(function(t) {
                return e(r(t), n, r)
              })
        },
        Ar = function(e, t) {
          var n = [],
            r = {}
          return (
            e.forEach(function(e, o) {
              r[o] || (t(e, o, r) && n.push(e), (r[o] = !0))
            }),
            n
          )
        },
        Lr = {
          getNodesMatching: Ar,
          getVisibleNodes: function(e, t, n) {
            return Ar(e, function(e, r, o) {
              return n && e._children && e._children.length && !0 !== e.expanded && Mr(e, o, t), !e.hide
            })
          },
          markSubTreeVisited: Mr,
        },
        Fr = function(e, t) {
          if (Array.isArray(e)) return e
          if (Symbol.iterator in Object(e))
            return (function(e, t) {
              var n = [],
                r = !0,
                o = !1,
                a = void 0
              try {
                for (
                  var i, l = e[Symbol.iterator]();
                  !(r = (i = l.next()).done) && (n.push(i.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                ;(o = !0), (a = e)
              } finally {
                try {
                  !r && l.return && l.return()
                } finally {
                  if (o) throw a
                }
              }
              return n
            })(e, t)
          throw new TypeError('Invalid attempt to destructure non-iterable instance')
        },
        Br = 'ArrowUp',
        Yr = 'ArrowDown',
        Vr = 'ArrowLeft',
        zr = 'ArrowRight',
        Kr = 'Enter',
        Hr = 'Home',
        Wr = 'PageUp',
        qr = 'End',
        Ur = 'PageDown',
        Xr = {
          None: 'None',
          FocusPrevious: 'FocusPrevious',
          FocusNext: 'FocusNext',
          FocusParent: 'FocusParent',
          FocusFirst: 'FocusFirst',
          FocusLast: 'FocusLast',
          ToggleExpanded: 'ToggleExpanded',
          ToggleChecked: 'ToggleChecked',
        },
        Jr = new Set([Xr.FocusPrevious, Xr.FocusNext, Xr.FocusParent, Xr.FocusFirst, Xr.FocusLast]),
        $r = [Br, Yr, Hr, Wr, qr, Ur],
        Gr = $r.concat([Vr, zr, Kr]),
        Zr = function(e, t, n, r) {
          return t.indexOf(e) > -1 || (!n && e === r)
        },
        Qr = function(e, t, n) {
          if (!e || 0 === e.length) return t
          var r = t
          ;(function(e) {
            return Zr(e, [Xr.FocusFirst, Xr.FocusLast], !0)
          })(n)
            ? (r = Fr(e, 1)[0])
            : [Xr.FocusPrevious, Xr.FocusNext].indexOf(n) > -1 &&
              (r = (function(e, t) {
                var n = e.indexOf(t) + 1
                return n % e.length == 0 ? e[0] : e[n]
              })(e, t))
          return r
        },
        eo = {
          isValidKey: function(e, t) {
            return (t ? Gr : $r).indexOf(e) > -1
          },
          getAction: function(e, t) {
            return t === Vr
              ? (function(e, t) {
                  return e && t === Vr
                    ? !0 === e.expanded
                      ? Xr.ToggleExpanded
                      : e._parent
                      ? Xr.FocusParent
                      : Xr.None
                    : Xr.None
                })(e, t)
              : t === zr
              ? (function(e, t) {
                  return e && e._children && t === zr ? (!0 !== e.expanded ? Xr.ToggleExpanded : Xr.FocusNext) : Xr.None
                })(e, t)
              : (function(e, t) {
                  return Zr(e, [Hr, Wr], t, Yr)
                })(t, e)
              ? Xr.FocusFirst
              : (function(e, t) {
                  return Zr(e, [qr, Ur], t, Br)
                })(t, e)
              ? Xr.FocusLast
              : (function(e, t) {
                  if (!e) return Xr.None
                  switch (t) {
                    case Br:
                      return Xr.FocusPrevious
                    case Yr:
                      return Xr.FocusNext
                    case Kr:
                      return Xr.ToggleChecked
                    default:
                      return Xr.None
                  }
                })(e, t)
          },
          getNextFocus: function(e, t, n, r, o) {
            if (n === Xr.FocusParent)
              return (function(e, t) {
                return e && e._parent ? t(e._parent) : e
              })(t, r)
            if (!Jr.has(n)) return t
            var a = Lr.getVisibleNodes(e, r, o)
            return (
              (function(e) {
                return Zr(e, [Xr.FocusPrevious, Xr.FocusLast], !0)
              })(n) && (a = a.reverse()),
              Qr(a, t, n)
            )
          },
          getNextFocusAfterTagDelete: function(e, t, n, r) {
            var o = t
              ? p(t, function(t) {
                  return t._id === e
                })
              : -1
            if (o < 0 || !n.length) return r
            var a = n[(o = n.length > o ? o : n.length - 1)]._id,
              i = document.getElementById(E(a))
            return (i && i.firstElementChild) || r
          },
          handleFocusNavigationkey: function(e, t, n, r, o) {
            var a = eo.getNextFocus(e, n, t, r, o)
            return eo.adjustFocusedProps(n, a), a ? a._id : n && n._id
          },
          handleToggleNavigationkey: function(e, t, n, r, o) {
            return (
              e !== Xr.ToggleChecked || n || t.readOnly || t.disabled
                ? e === Xr.ToggleExpanded && o(t._id)
                : r(t._id, !0 !== t.checked),
              t && t._id
            )
          },
          adjustFocusedProps: function(e, t) {
            e && t && e._id !== t._id && (e._focused = !1), t && (t._focused = !0)
          },
        },
        to = eo,
        no = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      var ro = (function() {
          function e(t) {
            var n = t.data,
              r = t.mode,
              o = t.showPartiallySelected,
              a = t.rootPrefixId,
              i = t.searchPredicate
            !(function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this._src = n),
              (this.simpleSelect = 'simpleSelect' === r),
              (this.radioSelect = 'radioSelect' === r),
              (this.hierarchical = 'hierarchical' === r),
              (this.searchPredicate = i)
            var l = Ir({
                tree: JSON.parse(JSON.stringify(n)),
                simple: this.simpleSelect,
                radio: this.radioSelect,
                showPartialState: o,
                hierarchical: this.hierarchical,
                rootPrefixId: a,
              }),
              c = l.list,
              s = l.defaultValues,
              u = l.singleSelectedNode
            ;(this.tree = c),
              (this.defaultValues = s),
              (this.showPartialState = !this.hierarchical && o),
              (this.searchMaps = new Map()),
              (this.simpleSelect || this.radioSelect) && u && (this.currentChecked = u._id)
          }
          return (
            no(e, [
              {
                key: 'getNodeById',
                value: function(e) {
                  return this.tree.get(e)
                },
              },
              {
                key: 'getMatches',
                value: function(e) {
                  var t = this
                  if (this.searchMaps.has(e)) return this.searchMaps.get(e)
                  var n = -1,
                    r = e
                  this.searchMaps.forEach(function(t, o) {
                    e.startsWith(o) && o.length > n && ((n = o.length), (r = o))
                  })
                  var o = [],
                    a = this._getAddOnMatch(o, e)
                  r !== e
                    ? this.searchMaps.get(r).forEach(function(e) {
                        return a(t.getNodeById(e))
                      })
                    : this.tree.forEach(a)
                  return this.searchMaps.set(e, o), o
                },
              },
              {
                key: 'addParentsToTree',
                value: function(e, t) {
                  if (void 0 !== e) {
                    var n = this.getNodeById(e)
                    this.addParentsToTree(n._parent, t),
                      (n.hide = !n._isMatch || n.hide),
                      (n.matchInChildren = !0),
                      t.set(e, n)
                  }
                },
              },
              {
                key: 'addChildrenToTree',
                value: function(e, t, n) {
                  var r = this
                  void 0 !== e &&
                    e.forEach(function(e) {
                      if (!n || !n.includes(e)) {
                        var o = r.getNodeById(e)
                        ;(o.matchInParent = !0), t.set(e, o), r.addChildrenToTree(o._children, t)
                      }
                    })
                },
              },
              {
                key: 'filterTree',
                value: function(e, t, n) {
                  var r = this,
                    o = this.getMatches(e.toLowerCase()),
                    a = new Map()
                  o.forEach(function(e) {
                    var i = r.getNodeById(e)
                    ;(i.hide = !1),
                      (i._isMatch = !0),
                      t && r.addParentsToTree(i._parent, a),
                      a.set(e, i),
                      t && n && r.addChildrenToTree(i._children, a, o)
                  })
                  var i = 0 === o.length
                  return (this.matchTree = a), { allNodesHidden: i, tree: a }
                },
              },
              {
                key: 'restoreNodes',
                value: function() {
                  return (
                    this.tree.forEach(function(e) {
                      e.hide = !1
                    }),
                    this.tree
                  )
                },
              },
              {
                key: 'restoreDefaultValues',
                value: function() {
                  var e = this
                  return (
                    this.defaultValues.forEach(function(t) {
                      e.setNodeCheckedState(t, !0)
                    }),
                    this.tree
                  )
                },
              },
              {
                key: 'togglePreviousChecked',
                value: function(e, t) {
                  var n = this.currentChecked
                  if (n && n !== e) {
                    var r = this.getNodeById(n)
                    ;(r.checked = !1), this.radioSelect && this.showPartialState && this.partialCheckParents(r)
                  }
                  this.currentChecked = t ? e : null
                },
              },
              {
                key: 'setNodeCheckedState',
                value: function(e, t) {
                  this.radioSelect && this.togglePreviousChecked(e, t)
                  var n = this.getNodeById(e)
                  ;(n.checked = t),
                    this.showPartialState && (n.partial = !1),
                    this.simpleSelect
                      ? this.togglePreviousChecked(e, t)
                      : this.radioSelect
                      ? (this.showPartialState && this.partialCheckParents(n), t || this.unCheckParents(n))
                      : (this.hierarchical || this.toggleChildren(e, t),
                        this.showPartialState && this.partialCheckParents(n),
                        this.hierarchical || t || this.unCheckParents(n))
                },
              },
              {
                key: 'unCheckParents',
                value: function(e) {
                  for (var t = e._parent; t; ) {
                    var n = this.getNodeById(t)
                    ;(n.checked = !1), (n.partial = Rr(n, '_children', this.getNodeById.bind(this))), (t = n._parent)
                  }
                },
              },
              {
                key: 'partialCheckParents',
                value: function(e) {
                  for (var t = this, n = e._parent; n; ) {
                    var r = this.getNodeById(n)
                    ;(r.checked = r._children.every(function(e) {
                      return t.getNodeById(e).checked
                    })),
                      (r.partial = Rr(r, '_children', this.getNodeById.bind(this))),
                      (n = r._parent)
                  }
                },
              },
              {
                key: 'toggleChildren',
                value: function(e, t) {
                  var n = this,
                    r = this.getNodeById(e)
                  ;(r.checked = t),
                    this.showPartialState && (r.partial = !1),
                    f(r._children) ||
                      r._children.forEach(function(e) {
                        return n.toggleChildren(e, t)
                      })
                },
              },
              {
                key: 'toggleNodeExpandState',
                value: function(e) {
                  var t = this.getNodeById(e)
                  return (t.expanded = !t.expanded), t.expanded || this.collapseChildren(t), this.tree
                },
              },
              {
                key: 'collapseChildren',
                value: function(e) {
                  var t = this
                  ;(e.expanded = !1),
                    f(e._children) ||
                      e._children.forEach(function(e) {
                        return t.collapseChildren(t.getNodeById(e))
                      })
                },
              },
              {
                key: 'getTreeAndTags',
                value: function() {
                  return { tree: this.tree, tags: this.tags }
                },
              },
              {
                key: 'handleNavigationKey',
                value: function(e, t, n, r, o, a, i) {
                  var l = this,
                    c = e && this.getNodeById(e),
                    s = to.getAction(c, n)
                  return Jr.has(s)
                    ? to.handleFocusNavigationkey(
                        t,
                        s,
                        c,
                        function(e) {
                          return l.getNodeById(e)
                        },
                        o
                      )
                    : c && t.has(c._id)
                    ? to.handleToggleNavigationkey(s, c, r, a, i)
                    : e
                },
              },
              {
                key: '_getAddOnMatch',
                value: function(e, t) {
                  var n = function(e, t) {
                    return e.label.toLowerCase().indexOf(t) >= 0
                  }
                  return (
                    'function' == typeof this.searchPredicate && (n = this.searchPredicate),
                    function(r) {
                      n(r, t) && e.push(r._id)
                    }
                  )
                },
              },
              {
                key: 'tags',
                get: function() {
                  var e = this
                  return this.radioSelect || this.simpleSelect
                    ? this.currentChecked
                      ? [this.getNodeById(this.currentChecked)]
                      : []
                    : Lr.getNodesMatching(this.tree, function(t, n, r) {
                        return (
                          t.checked &&
                            !e.hierarchical &&
                            Lr.markSubTreeVisited(t, r, function(t) {
                              return e.getNodeById(t)
                            }),
                          t.checked
                        )
                      })
                },
              },
            ]),
            e
          )
        })(),
        oo = (n(10),
        Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }),
        ao = (function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              ;(r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        })()
      /*!
       * React Dropdown Tree Select
       * A lightweight, fast and highly customizable tree select component.
       * Hrusikesh Panda <hrusikesh.panda@dowjones.com>
       * Copyright (c) 2017 Dow Jones, Inc. <support@dowjones.com> (http://dowjones.com)
       * license MIT
       * see https://github.com/dowjones/tmr-tree-select
       */
      var io = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            (n.initNewProps = function(e) {
              var t = e.data,
                r = e.mode,
                o = e.value,
                a = e.showDropdown,
                i = e.showPartiallySelected,
                l = e.searchPredicate
              ;(o = o || []),
                (t = t.map(function(e) {
                  var t = e.children.map(function(e) {
                    var t = oo({}, e)
                    return (
                      (t = o.includes(e.value) ? oo({}, t, { isDefaultValue: !0 }) : oo({}, t, { isDefaultValue: !1 }))
                        .children &&
                        (t.children = t.children.map(function(e) {
                          return o.includes(e.value)
                            ? oo({}, e, { isDefaultValue: !0 })
                            : oo({}, e, { isDefaultValue: !1 })
                        })),
                      t
                    )
                  })
                  return oo({}, e, { children: t })
                })),
                (n.treeManager = new ro({
                  data: t,
                  mode: r,
                  showPartiallySelected: i,
                  rootPrefixId: n.clientId,
                  searchPredicate: l,
                }))
              for (
                var c = n.treeManager.getTreeAndTags(),
                  s = [],
                  u = function(e) {
                    var t = c.tags.find(function(t) {
                      return t.value === o[e]
                    })
                    s.push(t)
                  },
                  d = 0;
                d < c.tags.length;
                d++
              )
                u(d)
              ;(c.tags = s),
                s.length > 0 && n.props.onChange({}, s),
                n.setState(function(e) {
                  var t = e.currentFocus && n.treeManager.getNodeById(e.currentFocus)
                  return (
                    t && (t._focused = !0), oo({ showDropdown: /initial|always/.test(a) || !0 === e.showDropdown }, c)
                  )
                })
            }),
            (n.resetSearchState = function() {
              return (
                n.searchInput && (n.searchInput.value = ''),
                { tree: n.treeManager.restoreNodes(), searchModeOn: !1, allNodesHidden: !1 }
              )
            }),
            (n.handleClick = function(e, t) {
              n.setState(function(e) {
                var t = 'always' === n.props.showDropdown || n.keepDropdownActive || !e.showDropdown
                return (
                  t !== e.showDropdown &&
                    (t
                      ? document.addEventListener('click', n.handleOutsideClick, !1)
                      : document.removeEventListener('click', n.handleOutsideClick, !1)),
                  t ? n.props.onFocus() : n.props.onBlur(),
                  t ? { showDropdown: t } : oo({ showDropdown: t }, n.resetSearchState())
                )
              }, t)
            }),
            (n.handleOutsideClick = function(e) {
              'always' !== n.props.showDropdown &&
                (function(e, t) {
                  return (
                    e instanceof Event &&
                    !(function(e) {
                      if (e.path) return e.path
                      for (var t = e.target, n = [t]; t.parentElement; ) (t = t.parentElement), n.unshift(t)
                      return n
                    })(e).some(function(e) {
                      return e === t
                    })
                  )
                })(e, n.node) &&
                n.handleClick()
            }),
            (n.onInputChange = function(e) {
              var t = n.treeManager.filterTree(e, n.props.keepTreeOnSearch, n.props.keepChildrenOnSearch),
                r = t.allNodesHidden,
                o = t.tree,
                a = e.length > 0
              n.setState({ tree: o, searchModeOn: a, allNodesHidden: r, searchTerm: e })
            }),
            (n.onTagRemove = function(e, t) {
              var r = n.state.tags
              n.onCheckboxChange(e, !1, function(o) {
                t && to.getNextFocusAfterTagDelete(e, r, o, n.searchInput).focus()
              })
            }),
            (n.onTagReorder = function(e) {
              n.setState(oo({}, n.state, { tags: e })), n.props.onChange({}, e)
            }),
            (n.onNodeToggle = function(e) {
              n.treeManager.toggleNodeExpandState(e)
              var t = n.state.searchModeOn ? n.treeManager.matchTree : n.treeManager.tree
              n.setState({ tree: t }),
                'function' == typeof n.props.onNodeToggle && n.props.onNodeToggle(n.treeManager.getNodeById(e))
            }),
            (n.onCheckboxChange = function(e, t, r) {
              var o,
                a = n.props,
                i = a.mode,
                l = a.keepOpenOnSelect,
                c = a.clearSearchOnChange,
                s = n.state,
                u = s.currentFocus,
                d = s.searchModeOn
              n.treeManager.setNodeCheckedState(e, t)
              var f = n.state.tags.map(function(e) {
                  return e.value
                }),
                h = n.treeManager.tags.filter(function(e) {
                  if (!f.includes(e.value)) return e
                }),
                p = n.treeManager.tags.map(function(e) {
                  return e.value
                }),
                g = n.state.tags.filter(function(e) {
                  if (!p.includes(e.value)) return e
                }),
                v = n.state.tags
              ;(o = v).push.apply(
                o,
                (function(e) {
                  if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
                    return n
                  }
                  return Array.from(e)
                })(h)
              ),
                (v = g[0]
                  ? v.filter(function(e) {
                      if (g[0].value !== e.value) return e
                    })
                  : v)
              var b = ['simpleSelect', 'radioSelect'].indexOf(i) > -1,
                y = !(b && !l) && n.state.showDropdown,
                m = u && n.treeManager.getNodeById(u),
                w = n.treeManager.getNodeById(e),
                O = {
                  tree: d ? n.treeManager.matchTree : n.treeManager.tree,
                  tags: v,
                  showDropdown: y,
                  currentFocus: e,
                }
              ;((b && !y) || c) && Object.assign(O, n.resetSearchState()),
                b && !y && document.removeEventListener('click', n.handleOutsideClick, !1),
                to.adjustFocusedProps(m, w),
                n.setState(O, function() {
                  r && r(v)
                }),
                n.props.onChange(w, v)
            }),
            (n.onAction = function(e, t) {
              n.props.onAction(n.treeManager.getNodeById(e), t)
            }),
            (n.onInputFocus = function() {
              n.keepDropdownActive = !0
            }),
            (n.onInputBlur = function() {
              n.keepDropdownActive = !1
            }),
            (n.onTrigger = function(e) {
              n.handleClick(e, function() {
                n.state.showDropdown && n.searchInput.focus()
              })
            }),
            (n.onKeyboardKeyDown = function(e) {
              var t = n.props,
                r = t.readOnly,
                o = t.mode,
                a = n.state,
                i = a.showDropdown,
                l = a.tags,
                c = a.searchModeOn,
                s = a.currentFocus,
                u = n.treeManager,
                d = c ? u.matchTree : u.tree
              if (i || (!to.isValidKey(e.key, !1) && !/^\w$/i.test(e.key)))
                if (i && to.isValidKey(e.key, !0)) {
                  var f = u.handleNavigationKey(s, d, e.key, r, !c, n.onCheckboxChange, n.onNodeToggle)
                  f !== s &&
                    n.setState({ currentFocus: f }, function() {
                      var e = document && document.getElementById(f + '_li')
                      e && e.scrollIntoView()
                    })
                } else {
                  if (i && ['Escape', 'Tab'].indexOf(e.key) > -1)
                    return void ('simpleSelect' === o && d.has(s)
                      ? n.onCheckboxChange(s, !0)
                      : ((n.keepDropdownActive = !1), n.handleClick()))
                  if ('Backspace' !== e.key || !l.length || 0 !== n.searchInput.value.length) return
                  var h = l.pop()
                  n.onCheckboxChange(h._id, !1)
                }
              else if (
                (e.persist(),
                n.handleClick(null, function() {
                  return n.onKeyboardKeyDown(e)
                }),
                /\w/i.test(e.key))
              )
                return
              e.preventDefault()
            }),
            (n.getAriaAttributes = function() {
              var e = n.props,
                t = e.mode,
                r = e.texts
              return 'radioSelect' !== t ? {} : oo({ role: 'radiogroup' }, g(r.label))
            }),
            (n.state = { searchModeOn: !1, currentFocus: void 0, searchTerm: '' }),
            (n.clientId = e.id || h.get(n)),
            n
          )
        }
        return (
          (function(e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, e),
          ao(t, [
            {
              key: 'componentWillMount',
              value: function() {
                this.initNewProps(this.props)
              },
            },
            {
              key: 'componentDidUpdate',
              value: function(e) {
                JSON.stringify(this.props.data) !== JSON.stringify(e.data) && this.initNewProps(this.props)
              },
            },
            {
              key: 'componentWillUnmount',
              value: function() {
                document.removeEventListener('click', this.handleOutsideClick, !1)
              },
            },
            { key: 'componentWillReceiveProps', value: function(e) {} },
            {
              key: 'render',
              value: function() {
                var e = this,
                  t = this.props,
                  n = t.disabled,
                  r = t.readOnly,
                  o = t.mode,
                  a = t.texts,
                  i = t.inlineSearchInput,
                  l = t.tabIndex,
                  c = t.labelPrefix,
                  u = t.labelSuffix,
                  d = t.tagPrefix,
                  f = t.tagSuffix,
                  h = t.tagClassName,
                  p = this.state,
                  g = p.showDropdown,
                  v = p.currentFocus,
                  b = p.tags,
                  y = (p.vtags,
                  {
                    disabled: n,
                    readOnly: r,
                    activeDescendant: v ? v + '_li' : void 0,
                    texts: a,
                    mode: o,
                    clientId: this.clientId,
                    labelPrefix: c,
                    labelSuffix: u,
                    tagPrefix: d,
                    tagSuffix: f,
                    tagClassName: h,
                  }),
                  w = s.a.createElement(
                    m,
                    oo(
                      {
                        inputRef: function(t) {
                          e.searchInput = t
                        },
                        onInputChange: this.onInputChange,
                        onFocus: this.onInputFocus,
                        onBlur: this.onInputBlur,
                        onKeyDown: this.onKeyboardKeyDown,
                      },
                      y,
                      { inlineSearchInput: i }
                    )
                  )
                return s.a.createElement(
                  'div',
                  {
                    id: this.clientId,
                    className: [this.props.className && this.props.className, 'tmr-tree-select']
                      .filter(Boolean)
                      .join(' '),
                    ref: function(t) {
                      e.node = t
                    },
                  },
                  s.a.createElement(
                    'div',
                    {
                      className: [
                        'dropdown',
                        'simpleSelect' === o && 'simple-select',
                        'radioSelect' === o && 'radio-select',
                      ]
                        .filter(Boolean)
                        .join(' '),
                    },
                    s.a.createElement(
                      jn,
                      oo({ onTrigger: this.onTrigger, showDropdown: g }, y, { tags: b, tabIndex: l }),
                      s.a.createElement(
                        wn,
                        oo({ tags: b, onReorder: this.onTagReorder, onTagRemove: this.onTagRemove }, y),
                        !i && w
                      )
                    ),
                    g &&
                      s.a.createElement(
                        'div',
                        oo({ className: 'dropdown-content' }, this.getAriaAttributes()),
                        i && w,
                        this.state.allNodesHidden
                          ? s.a.createElement('span', { className: 'no-matches' }, a.noMatches || 'No matches found')
                          : s.a.createElement(
                              Nr,
                              oo(
                                {
                                  data: this.state.tree,
                                  keepTreeOnSearch: this.props.keepTreeOnSearch,
                                  keepChildrenOnSearch: this.props.keepChildrenOnSearch,
                                  searchModeOn: this.state.searchModeOn,
                                  onAction: this.onAction,
                                  onCheckboxChange: this.onCheckboxChange,
                                  onNodeToggle: this.onNodeToggle,
                                  mode: o,
                                  showPartiallySelected: this.props.showPartiallySelected,
                                },
                                y,
                                { searchTerm: this.state.searchTerm }
                              )
                            )
                      )
                  )
                )
              },
            },
          ]),
          t
        )
      })(c.Component)
      ;(io.propTypes = {
        data: l.a.oneOfType([l.a.object, l.a.array]).isRequired,
        clearSearchOnChange: l.a.bool,
        keepTreeOnSearch: l.a.bool,
        keepChildrenOnSearch: l.a.bool,
        keepOpenOnSelect: l.a.bool,
        texts: l.a.shape({
          placeholder: l.a.string,
          inlineSearchPlaceholder: l.a.string,
          noMatches: l.a.string,
          label: l.a.string,
          labelRemove: l.a.string,
        }),
        showDropdown: l.a.oneOf(['default', 'initial', 'always']),
        className: l.a.string,
        onChange: l.a.func,
        onAction: l.a.func,
        onNodeToggle: l.a.func,
        onFocus: l.a.func,
        onBlur: l.a.func,
        mode: l.a.oneOf(['multiSelect', 'simpleSelect', 'radioSelect', 'hierarchical']),
        showPartiallySelected: l.a.bool,
        disabled: l.a.bool,
        readOnly: l.a.bool,
        id: l.a.string,
        searchPredicate: l.a.func,
        inlineSearchInput: l.a.bool,
        tabIndex: l.a.number,
        labelPrefix: l.a.func,
        labelSuffix: l.a.func,
        tagPrefix: l.a.func,
        tagSuffix: l.a.func,
        tagClassName: l.a.string,
      }),
        (io.defaultProps = {
          onAction: function() {},
          onFocus: function() {},
          onBlur: function() {},
          onChange: function() {},
          texts: {},
          showDropdown: 'default',
          inlineSearchInput: !1,
          tabIndex: 0,
        })
      t.default = io
    },
  ])
})
//# sourceMappingURL=tmr-tree-select.js.map
