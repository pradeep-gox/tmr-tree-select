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
      n((n.s = 13))
    )
  })([
    function(e, t, n) {
      e.exports = n(7)()
    },
    function(t, n) {
      t.exports = e
    },
    function(e, t, n) {
      'use strict'
      e.exports = function(e, t, n, r, o, a, i, l) {
        if (!e) {
          var s
          if (void 0 === t)
            s = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            )
          else {
            var c = [n, r, o, a, i, l],
              u = 0
            ;(s = new Error(
              t.replace(/%s/g, function() {
                return c[u++]
              })
            )).name = 'Invariant Violation'
          }
          throw ((s.framesToPop = 1), s)
        }
      }
    },
    function(e, n) {
      e.exports = t
    },
    function(e, t, n) {
      'use strict'
      const r = (e, t, n) => {
        const r = t < 0 ? e.length + t : t
        if (r >= 0 && r < e.length) {
          const r = n < 0 ? e.length + n : n,
            [o] = e.splice(t, 1)
          e.splice(r, 0, o)
        }
      }
      ;(e.exports = (e, t, n) => ((e = [...e]), r(e, t, n), e)), (e.exports.mutate = r)
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
          t.default = c
          var a = n(3),
            i = o(n(4)),
            l = n(14),
            s = o(n(15))
          function c(e) {
            var t = e.activeClassName,
              n = void 0 === t ? '' : t,
              o = e.activeIndex,
              i = void 0 === o ? -1 : o,
              c = e.activeStyle,
              u = e.autoEscape,
              f = e.caseSensitive,
              d = void 0 !== f && f,
              h = e.className,
              p = e.findChunks,
              g = e.highlightClassName,
              y = void 0 === g ? '' : g,
              v = e.highlightStyle,
              b = void 0 === v ? {} : v,
              m = e.highlightTag,
              w = void 0 === m ? 'mark' : m,
              x = e.sanitize,
              O = e.searchWords,
              S = e.textToHighlight,
              T = e.unhighlightClassName,
              k = void 0 === T ? '' : T,
              C = e.unhighlightStyle,
              E = (function(e, t) {
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
                'unhighlightClassName',
                'unhighlightStyle',
              ]),
              P = (0, a.findAll)({
                autoEscape: u,
                caseSensitive: d,
                findChunks: p,
                sanitize: x,
                searchWords: O,
                textToHighlight: S,
              }),
              _ = w,
              N = -1,
              j = '',
              I = void 0,
              D = (0, s.default)(function(e) {
                var t = {}
                for (var n in e) t[n.toLowerCase()] = e[n]
                return t
              })
            return (0, l.createElement)(
              'span',
              r({ className: h }, E, {
                children: P.map(function(e, t) {
                  var r = S.substr(e.start, e.end - e.start)
                  if (e.highlight) {
                    N++
                    var o = void 0
                    o = 'object' == typeof y ? (d ? y[r] : (y = D(y))[r.toLowerCase()]) : y
                    var a = N === +i
                    ;(j = o + ' ' + (a ? n : '')), (I = !0 === a && null != c ? Object.assign({}, b, c) : b)
                    var s = { children: r, className: j, key: t, style: I }
                    return 'string' != typeof _ && (s.highlightIndex = N), (0, l.createElement)(_, s)
                  }
                  return (0, l.createElement)('span', { children: r, className: k, key: t, style: C })
                }),
              })
            )
          }
          ;(c.propTypes = {
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
                  s = void 0 === l ? r : l,
                  c = e.sanitize,
                  u = e.searchWords,
                  f = e.textToHighlight
                return o({
                  chunksToHighlight: n({
                    chunks: s({ autoEscape: t, caseSensitive: i, sanitize: c, searchWords: u, textToHighlight: f }),
                  }),
                  totalLength: f ? f.length : 0,
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
                          var s = i.index,
                            c = a.lastIndex
                          c > s && e.push({ start: s, end: c }), i.index == a.lastIndex && a.lastIndex++
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
          var s,
            c = [],
            u = !1,
            f = -1
          function d() {
            u && s && ((u = !1), s.length ? (c = s.concat(c)) : (f = -1), c.length && h())
          }
          function h() {
            if (!u) {
              var e = l(d)
              u = !0
              for (var t = c.length; t; ) {
                for (s = c, c = []; ++f < t; ) s && s[f].run()
                ;(f = -1), (t = c.length)
              }
              ;(s = null),
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
            c.push(new p(e, t)), 1 !== c.length || u || l(h)
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
              s = n(12)
            e.exports = function(e, n) {
              var c = 'function' == typeof Symbol && Symbol.iterator
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
                      return new d(
                        'Property `' + a + '` of component `' + r + '` has invalid PropType notation inside arrayOf.'
                      )
                    var i = t[n]
                    if (!Array.isArray(i))
                      return new d(
                        'Invalid ' +
                          o +
                          ' `' +
                          a +
                          '` of type `' +
                          y(i) +
                          '` supplied to `' +
                          r +
                          '`, expected an array.'
                      )
                    for (var s = 0; s < i.length; s++) {
                      var c = e(i, s, r, o, a + '[' + s + ']', l)
                      if (c instanceof Error) return c
                    }
                    return null
                  })
                },
                element: h(function(t, n, r, o, a) {
                  var i = t[n]
                  return e(i)
                    ? null
                    : new d(
                        'Invalid ' +
                          o +
                          ' `' +
                          a +
                          '` of type `' +
                          y(i) +
                          '` supplied to `' +
                          r +
                          '`, expected a single ReactElement.'
                      )
                }),
                instanceOf: function(e) {
                  return h(function(t, n, r, o, a) {
                    if (!(t[n] instanceof e)) {
                      var i = e.name || '<<anonymous>>'
                      return new d(
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
                    : new d('Invalid ' + r + ' `' + o + '` supplied to `' + n + '`, expected a ReactNode.')
                }),
                objectOf: function(e) {
                  return h(function(t, n, r, o, a) {
                    if ('function' != typeof e)
                      return new d(
                        'Property `' + a + '` of component `' + r + '` has invalid PropType notation inside objectOf.'
                      )
                    var i = t[n],
                      s = y(i)
                    if ('object' !== s)
                      return new d(
                        'Invalid ' + o + ' `' + a + '` of type `' + s + '` supplied to `' + r + '`, expected an object.'
                      )
                    for (var c in i)
                      if (i.hasOwnProperty(c)) {
                        var u = e(i, c, r, o, a + '.' + c, l)
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
                    for (var i = t[n], l = 0; l < e.length; l++) if (f(i, e[l])) return null
                    return new d(
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
                          b(o),
                          n
                        ),
                        r.thatReturnsNull
                      )
                  }
                  return h(function(t, n, r, o, a) {
                    for (var i = 0; i < e.length; i++) {
                      if (null == (0, e[i])(t, n, r, o, a, l)) return null
                    }
                    return new d('Invalid ' + o + ' `' + a + '` supplied to `' + r + '`.')
                  })
                },
                shape: function(e) {
                  return h(function(t, n, r, o, a) {
                    var i = t[n],
                      s = y(i)
                    if ('object' !== s)
                      return new d(
                        'Invalid ' + o + ' `' + a + '` of type `' + s + '` supplied to `' + r + '`, expected `object`.'
                      )
                    for (var c in e) {
                      var u = e[c]
                      if (u) {
                        var f = u(i, c, r, o, a + '.' + c, l)
                        if (f) return f
                      }
                    }
                    return null
                  })
                },
                exact: function(e) {
                  return h(function(t, n, r, o, a) {
                    var s = t[n],
                      c = y(s)
                    if ('object' !== c)
                      return new d(
                        'Invalid ' + o + ' `' + a + '` of type `' + c + '` supplied to `' + r + '`, expected `object`.'
                      )
                    var u = i({}, t[n], e)
                    for (var f in u) {
                      var h = e[f]
                      if (!h)
                        return new d(
                          'Invalid ' +
                            o +
                            ' `' +
                            a +
                            '` key `' +
                            f +
                            '` supplied to `' +
                            r +
                            '`.\nBad object: ' +
                            JSON.stringify(t[n], null, '  ') +
                            '\nValid keys: ' +
                            JSON.stringify(Object.keys(e), null, '  ')
                        )
                      var p = h(s, f, r, o, a + '.' + f, l)
                      if (p) return p
                    }
                    return null
                  })
                },
              }
              function f(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
              }
              function d(e) {
                ;(this.message = e), (this.stack = '')
              }
              function h(e) {
                if ('production' !== t.env.NODE_ENV)
                  var r = {},
                    i = 0
                function s(s, c, u, f, h, p, g) {
                  if (((f = f || '<<anonymous>>'), (p = p || u), g !== l))
                    if (n)
                      o(
                        !1,
                        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types'
                      )
                    else if ('production' !== t.env.NODE_ENV && 'undefined' != typeof console) {
                      var y = f + ':' + u
                      !r[y] &&
                        i < 3 &&
                        (a(
                          !1,
                          'You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                          p,
                          f
                        ),
                        (r[y] = !0),
                        i++)
                    }
                  return null == c[u]
                    ? s
                      ? null === c[u]
                        ? new d(
                            'The ' + h + ' `' + p + '` is marked as required in `' + f + '`, but its value is `null`.'
                          )
                        : new d(
                            'The ' +
                              h +
                              ' `' +
                              p +
                              '` is marked as required in `' +
                              f +
                              '`, but its value is `undefined`.'
                          )
                      : null
                    : e(c, u, f, h, p)
                }
                var c = s.bind(null, !1)
                return (c.isRequired = s.bind(null, !0)), c
              }
              function p(e) {
                return h(function(t, n, r, o, a, i) {
                  var l = t[n]
                  return y(l) !== e
                    ? new d(
                        'Invalid ' +
                          o +
                          ' `' +
                          a +
                          '` of type `' +
                          v(l) +
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
                      var t = e && ((c && e[c]) || e['@@iterator'])
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
              function y(e) {
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
              function v(e) {
                if (null == e) return '' + e
                var t = y(e)
                if ('object' === t) {
                  if (e instanceof Date) return 'date'
                  if (e instanceof RegExp) return 'regexp'
                }
                return t
              }
              function b(e) {
                var t = v(e)
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
              return (d.prototype = Error.prototype), (u.checkPropTypes = s), (u.PropTypes = u), u
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
              (e.exports = function(e, t, r, o, a, i, l, s) {
                if ((n(t), !e)) {
                  var c
                  if (void 0 === t)
                    c = new Error(
                      'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
                    )
                  else {
                    var u = [r, o, a, i, l, s],
                      f = 0
                    ;(c = new Error(
                      t.replace(/%s/g, function() {
                        return u[f++]
                      })
                    )).name = 'Invariant Violation'
                  }
                  throw ((c.framesToPop = 1), c)
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
                for (var i, l, s = a(e), c = 1; c < arguments.length; c++) {
                  for (var u in (i = Object(arguments[c]))) r.call(i, u) && (s[u] = i[u])
                  if (n) {
                    l = n(i)
                    for (var f = 0; f < l.length; f++) o.call(i, l[f]) && (s[l[f]] = i[l[f]])
                  }
                }
                return s
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
            e.exports = function(e, n, l, s, c) {
              if ('production' !== t.env.NODE_ENV)
                for (var u in e)
                  if (e.hasOwnProperty(u)) {
                    var f
                    try {
                      r(
                        'function' == typeof e[u],
                        '%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.',
                        s || 'React class',
                        l,
                        u,
                        typeof e[u]
                      ),
                        (f = e[u](n, u, s, l, null, a))
                    } catch (e) {
                      f = e
                    }
                    if (
                      (o(
                        !f || f instanceof Error,
                        '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                        s || 'React class',
                        l,
                        u,
                        typeof f
                      ),
                      f instanceof Error && !(f.message in i))
                    ) {
                      i[f.message] = !0
                      var d = c ? c() : ''
                      o(!1, 'Failed %s type: %s%s', l, f.message, null != d ? d : '')
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
          e.exports = n(1)
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
              s = function() {
                for (var t = arguments.length, n = Array(t), s = 0; s < t; s++) n[s] = arguments[s]
                return i && r === this && n.length === o.length && n.every(l)
                  ? a
                  : ((i = !0), (r = this), (o = n), (a = e.apply(this, n)))
              }
            return s
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
      var r = n(8)
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
        i = n(0),
        l = n.n(i),
        s = n(1),
        c = n.n(s),
        u = function(e) {
          return e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
        },
        f = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object.keys(e).reduce(function(t, n) {
            return (t['data-' + u(n)] = e[n]), t
          }, {})
        },
        d = function(e) {
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
      var y =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        v = (function() {
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
      var b = (function(e) {
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
          v(t, [
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
                  s = e.onKeyDown,
                  u = e.activeDescendant,
                  f = e.inlineSearchInput
                return c.a.createElement(
                  'input',
                  y(
                    {
                      type: 'text',
                      disabled: i,
                      ref: t,
                      className: 'search',
                      placeholder: f ? r.inlineSearchPlaceholder || 'Search...' : r.placeholder || 'Choose...',
                      onKeyDown: s,
                      onChange: this.handleInputChange,
                      onFocus: o,
                      onBlur: a,
                      readOnly: l,
                      'aria-activedescendant': u,
                      'aria-autocomplete': s ? 'list' : void 0,
                    },
                    g(r.label)
                  )
                )
              },
            },
          ]),
          t
        )
      })(s.PureComponent)
      b.propTypes = {
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
      var m = b,
        w = (n(9),
        Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }),
        x = (function() {
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
      function O(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function S(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var T = function(e) {
          return e + '_tag'
        },
        k = (function(e) {
          function t() {
            var e, n, r
            O(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = S(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.handleClick = function(e) {
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
            x(t, [
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
                    s = e.tagSuffix,
                    u = T(t),
                    f = t + '_button',
                    d = ['tag-remove', a && 'readOnly', i && 'disabled'].filter(Boolean).join(' '),
                    h = a || i
                  return c.a.createElement(
                    'span',
                    { className: 'tag', id: u, 'aria-label': n },
                    l ? l(w({}, this.props, { value: this.props.id })) : null,
                    n,
                    s ? s(w({}, this.props, { value: this.props.id })) : null,
                    c.a.createElement(
                      'button',
                      {
                        id: f,
                        onClick: h ? void 0 : this.handleClick,
                        onKeyDown: h ? void 0 : this.onKeyDown,
                        onKeyUp: h ? void 0 : this.onKeyUp,
                        className: d,
                        type: 'button',
                        'aria-label': o,
                        'aria-labelledby': f + ' ' + u,
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
        })(s.PureComponent)
      k.propTypes = {
        id: l.a.string.isRequired,
        label: l.a.string.isRequired,
        onDelete: l.a.func,
        readOnly: l.a.bool,
        disabled: l.a.bool,
        labelRemove: l.a.string,
        tagPrefix: l.a.func,
        tagSuffix: l.a.func,
      }
      var C = k
      n(10)
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) ({}.hasOwnProperty.call(n, r) && (e[r] = n[r]))
              }
              return e
            }).apply(null, arguments)
      }
      function P(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function _(e, t) {
        if (e) {
          if ('string' == typeof e) return P(e, t)
          var n = {}.toString.call(e).slice(8, -1)
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? P(e, t)
              : void 0
          )
        }
      }
      function N(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function(e, t) {
            var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
            if (null != n) {
              var r,
                o,
                a,
                i,
                l = [],
                s = !0,
                c = !1
              try {
                if (((a = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return
                  s = !1
                } else for (; !(s = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); s = !0);
              } catch (e) {
                ;(c = !0), (o = e)
              } finally {
                try {
                  if (!s && null != n.return && ((i = n.return()), Object(i) !== i)) return
                } finally {
                  if (c) throw o
                }
              }
              return l
            }
          })(e, t) ||
          _(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function j(e) {
        return (j =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function I(e) {
        var t = (function(e, t) {
          if ('object' != j(e) || !e) return e
          var n = e[Symbol.toPrimitive]
          if (void 0 !== n) {
            var r = n.call(e, t || 'default')
            if ('object' != j(r)) return r
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === t ? String : Number)(e)
        })(e, 'string')
        return 'symbol' == j(t) ? t : t + ''
      }
      function D(e, t, n) {
        return (
          (t = I(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? Object(arguments[t]) : {},
            r = Object.keys(n)
          'function' == typeof Object.getOwnPropertySymbols &&
            r.push.apply(
              r,
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              })
            ),
            r.forEach(function(t) {
              D(e, t, n[t])
            })
        }
        return e
      }
      function A(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function M(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, I(r.key), r)
        }
      }
      function L(e, t, n) {
        return t && M(e.prototype, t), n && M(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e
      }
      function F(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function B(e, t) {
        if (t && ('object' == j(t) || 'function' == typeof t)) return t
        if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
        return F(e)
      }
      function W(e) {
        return (W = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function H(e, t) {
        return (H = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function(e, t) {
              return (e.__proto__ = t), e
            })(e, t)
      }
      function K(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function')
        ;(e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && H(e, t)
      }
      var V = n(3),
        Y = n(2),
        q = n.n(Y)
      function U(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) return P(e)
          })(e) ||
          (function(e) {
            if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
              return Array.from(e)
          })(e) ||
          _(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      var z = (function() {
        function e() {
          A(this, e), D(this, 'refs', {})
        }
        return (
          L(e, [
            {
              key: 'add',
              value: function(e, t) {
                this.refs[e] || (this.refs[e] = []), this.refs[e].push(t)
              },
            },
            {
              key: 'remove',
              value: function(e, t) {
                var n = this.getIndex(e, t)
                ;-1 !== n && this.refs[e].splice(n, 1)
              },
            },
            {
              key: 'isActive',
              value: function() {
                return this.active
              },
            },
            {
              key: 'getActive',
              value: function() {
                var e = this
                return this.refs[this.active.collection].find(function(t) {
                  return t.node.sortableInfo.index == e.active.index
                })
              },
            },
            {
              key: 'getIndex',
              value: function(e, t) {
                return this.refs[e].indexOf(t)
              },
            },
            {
              key: 'getOrderedRefs',
              value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.active.collection
                return this.refs[e].sort(G)
              },
            },
          ]),
          e
        )
      })()
      function G(e, t) {
        return e.node.sortableInfo.index - t.node.sortableInfo.index
      }
      function $(e, t) {
        return Object.keys(e).reduce(function(n, r) {
          return -1 === t.indexOf(r) && (n[r] = e[r]), n
        }, {})
      }
      var X = {
          end: ['touchend', 'touchcancel', 'mouseup'],
          move: ['touchmove', 'mousemove'],
          start: ['touchstart', 'mousedown'],
        },
        J = (function() {
          if ('undefined' == typeof window || 'undefined' == typeof document) return ''
          var e = window.getComputedStyle(document.documentElement, '') || ['-moz-hidden-iframe'],
            t = (Array.prototype.slice
              .call(e)
              .join('')
              .match(/-(moz|webkit|ms)-/) ||
              ('' === e.OLink && ['', 'o']))[1]
          switch (t) {
            case 'ms':
              return 'ms'
            default:
              return t && t.length ? t[0].toUpperCase() + t.substr(1) : ''
          }
        })()
      function Z(e, t) {
        Object.keys(t).forEach(function(n) {
          e.style[n] = t[n]
        })
      }
      function Q(e, t) {
        e.style[''.concat(J, 'Transform')] = null == t ? '' : 'translate3d('.concat(t.x, 'px,').concat(t.y, 'px,0)')
      }
      function ee(e, t) {
        e.style[''.concat(J, 'TransitionDuration')] = null == t ? '' : ''.concat(t, 'ms')
      }
      function te(e, t) {
        for (; e; ) {
          if (t(e)) return e
          e = e.parentNode
        }
        return null
      }
      function ne(e, t, n) {
        return Math.max(e, Math.min(n, t))
      }
      function re(e) {
        return 'px' === e.substr(-2) ? parseFloat(e) : 0
      }
      function oe(e) {
        var t = window.getComputedStyle(e)
        return { bottom: re(t.marginBottom), left: re(t.marginLeft), right: re(t.marginRight), top: re(t.marginTop) }
      }
      function ae(e, t) {
        var n = t.displayName || t.name
        return n ? ''.concat(e, '(').concat(n, ')') : e
      }
      function ie(e, t) {
        var n = e.getBoundingClientRect()
        return { top: n.top + t.top, left: n.left + t.left }
      }
      function le(e) {
        return e.touches && e.touches.length
          ? { x: e.touches[0].pageX, y: e.touches[0].pageY }
          : e.changedTouches && e.changedTouches.length
          ? { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY }
          : { x: e.pageX, y: e.pageY }
      }
      function se(e) {
        return (e.touches && e.touches.length) || (e.changedTouches && e.changedTouches.length)
      }
      function ce(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { left: 0, top: 0 }
        if (e) {
          var r = { left: n.left + e.offsetLeft, top: n.top + e.offsetTop }
          return e.parentNode === t ? r : ce(e.parentNode, t, r)
        }
      }
      function ue(e, t, n) {
        return e < n && e > t ? e - 1 : e > n && e < t ? e + 1 : e
      }
      function fe(e) {
        var t = e.lockOffset,
          n = e.width,
          r = e.height,
          o = t,
          a = t,
          i = 'px'
        if ('string' == typeof t) {
          var l = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t)
          q()(
            null !== l,
            'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',
            t
          ),
            (o = parseFloat(t)),
            (a = parseFloat(t)),
            (i = l[1])
        }
        return (
          q()(isFinite(o) && isFinite(a), 'lockOffset value should be a finite. Given %s', t),
          '%' === i && ((o = (o * n) / 100), (a = (a * r) / 100)),
          { x: o, y: a }
        )
      }
      function de(e) {
        var t = e.height,
          n = e.width,
          r = e.lockOffset,
          o = Array.isArray(r) ? r : [r, r]
        q()(
          2 === o.length,
          'lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s',
          r
        )
        var a = N(o, 2),
          i = a[0],
          l = a[1]
        return [fe({ height: t, lockOffset: i, width: n }), fe({ height: t, lockOffset: l, width: n })]
      }
      function he(e) {
        return e instanceof HTMLElement
          ? (function(e) {
              var t = window.getComputedStyle(e),
                n = /(auto|scroll)/
              return ['overflow', 'overflowX', 'overflowY'].find(function(e) {
                return n.test(t[e])
              })
            })(e)
            ? e
            : he(e.parentNode)
          : null
      }
      function pe(e) {
        var t = window.getComputedStyle(e)
        return 'grid' === t.display ? { x: re(t.gridColumnGap), y: re(t.gridRowGap) } : { x: 0, y: 0 }
      }
      var ge = 27,
        ye = 32,
        ve = 37,
        be = 38,
        me = 39,
        we = 40,
        xe = 'A',
        Oe = 'BUTTON',
        Se = 'CANVAS',
        Te = 'INPUT',
        ke = 'OPTION',
        Ce = 'TEXTAREA',
        Ee = 'SELECT'
      function Pe(e) {
        var t = 'input, textarea, select, canvas, [contenteditable]',
          n = e.querySelectorAll(t),
          r = e.cloneNode(!0)
        return (
          U(r.querySelectorAll(t)).forEach(function(e, t) {
            ;('file' !== e.type && (e.value = n[t].value),
            'radio' === e.type && e.name && (e.name = '__sortableClone__'.concat(e.name)),
            e.tagName === Se && n[t].width > 0 && n[t].height > 0) && e.getContext('2d').drawImage(n[t], 0, 0)
          }),
          r
        )
      }
      function _e(e) {
        return null != e.sortableHandle
      }
      var Ne = (function() {
        function e(t, n) {
          A(this, e), (this.container = t), (this.onScrollCallback = n)
        }
        return (
          L(e, [
            {
              key: 'clear',
              value: function() {
                null != this.interval && (clearInterval(this.interval), (this.interval = null))
              },
            },
            {
              key: 'update',
              value: function(e) {
                var t = this,
                  n = e.translate,
                  r = e.minTranslate,
                  o = e.maxTranslate,
                  a = e.width,
                  i = e.height,
                  l = { x: 0, y: 0 },
                  s = { x: 1, y: 1 },
                  c = 10,
                  u = 10,
                  f = this.container,
                  d = f.scrollTop,
                  h = f.scrollLeft,
                  p = f.scrollHeight,
                  g = f.scrollWidth,
                  y = 0 === d,
                  v = p - d - f.clientHeight == 0,
                  b = 0 === h,
                  m = g - h - f.clientWidth == 0
                n.y >= o.y - i / 2 && !v
                  ? ((l.y = 1), (s.y = u * Math.abs((o.y - i / 2 - n.y) / i)))
                  : n.x >= o.x - a / 2 && !m
                  ? ((l.x = 1), (s.x = c * Math.abs((o.x - a / 2 - n.x) / a)))
                  : n.y <= r.y + i / 2 && !y
                  ? ((l.y = -1), (s.y = u * Math.abs((n.y - i / 2 - r.y) / i)))
                  : n.x <= r.x + a / 2 && !b && ((l.x = -1), (s.x = c * Math.abs((n.x - a / 2 - r.x) / a))),
                  this.interval && (this.clear(), (this.isAutoScrolling = !1)),
                  (0 === l.x && 0 === l.y) ||
                    (this.interval = setInterval(function() {
                      t.isAutoScrolling = !0
                      var e = { left: s.x * l.x, top: s.y * l.y }
                      ;(t.container.scrollTop += e.top), (t.container.scrollLeft += e.left), t.onScrollCallback(e)
                    }, 5))
              },
            },
          ]),
          e
        )
      })()
      var je = {
          axis: l.a.oneOf(['x', 'y', 'xy']),
          contentWindow: l.a.any,
          disableAutoscroll: l.a.bool,
          distance: l.a.number,
          getContainer: l.a.func,
          getHelperDimensions: l.a.func,
          helperClass: l.a.string,
          helperContainer: l.a.oneOfType([
            l.a.func,
            'undefined' == typeof HTMLElement ? l.a.any : l.a.instanceOf(HTMLElement),
          ]),
          hideSortableGhost: l.a.bool,
          keyboardSortingTransitionDuration: l.a.number,
          lockAxis: l.a.string,
          lockOffset: l.a.oneOfType([l.a.number, l.a.string, l.a.arrayOf(l.a.oneOfType([l.a.number, l.a.string]))]),
          lockToContainerEdges: l.a.bool,
          onSortEnd: l.a.func,
          onSortMove: l.a.func,
          onSortOver: l.a.func,
          onSortStart: l.a.func,
          pressDelay: l.a.number,
          pressThreshold: l.a.number,
          keyCodes: l.a.shape({
            lift: l.a.arrayOf(l.a.number),
            drop: l.a.arrayOf(l.a.number),
            cancel: l.a.arrayOf(l.a.number),
            up: l.a.arrayOf(l.a.number),
            down: l.a.arrayOf(l.a.number),
          }),
          shouldCancelStart: l.a.func,
          transitionDuration: l.a.number,
          updateBeforeSortStart: l.a.func,
          useDragHandle: l.a.bool,
          useWindowAsScrollContainer: l.a.bool,
        },
        Ie = { lift: [ye], drop: [ye], cancel: [ge], up: [be, ve], down: [we, me] },
        De = {
          axis: 'y',
          disableAutoscroll: !1,
          distance: 0,
          getHelperDimensions: function(e) {
            var t = e.node
            return { height: t.offsetHeight, width: t.offsetWidth }
          },
          hideSortableGhost: !0,
          lockOffset: '50%',
          lockToContainerEdges: !1,
          pressDelay: 0,
          pressThreshold: 5,
          keyCodes: Ie,
          shouldCancelStart: function(e) {
            return (
              -1 !== [Te, Ce, Ee, ke, Oe].indexOf(e.target.tagName) ||
              !!te(e.target, function(e) {
                return 'true' === e.contentEditable
              })
            )
          },
          transitionDuration: 300,
          useWindowAsScrollContainer: !1,
        },
        Re = Object.keys(je)
      function Ae(e) {
        q()(
          !(e.distance && e.pressDelay),
          'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.'
        )
      }
      function Me(e, t) {
        try {
          var n = e()
        } catch (e) {
          return t(!0, e)
        }
        return n && n.then ? n.then(t.bind(null, !1), t.bind(null, !0)) : t(!1, value)
      }
      var Le = {
          index: l.a.number.isRequired,
          collection: l.a.oneOfType([l.a.number, l.a.string]),
          disabled: l.a.bool,
        },
        Fe = Object.keys(Le)
      var Be = n(4),
        We = n.n(Be),
        He = function(e, t) {
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
        Ke =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        Ve = ((function(e) {
          var t,
            n,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { withRef: !1 }
          ;(n = t = (function(t) {
            function n() {
              return A(this, n), B(this, W(n).apply(this, arguments))
            }
            return (
              K(n, t),
              L(n, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    Object(V.findDOMNode)(this).sortableHandle = !0
                  },
                },
                {
                  key: 'getWrappedInstance',
                  value: function() {
                    return (
                      q()(
                        r.withRef,
                        'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call'
                      ),
                      this.refs.wrappedInstance
                    )
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var t = r.withRef ? 'wrappedInstance' : null
                    return Object(s.createElement)(e, E({ ref: t }, this.props))
                  },
                },
              ]),
              n
            )
          })(s.Component)),
            D(t, 'displayName', ae('sortableHandle', e))
        })(function() {
          return c.a.createElement('span', null, '::')
        }),
        (function(e) {
          var t,
            n,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { withRef: !1 }
          return (
            (n = t = (function(t) {
              function n() {
                return A(this, n), B(this, W(n).apply(this, arguments))
              }
              return (
                K(n, t),
                L(n, [
                  {
                    key: 'componentDidMount',
                    value: function() {
                      this.register()
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value: function(e) {
                      this.node &&
                        (e.index !== this.props.index && (this.node.sortableInfo.index = this.props.index),
                        e.disabled !== this.props.disabled && (this.node.sortableInfo.disabled = this.props.disabled)),
                        e.collection !== this.props.collection && (this.unregister(e.collection), this.register())
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function() {
                      this.unregister()
                    },
                  },
                  {
                    key: 'register',
                    value: function() {
                      var e = this.props,
                        t = e.collection,
                        n = e.disabled,
                        r = e.index,
                        o = Object(V.findDOMNode)(this)
                      ;(o.sortableInfo = { collection: t, disabled: n, index: r, manager: this.context.manager }),
                        (this.node = o),
                        (this.ref = { node: o }),
                        this.context.manager.add(t, this.ref)
                    },
                  },
                  {
                    key: 'unregister',
                    value: function() {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.collection
                      this.context.manager.remove(e, this.ref)
                    },
                  },
                  {
                    key: 'getWrappedInstance',
                    value: function() {
                      return (
                        q()(
                          r.withRef,
                          'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call'
                        ),
                        this.refs.wrappedInstance
                      )
                    },
                  },
                  {
                    key: 'render',
                    value: function() {
                      var t = r.withRef ? 'wrappedInstance' : null
                      return Object(s.createElement)(e, E({ ref: t }, $(this.props, Fe)))
                    },
                  },
                ]),
                n
              )
            })(s.Component)),
            D(t, 'displayName', ae('sortableElement', e)),
            D(t, 'contextTypes', { manager: l.a.object.isRequired }),
            D(t, 'propTypes', Le),
            D(t, 'defaultProps', { collection: 0 }),
            n
          )
        })(
          Object(s.forwardRef)(function(e, t) {
            var n = e._id,
              r = e.label,
              o = e.tagClassName,
              a = e.dataset,
              i = e.tagLabel,
              l = (e.description, e.onDelete),
              s = e.readOnly,
              u = e.disabled,
              d = e.labelRemove,
              h = e.tagDisabled,
              p = e.tagPrefix,
              g = e.tagSuffix
            return c.a.createElement(
              'div',
              { ref: t },
              c.a.createElement(
                'li',
                Ke({ className: ['tag-item', o].filter(Boolean).join(' '), key: n, index: n }, f(a)),
                ' ',
                c.a.createElement(C, {
                  label: i || r,
                  tagPrefix: p,
                  tagSuffix: g,
                  id: '' + n,
                  onDelete: l,
                  readOnly: s,
                  disabled: u || h,
                  labelRemove: d,
                })
              )
            )
          }),
          { withRef: !0 }
        )),
        Ye = (function(e) {
          var t,
            n,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { withRef: !1 }
          return (
            (n = t = (function(t) {
              function n(e) {
                var t
                return (
                  A(this, n),
                  D(F(F((t = B(this, W(n).call(this, e))))), 'state', {}),
                  D(F(F(t)), 'handleStart', function(e) {
                    var n = t.props,
                      r = n.distance,
                      o = n.shouldCancelStart
                    if (2 !== e.button && !o(e)) {
                      ;(t.touched = !0), (t.position = le(e))
                      var a = te(e.target, function(e) {
                        return null != e.sortableInfo
                      })
                      if (a && a.sortableInfo && t.nodeIsChild(a) && !t.state.sorting) {
                        var i = t.props.useDragHandle,
                          l = a.sortableInfo,
                          s = l.index,
                          c = l.collection
                        if (l.disabled) return
                        if (i && !te(e.target, _e)) return
                        ;(t.manager.active = { collection: c, index: s }),
                          se(e) || e.target.tagName !== xe || e.preventDefault(),
                          r ||
                            (0 === t.props.pressDelay
                              ? t.handlePress(e)
                              : (t.pressTimer = setTimeout(function() {
                                  return t.handlePress(e)
                                }, t.props.pressDelay)))
                      }
                    }
                  }),
                  D(F(F(t)), 'nodeIsChild', function(e) {
                    return e.sortableInfo.manager === t.manager
                  }),
                  D(F(F(t)), 'handleMove', function(e) {
                    var n = t.props,
                      r = n.distance,
                      o = n.pressThreshold
                    if (!t.state.sorting && t.touched && !t._awaitingUpdateBeforeSortStart) {
                      var a = le(e),
                        i = { x: t.position.x - a.x, y: t.position.y - a.y },
                        l = Math.abs(i.x) + Math.abs(i.y)
                      ;(t.delta = i),
                        r || (o && !(l >= o))
                          ? r && l >= r && t.manager.isActive() && t.handlePress(e)
                          : (clearTimeout(t.cancelTimer), (t.cancelTimer = setTimeout(t.cancel, 0)))
                    }
                  }),
                  D(F(F(t)), 'handleEnd', function() {
                    ;(t.touched = !1), t.cancel()
                  }),
                  D(F(F(t)), 'cancel', function() {
                    var e = t.props.distance
                    t.state.sorting || (e || clearTimeout(t.pressTimer), (t.manager.active = null))
                  }),
                  D(F(F(t)), 'handlePress', function(e) {
                    try {
                      var n = t.manager.getActive(),
                        r = (function() {
                          if (n) {
                            var r = function() {
                                var n = d.sortableInfo.index,
                                  r = oe(d),
                                  o = pe(t.container),
                                  c = t.scrollContainer.getBoundingClientRect(),
                                  g = i({ index: n, node: d, collection: h })
                                if (
                                  ((t.node = d),
                                  (t.margin = r),
                                  (t.gridGap = o),
                                  (t.width = g.width),
                                  (t.height = g.height),
                                  (t.marginOffset = {
                                    x: t.margin.left + t.margin.right + t.gridGap.x,
                                    y: Math.max(t.margin.top, t.margin.bottom, t.gridGap.y),
                                  }),
                                  (t.boundingClientRect = d.getBoundingClientRect()),
                                  (t.containerBoundingRect = c),
                                  (t.index = n),
                                  (t.newIndex = n),
                                  (t.axis = { x: a.indexOf('x') >= 0, y: a.indexOf('y') >= 0 }),
                                  (t.offsetEdge = ce(d, t.container)),
                                  (t.initialOffset = le(
                                    p
                                      ? R({}, e, { pageX: t.boundingClientRect.left, pageY: t.boundingClientRect.top })
                                      : e
                                  )),
                                  (t.initialScroll = {
                                    left: t.scrollContainer.scrollLeft,
                                    top: t.scrollContainer.scrollTop,
                                  }),
                                  (t.initialWindowScroll = { left: window.pageXOffset, top: window.pageYOffset }),
                                  (t.helper = t.helperContainer.appendChild(Pe(d))),
                                  Z(t.helper, {
                                    boxSizing: 'border-box',
                                    height: ''.concat(t.height, 'px'),
                                    left: ''.concat(t.boundingClientRect.left - r.left, 'px'),
                                    pointerEvents: 'none',
                                    position: 'fixed',
                                    top: ''.concat(t.boundingClientRect.top - r.top, 'px'),
                                    width: ''.concat(t.width, 'px'),
                                  }),
                                  p && t.helper.focus(),
                                  s && ((t.sortableGhost = d), Z(d, { opacity: 0, visibility: 'hidden' })),
                                  (t.minTranslate = {}),
                                  (t.maxTranslate = {}),
                                  p)
                                ) {
                                  var y = f
                                      ? {
                                          top: 0,
                                          left: 0,
                                          width: t.contentWindow.innerWidth,
                                          height: t.contentWindow.innerHeight,
                                        }
                                      : t.containerBoundingRect,
                                    v = y.top,
                                    b = y.left,
                                    m = y.width,
                                    w = v + y.height,
                                    x = b + m
                                  t.axis.x &&
                                    ((t.minTranslate.x = b - t.boundingClientRect.left),
                                    (t.maxTranslate.x = x - (t.boundingClientRect.left + t.width))),
                                    t.axis.y &&
                                      ((t.minTranslate.y = v - t.boundingClientRect.top),
                                      (t.maxTranslate.y = w - (t.boundingClientRect.top + t.height)))
                                } else
                                  t.axis.x &&
                                    ((t.minTranslate.x = (f ? 0 : c.left) - t.boundingClientRect.left - t.width / 2),
                                    (t.maxTranslate.x =
                                      (f ? t.contentWindow.innerWidth : c.left + c.width) -
                                      t.boundingClientRect.left -
                                      t.width / 2)),
                                    t.axis.y &&
                                      ((t.minTranslate.y = (f ? 0 : c.top) - t.boundingClientRect.top - t.height / 2),
                                      (t.maxTranslate.y =
                                        (f ? t.contentWindow.innerHeight : c.top + c.height) -
                                        t.boundingClientRect.top -
                                        t.height / 2))
                                l &&
                                  l.split(' ').forEach(function(e) {
                                    return t.helper.classList.add(e)
                                  }),
                                  (t.listenerNode = e.touches ? d : t.contentWindow),
                                  p
                                    ? (t.listenerNode.addEventListener('wheel', t.handleKeyEnd, !0),
                                      t.listenerNode.addEventListener('mousedown', t.handleKeyEnd, !0),
                                      t.listenerNode.addEventListener('keydown', t.handleKeyDown))
                                    : (X.move.forEach(function(e) {
                                        return t.listenerNode.addEventListener(e, t.handleSortMove, !1)
                                      }),
                                      X.end.forEach(function(e) {
                                        return t.listenerNode.addEventListener(e, t.handleSortEnd, !1)
                                      })),
                                  t.setState({ sorting: !0, sortingIndex: n }),
                                  u &&
                                    u(
                                      {
                                        node: d,
                                        index: n,
                                        collection: h,
                                        isKeySorting: p,
                                        nodes: t.manager.getOrderedRefs(),
                                        helper: t.helper,
                                      },
                                      e
                                    ),
                                  p && t.keyMove(0)
                              },
                              o = t.props,
                              a = o.axis,
                              i = o.getHelperDimensions,
                              l = o.helperClass,
                              s = o.hideSortableGhost,
                              c = o.updateBeforeSortStart,
                              u = o.onSortStart,
                              f = o.useWindowAsScrollContainer,
                              d = n.node,
                              h = n.collection,
                              p = t.manager.isKeySorting,
                              g = (function() {
                                if ('function' == typeof c) {
                                  t._awaitingUpdateBeforeSortStart = !0
                                  var n = Me(
                                    function() {
                                      var t = d.sortableInfo.index
                                      return Promise.resolve(
                                        c({ collection: h, index: t, node: d, isKeySorting: p }, e)
                                      ).then(function() {})
                                    },
                                    function(e, n) {
                                      if (((t._awaitingUpdateBeforeSortStart = !1), e)) throw n
                                      return n
                                    }
                                  )
                                  if (n && n.then) return n.then(function() {})
                                }
                              })()
                            return g && g.then ? g.then(r) : r()
                          }
                        })()
                      return Promise.resolve(r && r.then ? r.then(function() {}) : void 0)
                    } catch (e) {
                      return Promise.reject(e)
                    }
                  }),
                  D(F(F(t)), 'handleSortMove', function(e) {
                    var n = t.props.onSortMove
                    'function' == typeof e.preventDefault && e.preventDefault(),
                      t.updateHelperPosition(e),
                      t.animateNodes(),
                      t.autoscroll(),
                      n && n(e)
                  }),
                  D(F(F(t)), 'handleSortEnd', function(e) {
                    var n = t.props,
                      r = n.hideSortableGhost,
                      o = n.onSortEnd,
                      a = t.manager,
                      i = a.active.collection,
                      l = a.isKeySorting,
                      s = t.manager.getOrderedRefs()
                    t.listenerNode &&
                      (l
                        ? (t.listenerNode.removeEventListener('wheel', t.handleKeyEnd, !0),
                          t.listenerNode.removeEventListener('mousedown', t.handleKeyEnd, !0),
                          t.listenerNode.removeEventListener('keydown', t.handleKeyDown))
                        : (X.move.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortMove)
                          }),
                          X.end.forEach(function(e) {
                            return t.listenerNode.removeEventListener(e, t.handleSortEnd)
                          }))),
                      t.helper.parentNode.removeChild(t.helper),
                      r && t.sortableGhost && Z(t.sortableGhost, { opacity: '', visibility: '' })
                    for (var c = 0, u = s.length; c < u; c++) {
                      var f = s[c],
                        d = f.node
                      ;(f.edgeOffset = null),
                        (f.boundingClientRect = null),
                        Q(d, null),
                        ee(d, null),
                        (f.translate = null)
                    }
                    t.autoScroller.clear(),
                      (t.manager.active = null),
                      (t.manager.isKeySorting = !1),
                      t.setState({ sorting: !1, sortingIndex: null }),
                      'function' == typeof o &&
                        o({ collection: i, newIndex: t.newIndex, oldIndex: t.index, isKeySorting: l, nodes: s }, e),
                      (t.touched = !1)
                  }),
                  D(F(F(t)), 'autoscroll', function() {
                    var e = t.props.disableAutoscroll,
                      n = t.manager.isKeySorting
                    if (e) t.autoScroller.clear()
                    else {
                      if (n) {
                        var r = R({}, t.translate),
                          o = 0,
                          a = 0
                        return (
                          t.axis.x &&
                            ((r.x = Math.min(t.maxTranslate.x, Math.max(t.minTranslate.x, t.translate.x))),
                            (o = t.translate.x - r.x)),
                          t.axis.y &&
                            ((r.y = Math.min(t.maxTranslate.y, Math.max(t.minTranslate.y, t.translate.y))),
                            (a = t.translate.y - r.y)),
                          (t.translate = r),
                          Q(t.helper, t.translate),
                          (t.scrollContainer.scrollLeft += o),
                          void (t.scrollContainer.scrollTop += a)
                        )
                      }
                      t.autoScroller.update({
                        height: t.height,
                        maxTranslate: t.maxTranslate,
                        minTranslate: t.minTranslate,
                        translate: t.translate,
                        width: t.width,
                      })
                    }
                  }),
                  D(F(F(t)), 'onAutoScroll', function(e) {
                    ;(t.translate.x += e.left), (t.translate.y += e.top), t.animateNodes()
                  }),
                  D(F(F(t)), 'handleKeyDown', function(e) {
                    var n = e.keyCode,
                      r = t.props,
                      o = r.shouldCancelStart,
                      a = r.keyCodes,
                      i = R({}, Ie, void 0 === a ? {} : a)
                    ;(t.manager.active && !t.manager.isKeySorting) ||
                      !(t.manager.active || (i.lift.includes(n) && !o(e) && t.isValidSortingTarget(e))) ||
                      (e.stopPropagation(),
                      e.preventDefault(),
                      i.lift.includes(n) && !t.manager.active
                        ? t.keyLift(e)
                        : i.drop.includes(n) && t.manager.active
                        ? t.keyDrop(e)
                        : i.cancel.includes(n)
                        ? ((t.newIndex = t.manager.active.index), t.keyDrop(e))
                        : i.up.includes(n)
                        ? t.keyMove(-1)
                        : i.down.includes(n) && t.keyMove(1))
                  }),
                  D(F(F(t)), 'keyLift', function(e) {
                    var n = e.target,
                      r = te(n, function(e) {
                        return null != e.sortableInfo
                      }).sortableInfo,
                      o = r.index,
                      a = r.collection
                    ;(t.initialFocusedNode = n),
                      (t.manager.isKeySorting = !0),
                      (t.manager.active = { index: o, collection: a }),
                      t.handlePress(e)
                  }),
                  D(F(F(t)), 'keyMove', function(e) {
                    var n = t.manager.getOrderedRefs(),
                      r = n[n.length - 1].node.sortableInfo.index,
                      o = t.newIndex + e,
                      a = t.newIndex
                    if (!(o < 0 || o > r)) {
                      ;(t.prevIndex = a), (t.newIndex = o)
                      var i = ue(t.newIndex, t.prevIndex, t.index),
                        l = n.find(function(e) {
                          return e.node.sortableInfo.index === i
                        }),
                        s = l.node,
                        c = t.containerScrollDelta,
                        u = l.boundingClientRect || ie(s, c),
                        f = l.translate || { x: 0, y: 0 },
                        d = u.top + f.y - c.top,
                        h = u.left + f.x - c.left,
                        p = a < o,
                        g = p && t.axis.x ? s.offsetWidth - t.width : 0,
                        y = p && t.axis.y ? s.offsetHeight - t.height : 0
                      t.handleSortMove({ pageX: h + g, pageY: d + y, ignoreTransition: 0 === e })
                    }
                  }),
                  D(F(F(t)), 'keyDrop', function(e) {
                    t.handleSortEnd(e), t.initialFocusedNode && t.initialFocusedNode.focus()
                  }),
                  D(F(F(t)), 'handleKeyEnd', function(e) {
                    t.manager.active && t.keyDrop(e)
                  }),
                  D(F(F(t)), 'isValidSortingTarget', function(e) {
                    var n = t.props.useDragHandle,
                      r = e.target,
                      o = te(r, function(e) {
                        return null != e.sortableInfo
                      })
                    return o && o.sortableInfo && !o.sortableInfo.disabled && (n ? _e(r) : r.sortableInfo)
                  }),
                  Ae(e),
                  (t.manager = new z()),
                  (t.events = { end: t.handleEnd, move: t.handleMove, start: t.handleStart }),
                  t
                )
              }
              return (
                K(n, t),
                L(n, [
                  {
                    key: 'getChildContext',
                    value: function() {
                      return { manager: this.manager }
                    },
                  },
                  {
                    key: 'componentDidMount',
                    value: function() {
                      var e = this,
                        t = this.props.useWindowAsScrollContainer,
                        n = this.getContainer()
                      Promise.resolve(n).then(function(n) {
                        ;(e.container = n), (e.document = e.container.ownerDocument || document)
                        var r = e.props.contentWindow || e.document.defaultView || window
                        ;(e.contentWindow = 'function' == typeof r ? r() : r),
                          (e.scrollContainer = t
                            ? e.document.scrollingElement || e.document.documentElement
                            : he(e.container) || e.container),
                          (e.autoScroller = new Ne(e.scrollContainer, e.onAutoScroll)),
                          Object.keys(e.events).forEach(function(t) {
                            return X[t].forEach(function(n) {
                              return e.container.addEventListener(n, e.events[t], !1)
                            })
                          }),
                          e.container.addEventListener('keydown', e.handleKeyDown)
                      })
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value: function() {
                      var e = this
                      this.helper && this.helper.parentNode && this.helper.parentNode.removeChild(this.helper),
                        this.container &&
                          (Object.keys(this.events).forEach(function(t) {
                            return X[t].forEach(function(n) {
                              return e.container.removeEventListener(n, e.events[t])
                            })
                          }),
                          this.container.removeEventListener('keydown', this.handleKeyDown))
                    },
                  },
                  {
                    key: 'updateHelperPosition',
                    value: function(e) {
                      var t = this.props,
                        n = t.lockAxis,
                        r = t.lockOffset,
                        o = t.lockToContainerEdges,
                        a = t.transitionDuration,
                        i = t.keyboardSortingTransitionDuration,
                        l = void 0 === i ? a : i,
                        s = this.manager.isKeySorting,
                        c = e.ignoreTransition,
                        u = le(e),
                        f = { x: u.x - this.initialOffset.x, y: u.y - this.initialOffset.y }
                      if (
                        ((f.y -= window.pageYOffset - this.initialWindowScroll.top),
                        (f.x -= window.pageXOffset - this.initialWindowScroll.left),
                        (this.translate = f),
                        o)
                      ) {
                        var d = N(de({ height: this.height, lockOffset: r, width: this.width }), 2),
                          h = d[0],
                          p = d[1],
                          g = { x: this.width / 2 - h.x, y: this.height / 2 - h.y },
                          y = { x: this.width / 2 - p.x, y: this.height / 2 - p.y }
                        ;(f.x = ne(this.minTranslate.x + g.x, this.maxTranslate.x - y.x, f.x)),
                          (f.y = ne(this.minTranslate.y + g.y, this.maxTranslate.y - y.y, f.y))
                      }
                      'x' === n ? (f.y = 0) : 'y' === n && (f.x = 0),
                        s && l && !c && ee(this.helper, l),
                        Q(this.helper, f)
                    },
                  },
                  {
                    key: 'animateNodes',
                    value: function() {
                      var e = this.props,
                        t = e.transitionDuration,
                        n = e.hideSortableGhost,
                        r = e.onSortOver,
                        o = this.containerScrollDelta,
                        a = this.windowScrollDelta,
                        i = this.manager.getOrderedRefs(),
                        l = this.offsetEdge.left + this.translate.x + o.left,
                        s = this.offsetEdge.top + this.translate.y + o.top,
                        c = this.manager.isKeySorting,
                        u = this.newIndex
                      this.newIndex = null
                      for (var f = 0, d = i.length; f < d; f++) {
                        var h = i[f].node,
                          p = h.sortableInfo.index,
                          g = h.offsetWidth,
                          y = h.offsetHeight,
                          v = {
                            height: this.height > y ? y / 2 : this.height / 2,
                            width: this.width > g ? g / 2 : this.width / 2,
                          },
                          b = c && p > this.index && p <= u,
                          m = c && p < this.index && p >= u,
                          w = { x: 0, y: 0 },
                          x = i[f].edgeOffset
                        x ||
                          ((x = ce(h, this.container)),
                          (i[f].edgeOffset = x),
                          c && (i[f].boundingClientRect = ie(h, o)))
                        var O = f < i.length - 1 && i[f + 1],
                          S = f > 0 && i[f - 1]
                        O &&
                          !O.edgeOffset &&
                          ((O.edgeOffset = ce(O.node, this.container)), c && (O.boundingClientRect = ie(O.node, o))),
                          p !== this.index
                            ? (t && ee(h, t),
                              this.axis.x
                                ? this.axis.y
                                  ? m ||
                                    (p < this.index &&
                                      ((l + a.left - v.width <= x.left && s + a.top <= x.top + v.height) ||
                                        s + a.top + v.height <= x.top))
                                    ? ((w.x = this.width + this.marginOffset.x),
                                      x.left + w.x > this.containerBoundingRect.width - v.width &&
                                        O &&
                                        ((w.x = O.edgeOffset.left - x.left), (w.y = O.edgeOffset.top - x.top)),
                                      null === this.newIndex && (this.newIndex = p))
                                    : (b ||
                                        (p > this.index &&
                                          ((l + a.left + v.width >= x.left && s + a.top + v.height >= x.top) ||
                                            s + a.top + v.height >= x.top + y))) &&
                                      ((w.x = -(this.width + this.marginOffset.x)),
                                      x.left + w.x < this.containerBoundingRect.left + v.width &&
                                        S &&
                                        ((w.x = S.edgeOffset.left - x.left), (w.y = S.edgeOffset.top - x.top)),
                                      (this.newIndex = p))
                                  : b || (p > this.index && l + a.left + v.width >= x.left)
                                  ? ((w.x = -(this.width + this.marginOffset.x)), (this.newIndex = p))
                                  : (m || (p < this.index && l + a.left <= x.left + v.width)) &&
                                    ((w.x = this.width + this.marginOffset.x),
                                    null == this.newIndex && (this.newIndex = p))
                                : this.axis.y &&
                                  (b || (p > this.index && s + a.top + v.height >= x.top)
                                    ? ((w.y = -(this.height + this.marginOffset.y)), (this.newIndex = p))
                                    : (m || (p < this.index && s + a.top <= x.top + v.height)) &&
                                      ((w.y = this.height + this.marginOffset.y),
                                      null == this.newIndex && (this.newIndex = p))),
                              Q(h, w),
                              (i[f].translate = w))
                            : n && ((this.sortableGhost = h), Z(h, { opacity: 0, visibility: 'hidden' }))
                      }
                      null == this.newIndex && (this.newIndex = this.index), c && (this.newIndex = u)
                      var T = c ? this.prevIndex : u
                      r &&
                        this.newIndex !== T &&
                        r({
                          collection: this.manager.active.collection,
                          index: this.index,
                          newIndex: this.newIndex,
                          oldIndex: T,
                          isKeySorting: c,
                          nodes: i,
                          helper: this.helper,
                        })
                    },
                  },
                  {
                    key: 'getWrappedInstance',
                    value: function() {
                      return (
                        q()(
                          r.withRef,
                          'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call'
                        ),
                        this.refs.wrappedInstance
                      )
                    },
                  },
                  {
                    key: 'getContainer',
                    value: function() {
                      var e = this.props.getContainer
                      return 'function' != typeof e
                        ? Object(V.findDOMNode)(this)
                        : e(r.withRef ? this.getWrappedInstance() : void 0)
                    },
                  },
                  {
                    key: 'render',
                    value: function() {
                      var t = r.withRef ? 'wrappedInstance' : null
                      return Object(s.createElement)(e, E({ ref: t }, $(this.props, Re)))
                    },
                  },
                  {
                    key: 'helperContainer',
                    get: function() {
                      var e = this.props.helperContainer
                      return 'function' == typeof e ? e() : this.props.helperContainer || this.document.body
                    },
                  },
                  {
                    key: 'containerScrollDelta',
                    get: function() {
                      return this.props.useWindowAsScrollContainer
                        ? { left: 0, top: 0 }
                        : {
                            left: this.scrollContainer.scrollLeft - this.initialScroll.left,
                            top: this.scrollContainer.scrollTop - this.initialScroll.top,
                          }
                    },
                  },
                  {
                    key: 'windowScrollDelta',
                    get: function() {
                      return {
                        left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
                        top: this.contentWindow.pageYOffset - this.initialWindowScroll.top,
                      }
                    },
                  },
                ]),
                n
              )
            })(s.Component)),
            D(t, 'displayName', ae('sortableList', e)),
            D(t, 'defaultProps', De),
            D(t, 'propTypes', je),
            D(t, 'childContextTypes', { manager: l.a.object.isRequired }),
            n
          )
        })(function(e) {
          var t = e.tags,
            n = e.onDelete,
            r = e.readOnly,
            o = e.disabled,
            a = e.labelRemove,
            i = e.lastItem,
            l = e.tagPrefix,
            s = e.tagSuffix,
            u = e.tagClassName
          return c.a.createElement(
            'ul',
            { className: 'tag-list', style: { display: 'flex', flexDirection: 'row', flexWrap: 'wrap' } },
            t.map(function(e, t) {
              return c.a.createElement(
                Ve,
                Ke(
                  { key: t, index: t, onDelete: n, readOnly: r, disabled: o, labelRemove: a, tagDisabled: e.disabled },
                  e,
                  { tagPrefix: l, tagSuffix: s, tagClassName: u }
                )
              )
            }),
            c.a.createElement(
              'li',
              { className: 'tag-item' },
              i,
              c.a.createElement(
                'span',
                { className: 'dropdown-icon', style: { fontSize: '20px', color: '#bfbfbf' } },
                '⌄'
              )
            )
          )
        }),
        qe = function(e) {
          var t = e.tags,
            n = (e.value, e.onTagRemove),
            r = e.onReorder,
            o = e.texts,
            a = void 0 === o ? {} : o,
            i = e.disabled,
            l = e.readOnly,
            u = e.children,
            f = e.tagPrefix,
            d = e.tagSuffix,
            h = e.tagClassName,
            p = Object(s.useState)(t),
            g = He(p, 2),
            y = g[0],
            v = g[1]
          Object(s.useEffect)(
            function() {
              v(t)
            },
            [t]
          )
          var b = u || c.a.createElement('span', { className: 'placeholder' }, a.placeholder || 'Choose...')
          return c.a.createElement(Ye, {
            axis: 'xy',
            lastItem: b,
            onSortEnd: function(e) {
              var t = e.oldIndex,
                n = e.newIndex,
                o = We()(y, t, n)
              v(o), r(o)
            },
            tags: y,
            onDelete: n,
            readOnly: l,
            disabled: i,
            labelRemove: a.labelRemove,
            tagPrefix: f,
            tagSuffix: d,
            tagClassName: h,
          })
        },
        Ue =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        ze = (function() {
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
      function Ge(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function $e(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var Xe = (function(e) {
        function t() {
          var e, n, r
          Ge(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = $e(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.getAriaAttributes = function() {
              var e = r.props,
                t = e.mode,
                n = e.texts,
                o = void 0 === n ? {} : n,
                a = e.showDropdown,
                i = e.clientId,
                l = e.tags,
                s = i + '_trigger',
                c = [],
                u = g(o.label)
              return (
                l &&
                  l.length &&
                  (u['aria-label'] && c.push(s),
                  l.forEach(function(e) {
                    c.push(T(e._id))
                  }),
                  (u = g(o.label, c.join(' ')))),
                Ue(
                  {
                    id: s,
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
            $e(r, n)
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
          ze(t, [
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
                return c.a.createElement(
                  'a',
                  Ue(
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
      })(s.PureComponent)
      Xe.propTypes = {
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
      var Je = Xe,
        Ze = function(e, t) {
          return (Ze =
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
***************************************************************************** */ var Qe = function() {
        return (Qe =
          Object.assign ||
          function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            return e
          }).apply(this, arguments)
      }
      var et = 'Pixel',
        tt = 'Percent',
        nt = { unit: tt, value: 0.8 }
      function rt(e) {
        return 'number' == typeof e
          ? { unit: tt, value: 100 * e }
          : 'string' == typeof e
          ? e.match(/^(\d*(\.\d+)?)px$/)
            ? { unit: et, value: parseFloat(e) }
            : e.match(/^(\d*(\.\d+)?)%$/)
            ? { unit: tt, value: parseFloat(e) }
            : (console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'), nt)
          : (console.warn('scrollThreshold should be string or number'), nt)
      }
      var ot = (function(e) {
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
                function s() {
                  var s = this,
                    c = Date.now() - i,
                    u = arguments
                  function f() {
                    ;(i = Date.now()), n.apply(s, u)
                  }
                  function d() {
                    o = void 0
                  }
                  a ||
                    (r && !o && f(),
                    l(),
                    void 0 === r && c > e ? f() : !0 !== t && (o = setTimeout(r ? d : f, void 0 === r ? e - c : e)))
                }
                return (
                  'boolean' != typeof t && ((r = n), (n = t), (t = void 0)),
                  (s.cancel = function() {
                    l(), (a = !0)
                  }),
                  s
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
              Ze(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()))
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
              return e.dataLength !== t.prevDataLength ? Qe(Qe({}, t), { prevDataLength: e.dataLength }) : null
            }),
            (t.prototype.isElementAtTop = function(e, t) {
              void 0 === t && (t = 0.8)
              var n =
                  e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                r = rt(t)
              return r.unit === et
                ? e.scrollTop <= r.value + n - e.scrollHeight + 1
                : e.scrollTop <= r.value / 100 + n - e.scrollHeight + 1
            }),
            (t.prototype.isElementAtBottom = function(e, t) {
              void 0 === t && (t = 0.8)
              var n =
                  e === document.body || e === document.documentElement ? window.screen.availHeight : e.clientHeight,
                r = rt(t)
              return r.unit === et
                ? e.scrollTop + n >= e.scrollHeight - r.value
                : e.scrollTop + n >= (r.value / 100) * e.scrollHeight
            }),
            (t.prototype.render = function() {
              var e = this,
                t = Qe(
                  { height: this.props.height || 'auto', overflow: 'auto', WebkitOverflowScrolling: 'touch' },
                  this.props.style
                ),
                n =
                  this.props.hasChildren ||
                  !!(this.props.children && this.props.children instanceof Array && this.props.children.length),
                r = this.props.pullDownToRefresh && this.props.height ? { overflow: 'auto' } : {}
              return c.a.createElement(
                'div',
                { style: r, className: 'infinite-scroll-component__outerdiv' },
                c.a.createElement(
                  'div',
                  {
                    className: 'infinite-scroll-component ' + (this.props.className || ''),
                    ref: function(t) {
                      return (e._infScroll = t)
                    },
                    style: t,
                  },
                  this.props.pullDownToRefresh &&
                    c.a.createElement(
                      'div',
                      {
                        style: { position: 'relative' },
                        ref: function(t) {
                          return (e._pullDown = t)
                        },
                      },
                      c.a.createElement(
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
        })(s.Component),
        at = (function() {
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
      function it(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function lt(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var st = (function(e) {
        function t() {
          var e, n, r
          it(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = lt(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.handleClick = function() {
              var e = r.props,
                t = e.onAction,
                n = e.actionData
              t && t(n.nodeId, n.action)
            }),
            lt(r, n)
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
          at(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.title,
                  n = e.className,
                  r = e.text,
                  o = e.readOnly
                return c.a.createElement('i', { title: t, className: n, onClick: o ? void 0 : this.handleClick }, r)
              },
            },
          ]),
          t
        )
      })(s.PureComponent)
      ;(st.propTypes = {
        title: l.a.string,
        text: l.a.string,
        className: l.a.string,
        actionData: l.a.object,
        onAction: l.a.func,
        readOnly: l.a.bool,
      }),
        (st.defaultProps = { onAction: function() {} })
      var ct = st,
        ut =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        ft = (function() {
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
      function dt(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function ht(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var pt = (function(e) {
        function t() {
          return dt(this, t), ht(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
          ft(t, [
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
                return d(t)
                  ? null
                  : t.map(function(e, t) {
                      var o = e.id || 'action-' + t
                      return c.a.createElement(
                        ct,
                        ut({ key: o }, r, e, { actionData: { action: ut({}, e, { id: o }), nodeId: n } })
                      )
                    })
              },
            },
          ]),
          t
        )
      })(s.PureComponent)
      pt.propTypes = { id: l.a.string.isRequired, actions: l.a.array }
      var gt = pt,
        yt =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        vt = (function() {
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
      function bt(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function mt(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var wt = function(e) {
          var t = e.checked,
            n = e.indeterminate
          return function(e) {
            e && ((e.checked = t), (e.indeterminate = n))
          }
        },
        xt = (function(e) {
          function t() {
            return bt(this, t), mt(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
            vt(t, [
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
                    s = a || i
                  return c.a.createElement(
                    'input',
                    yt({ type: 'checkbox', ref: wt({ checked: t, indeterminate: r }), onChange: o, disabled: s }, l)
                  )
                },
              },
            ]),
            t
          )
        })(s.PureComponent)
      xt.propTypes = {
        checked: l.a.bool,
        indeterminate: l.a.bool,
        onChange: l.a.func,
        disabled: l.a.bool,
        readOnly: l.a.bool,
      }
      var Ot = xt,
        St =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        Tt = (function() {
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
      function kt(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function Ct(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var Et = function(e) {
          var t = e.checked
          return function(e) {
            e && (e.checked = t)
          }
        },
        Pt = (function(e) {
          function t() {
            return kt(this, t), Ct(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
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
            Tt(t, [
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
                  return c.a.createElement(
                    'input',
                    St({ type: 'radio', name: t, ref: Et({ checked: n }), onChange: r, disabled: l }, i)
                  )
                },
              },
            ]),
            t
          )
        })(s.PureComponent)
      Pt.propTypes = {
        name: l.a.string.isRequired,
        checked: l.a.bool,
        onChange: l.a.func,
        disabled: l.a.bool,
        readOnly: l.a.bool,
      }
      var _t = Pt,
        Nt = n(5),
        jt = n.n(Nt),
        It =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        Dt = (function() {
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
      function Rt(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function At(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var Mt = (function(e) {
        function t() {
          var e, n, r
          Rt(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = At(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.handleCheckboxChange = function(e) {
              var t = r.props,
                n = t.mode,
                o = t.id,
                a = t.onCheckboxChange
              'simpleSelect' === n || 'radioSelect' === n ? a(o, !0) : a(o, e.target.checked)
              e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
            }),
            At(r, n)
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
          Dt(t, [
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
                  s = e.searchTerm,
                  u = e.labelPrefix,
                  f = e.labelSuffix,
                  d = this.props,
                  h = d.value,
                  p = d.disabled,
                  g = d.showPartiallySelected,
                  y = d.readOnly,
                  v = d.clientId
                'simpleSelect' === t && !y && !p && this.handleCheckboxChange
                var b = { id: r, value: h, checked: a, disabled: p, readOnly: y, tabIndex: -1 },
                  m = ['checkbox-item', 'simpleSelect' === t && 'simple-select'].filter(Boolean).join(' ')
                return c.a.createElement(
                  'label',
                  { title: l, htmlFor: r, className: 'tree-node-label' },
                  'radioSelect' === t
                    ? c.a.createElement(
                        _t,
                        It({ name: v, className: 'radio-item', onChange: this.handleCheckboxChange }, b)
                      )
                    : i &&
                        c.a.createElement(
                          Ot,
                          It({ name: r, className: m, indeterminate: g && o, onChange: this.handleCheckboxChange }, b)
                        ),
                  u ? u(this.props) : null,
                  c.a.createElement(jt.a, { searchWords: [s], textToHighlight: n }),
                  f ? f(this.props) : null
                )
              },
            },
          ]),
          t
        )
      })(s.PureComponent)
      Mt.propTypes = {
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
      var Lt = Mt,
        Ft = (function() {
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
      function Bt(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function Wt(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var Ht = (function(e) {
        function t() {
          var e, n, r
          Bt(this, t)
          for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
          return (
            (n = r = Wt(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (r.onToggle = function(e) {
              e.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), r.props.onNodeToggle(r.props.id)
            }),
            (r.onKeyDown = function(e) {
              ;('Enter' !== e.key && 32 !== e.keyCode) || (r.props.onNodeToggle(r.props.id), e.preventDefault())
            }),
            Wt(r, n)
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
          Ft(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.expanded,
                  n = e.isLeaf,
                  r = ['toggle', t && 'expanded', !t && 'collapsed'].filter(Boolean).join(' ')
                return n
                  ? c.a.createElement('i', {
                      role: 'button',
                      tabIndex: -1,
                      className: r,
                      style: { visibility: 'hidden' },
                      'aria-hidden': !0,
                    })
                  : c.a.createElement('i', {
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
      })(s.PureComponent)
      Ht.propTypes = { expanded: l.a.bool, isLeaf: l.a.bool, onNodeToggle: l.a.func, id: l.a.string }
      var Kt = Ht,
        Vt = (n(11),
        Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }),
        Yt = (function() {
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
      function qt(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      function Ut(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
      }
      var zt = function(e) {
          return d(e)
        },
        Gt = (function(e) {
          function t() {
            var e, n, r
            qt(this, t)
            for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i]
            return (
              (n = r = Ut(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
              (r.getAriaAttributes = function() {
                var e = r.props,
                  t = e._children,
                  n = e._depth,
                  o = e.checked,
                  a = e.disabled,
                  i = e.expanded,
                  l = e.readOnly,
                  s = e.mode,
                  c = e.partial,
                  u = {}
                return (
                  (u.role = 'simpleSelect' === s ? 'option' : 'treeitem'),
                  (u['aria-disabled'] = a || l),
                  (u['aria-selected'] = o),
                  'simpleSelect' !== s &&
                    ((u['aria-checked'] = c ? 'mixed' : o),
                    (u['aria-level'] = (n || 0) + 1),
                    (u['aria-expanded'] = t && (i ? 'true' : 'false'))),
                  u
                )
              }),
              Ut(r, n)
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
            Yt(t, [
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
                    s = e.title,
                    u = e.label,
                    d = e.labelPrefix,
                    h = e.labelSuffix,
                    p = e.partial,
                    g = e.checked,
                    y = e.value,
                    v = e.disabled,
                    b = e.actions,
                    m = e.onAction,
                    w = e.searchModeOn,
                    x = e.onNodeToggle,
                    O = e.onCheckboxChange,
                    S = e.showPartiallySelected,
                    T = e.readOnly,
                    k = e.clientId,
                    C = e.description,
                    E = e.searchTerm,
                    P = (function(e) {
                      var t = e.keepTreeOnSearch,
                        n = e.keepChildrenOnSearch,
                        r = e._children,
                        o = e.matchInChildren,
                        a = e.matchInParent,
                        i = e.disabled,
                        l = e.partial,
                        s = e.hide,
                        c = e.className,
                        u = e.showPartiallySelected,
                        f = e.readOnly,
                        d = e.checked,
                        h = e._focused
                      return [
                        'node',
                        zt(r) && 'leaf',
                        !zt(r) && 'tree',
                        i && 'disabled',
                        s && 'hide',
                        t && o && 'match-in-children',
                        t && n && a && 'match-in-parent',
                        u && l && 'partial',
                        f && 'readOnly',
                        d && 'checked',
                        h && 'focused',
                        c,
                      ]
                        .filter(Boolean)
                        .join(' ')
                    })(this.props),
                    _ = n || !w ? { paddingLeft: 5 * (i || 0) + 'px' } : {},
                    N = r + '_li'
                  return c.a.createElement(
                    'li',
                    Vt({ className: P, style: _, id: N }, f(a), this.getAriaAttributes(), {
                      onClick: function() {
                        return x(r)
                      },
                    }),
                    c.a.createElement(Kt, { isLeaf: zt(o), expanded: l, id: r, onNodeToggle: x }),
                    c.a.createElement(Lt, {
                      description: C,
                      title: s,
                      label: u,
                      labelPrefix: d,
                      labelSuffix: h,
                      id: r,
                      isLeaf: zt(o),
                      partial: p,
                      checked: g,
                      value: y,
                      disabled: v,
                      mode: t,
                      onCheckboxChange: O,
                      showPartiallySelected: S,
                      readOnly: T,
                      clientId: k,
                      searchTerm: E,
                    }),
                    c.a.createElement(gt, { actions: b, onAction: m, id: r, readOnly: T })
                  )
                },
              },
            ]),
            t
          )
        })(s.PureComponent)
      Gt.propTypes = {
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
      var $t = Gt,
        Xt =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          },
        Jt = (function() {
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
      var Zt = (function(e) {
        function t(e) {
          !(function(e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var n = (function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' != typeof t && 'function' != typeof t) ? e : t
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
          return (
            Qt.call(n),
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
          Jt(t, [
            {
              key: 'render',
              value: function() {
                var e = this.props.searchModeOn
                return c.a.createElement(
                  'ul',
                  Xt(
                    { className: 'root ' + (e ? 'searchModeOn' : ''), ref: this.setNodeRef },
                    this.getAriaAttributes()
                  ),
                  this.state.scrollableTarget &&
                    c.a.createElement(
                      ot,
                      {
                        dataLength: this.state.items.length,
                        next: this.loadMore,
                        hasMore: this.hasMore(),
                        loader: c.a.createElement('span', { className: 'searchLoader' }, 'Loading...'),
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
      })(s.Component)
      ;(Zt.propTypes = {
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
        (Zt.defaultProps = { pageSize: 100 })
      var Qt = function() {
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
                s = e.onAction,
                u = e.onChange,
                f = e.onCheckboxChange,
                d = e.onNodeToggle,
                h = e.activeDescendant,
                p = e.clientId,
                g = e.searchTerm,
                y = e.labelPrefix,
                v = e.labelSuffix,
                b = []
              return (
                t.forEach(function(e) {
                  ;(function(e, t, n) {
                    if (t || e.expanded) return !0
                    var r = e._parent && n.get(e._parent)
                    return !r || r.expanded
                  })(e, o, t) &&
                    b.push(
                      c.a.createElement(
                        $t,
                        Xt({ keepTreeOnSearch: n, keepChildrenOnSearch: r, key: e._id }, e, {
                          searchModeOn: o,
                          onChange: u,
                          onCheckboxChange: f,
                          onNodeToggle: d,
                          onAction: s,
                          mode: a,
                          showPartiallySelected: i,
                          readOnly: l,
                          clientId: p,
                          activeDescendant: h,
                          searchTerm: g,
                          labelPrefix: y,
                          labelSuffix: v,
                        })
                      )
                    )
                }),
                b
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
        en = Zt,
        tn = n(6),
        nn = n.n(tn),
        rn = function(e) {
          return e
        },
        on = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'children',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rn
          return (
            nn()(e[t], function(e) {
              return n(e).checked
            }) ||
            e[t].some(function(e) {
              return n(e).partial
            })
          )
        }
      var an = function(e) {
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
              s = t.showPartialState,
              c = t.hierarchical,
              u = t.rootPrefixId,
              f = t._rv,
              h = void 0 === f ? { list: new Map(), defaultValues: [], singleSelectedNode: null } : f,
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
                  (c && !l) ||
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
                      showPartialState: s,
                      hierarchical: c,
                      _rv: h,
                    }),
                    s &&
                      !t.checked &&
                      ((t.partial = on(t)),
                      p ||
                        d(t.children) ||
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
        ln = function e(t, n, r) {
          ;(n[t._id] = !0),
            d(t._children) ||
              t._children.forEach(function(t) {
                return e(r(t), n, r)
              })
        },
        sn = function(e, t) {
          var n = [],
            r = {}
          return (
            e.forEach(function(e, o) {
              r[o] || (t(e, o, r) && n.push(e), (r[o] = !0))
            }),
            n
          )
        },
        cn = {
          getNodesMatching: sn,
          getVisibleNodes: function(e, t, n) {
            return sn(e, function(e, r, o) {
              return n && e._children && e._children.length && !0 !== e.expanded && ln(e, o, t), !e.hide
            })
          },
          markSubTreeVisited: ln,
        },
        un = function(e, t) {
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
        fn = 'ArrowUp',
        dn = 'ArrowDown',
        hn = 'ArrowLeft',
        pn = 'ArrowRight',
        gn = 'Enter',
        yn = 'Home',
        vn = 'PageUp',
        bn = 'End',
        mn = 'PageDown',
        wn = {
          None: 'None',
          FocusPrevious: 'FocusPrevious',
          FocusNext: 'FocusNext',
          FocusParent: 'FocusParent',
          FocusFirst: 'FocusFirst',
          FocusLast: 'FocusLast',
          ToggleExpanded: 'ToggleExpanded',
          ToggleChecked: 'ToggleChecked',
        },
        xn = new Set([wn.FocusPrevious, wn.FocusNext, wn.FocusParent, wn.FocusFirst, wn.FocusLast]),
        On = [fn, dn, yn, vn, bn, mn],
        Sn = On.concat([hn, pn, gn]),
        Tn = function(e, t, n, r) {
          return t.indexOf(e) > -1 || (!n && e === r)
        },
        kn = function(e, t, n) {
          if (!e || 0 === e.length) return t
          var r = t
          ;(function(e) {
            return Tn(e, [wn.FocusFirst, wn.FocusLast], !0)
          })(n)
            ? (r = un(e, 1)[0])
            : [wn.FocusPrevious, wn.FocusNext].indexOf(n) > -1 &&
              (r = (function(e, t) {
                var n = e.indexOf(t) + 1
                return n % e.length == 0 ? e[0] : e[n]
              })(e, t))
          return r
        },
        Cn = {
          isValidKey: function(e, t) {
            return (t ? Sn : On).indexOf(e) > -1
          },
          getAction: function(e, t) {
            return t === hn
              ? (function(e, t) {
                  return e && t === hn
                    ? !0 === e.expanded
                      ? wn.ToggleExpanded
                      : e._parent
                      ? wn.FocusParent
                      : wn.None
                    : wn.None
                })(e, t)
              : t === pn
              ? (function(e, t) {
                  return e && e._children && t === pn ? (!0 !== e.expanded ? wn.ToggleExpanded : wn.FocusNext) : wn.None
                })(e, t)
              : (function(e, t) {
                  return Tn(e, [yn, vn], t, dn)
                })(t, e)
              ? wn.FocusFirst
              : (function(e, t) {
                  return Tn(e, [bn, mn], t, fn)
                })(t, e)
              ? wn.FocusLast
              : (function(e, t) {
                  if (!e) return wn.None
                  switch (t) {
                    case fn:
                      return wn.FocusPrevious
                    case dn:
                      return wn.FocusNext
                    case gn:
                      return wn.ToggleChecked
                    default:
                      return wn.None
                  }
                })(e, t)
          },
          getNextFocus: function(e, t, n, r, o) {
            if (n === wn.FocusParent)
              return (function(e, t) {
                return e && e._parent ? t(e._parent) : e
              })(t, r)
            if (!xn.has(n)) return t
            var a = cn.getVisibleNodes(e, r, o)
            return (
              (function(e) {
                return Tn(e, [wn.FocusPrevious, wn.FocusLast], !0)
              })(n) && (a = a.reverse()),
              kn(a, t, n)
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
              i = document.getElementById(T(a))
            return (i && i.firstElementChild) || r
          },
          handleFocusNavigationkey: function(e, t, n, r, o) {
            var a = Cn.getNextFocus(e, n, t, r, o)
            return Cn.adjustFocusedProps(n, a), a ? a._id : n && n._id
          },
          handleToggleNavigationkey: function(e, t, n, r, o) {
            return (
              e !== wn.ToggleChecked || n || t.readOnly || t.disabled
                ? e === wn.ToggleExpanded && o(t._id)
                : r(t._id, !0 !== t.checked),
              t && t._id
            )
          },
          adjustFocusedProps: function(e, t) {
            e && t && e._id !== t._id && (e._focused = !1), t && (t._focused = !0)
          },
        },
        En = Cn,
        Pn = (function() {
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
      var _n = (function() {
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
            var l = an({
                tree: JSON.parse(JSON.stringify(n)),
                simple: this.simpleSelect,
                radio: this.radioSelect,
                showPartialState: o,
                hierarchical: this.hierarchical,
                rootPrefixId: a,
              }),
              s = l.list,
              c = l.defaultValues,
              u = l.singleSelectedNode
            ;(this.tree = s),
              (this.defaultValues = c),
              (this.showPartialState = !this.hierarchical && o),
              (this.searchMaps = new Map()),
              (this.simpleSelect || this.radioSelect) && u && (this.currentChecked = u._id)
          }
          return (
            Pn(e, [
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
                    ;(n.checked = !1), (n.partial = on(n, '_children', this.getNodeById.bind(this))), (t = n._parent)
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
                      (r.partial = on(r, '_children', this.getNodeById.bind(this))),
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
                    d(r._children) ||
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
                    d(e._children) ||
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
                    s = e && this.getNodeById(e),
                    c = En.getAction(s, n)
                  return xn.has(c)
                    ? En.handleFocusNavigationkey(
                        t,
                        c,
                        s,
                        function(e) {
                          return l.getNodeById(e)
                        },
                        o
                      )
                    : s && t.has(s._id)
                    ? En.handleToggleNavigationkey(c, s, r, a, i)
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
                    : cn.getNodesMatching(this.tree, function(t, n, r) {
                        return (
                          t.checked &&
                            !e.hierarchical &&
                            cn.markSubTreeVisited(t, r, function(t) {
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
        Nn = (n(12),
        Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }),
        jn = (function() {
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
      var In = (function(e) {
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
                    var t = Nn({}, e)
                    return (
                      (t = o.includes(e.value) ? Nn({}, t, { isDefaultValue: !0 }) : Nn({}, t, { isDefaultValue: !1 }))
                        .children &&
                        (t.children = t.children.map(function(e) {
                          return o.includes(e.value)
                            ? Nn({}, e, { isDefaultValue: !0 })
                            : Nn({}, e, { isDefaultValue: !1 })
                        })),
                      t
                    )
                  })
                  return Nn({}, e, { children: t })
                })),
                (n.treeManager = new _n({
                  data: t,
                  mode: r,
                  showPartiallySelected: i,
                  rootPrefixId: n.clientId,
                  searchPredicate: l,
                }))
              for (
                var s = n.treeManager.getTreeAndTags(),
                  c = [],
                  u = function(e) {
                    var t = s.tags.find(function(t) {
                      return t.value === o[e]
                    })
                    c.push(t)
                  },
                  f = 0;
                f < s.tags.length;
                f++
              )
                u(f)
              ;(s.tags = c),
                c.length > 0 && n.props.onChange({}, c),
                n.setState(function(e) {
                  var t = e.currentFocus && n.treeManager.getNodeById(e.currentFocus)
                  return (
                    t && (t._focused = !0), Nn({ showDropdown: /initial|always/.test(a) || !0 === e.showDropdown }, s)
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
                  t ? { showDropdown: t } : Nn({ showDropdown: t }, n.resetSearchState())
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
                t && En.getNextFocusAfterTagDelete(e, r, o, n.searchInput).focus()
              })
            }),
            (n.onTagReorder = function(e) {
              n.setState(Nn({}, n.state, { tags: e })), n.props.onChange({}, e)
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
                s = a.clearSearchOnChange,
                c = n.state,
                u = c.currentFocus,
                f = c.searchModeOn
              n.treeManager.setNodeCheckedState(e, t)
              var d = n.state.tags.map(function(e) {
                  return e.value
                }),
                h = n.treeManager.tags.filter(function(e) {
                  if (!d.includes(e.value)) return e
                }),
                p = n.treeManager.tags.map(function(e) {
                  return e.value
                }),
                g = n.state.tags.filter(function(e) {
                  if (!p.includes(e.value)) return e
                }),
                y = n.state.tags
              ;(o = y).push.apply(
                o,
                (function(e) {
                  if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
                    return n
                  }
                  return Array.from(e)
                })(h)
              ),
                (y = g[0]
                  ? y.filter(function(e) {
                      if (g[0].value !== e.value) return e
                    })
                  : y)
              var v = ['simpleSelect', 'radioSelect'].indexOf(i) > -1,
                b = !(v && !l) && n.state.showDropdown,
                m = u && n.treeManager.getNodeById(u),
                w = n.treeManager.getNodeById(e),
                x = {
                  tree: f ? n.treeManager.matchTree : n.treeManager.tree,
                  tags: y,
                  showDropdown: b,
                  currentFocus: e,
                }
              ;((v && !b) || s) && Object.assign(x, n.resetSearchState()),
                v && !b && document.removeEventListener('click', n.handleOutsideClick, !1),
                En.adjustFocusedProps(m, w),
                n.setState(x, function() {
                  r && r(y)
                }),
                n.props.onChange(w, y)
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
                s = a.searchModeOn,
                c = a.currentFocus,
                u = n.treeManager,
                f = s ? u.matchTree : u.tree
              if (i || (!En.isValidKey(e.key, !1) && !/^\w$/i.test(e.key)))
                if (i && En.isValidKey(e.key, !0)) {
                  var d = u.handleNavigationKey(c, f, e.key, r, !s, n.onCheckboxChange, n.onNodeToggle)
                  d !== c &&
                    n.setState({ currentFocus: d }, function() {
                      var e = document && document.getElementById(d + '_li')
                      e && e.scrollIntoView()
                    })
                } else {
                  if (i && ['Escape', 'Tab'].indexOf(e.key) > -1)
                    return void ('simpleSelect' === o && f.has(c)
                      ? n.onCheckboxChange(c, !0)
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
              return 'radioSelect' !== t ? {} : Nn({ role: 'radiogroup' }, g(r.label))
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
          jn(t, [
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
                  s = t.labelPrefix,
                  u = t.labelSuffix,
                  f = t.tagPrefix,
                  d = t.tagSuffix,
                  h = t.tagClassName,
                  p = this.state,
                  g = p.showDropdown,
                  y = p.currentFocus,
                  v = p.tags,
                  b = (p.vtags,
                  {
                    disabled: n,
                    readOnly: r,
                    activeDescendant: y ? y + '_li' : void 0,
                    texts: a,
                    mode: o,
                    clientId: this.clientId,
                    labelPrefix: s,
                    labelSuffix: u,
                    tagPrefix: f,
                    tagSuffix: d,
                    tagClassName: h,
                  }),
                  w = c.a.createElement(
                    m,
                    Nn(
                      {
                        inputRef: function(t) {
                          e.searchInput = t
                        },
                        onInputChange: this.onInputChange,
                        onFocus: this.onInputFocus,
                        onBlur: this.onInputBlur,
                        onKeyDown: this.onKeyboardKeyDown,
                      },
                      b,
                      { inlineSearchInput: i }
                    )
                  )
                return c.a.createElement(
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
                  c.a.createElement(
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
                    c.a.createElement(
                      Je,
                      Nn({ onTrigger: this.onTrigger, showDropdown: g }, b, { tags: v, tabIndex: l }),
                      c.a.createElement(
                        qe,
                        Nn({ tags: v, onReorder: this.onTagReorder, onTagRemove: this.onTagRemove }, b),
                        !i && w
                      )
                    ),
                    g &&
                      c.a.createElement(
                        'div',
                        Nn({ className: 'dropdown-content' }, this.getAriaAttributes()),
                        i && w,
                        this.state.allNodesHidden
                          ? c.a.createElement('span', { className: 'no-matches' }, a.noMatches || 'No matches found')
                          : c.a.createElement(
                              en,
                              Nn(
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
                                b,
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
      })(s.Component)
      ;(In.propTypes = {
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
        (In.defaultProps = {
          onAction: function() {},
          onFocus: function() {},
          onBlur: function() {},
          onChange: function() {},
          texts: {},
          showDropdown: 'default',
          inlineSearchInput: !1,
          tabIndex: 0,
        })
      t.default = In
    },
  ])
})
//# sourceMappingURL=tmr-tree-select.js.map
