(() => {
  "use strict";
  var e = {
      953: (e) => {
        function t(e, t, n) {
          var r, a, l, i, o;
          function u() {
            var s = Date.now() - i;
            s < t && s >= 0
              ? (r = setTimeout(u, t - s))
              : ((r = null), n || ((o = e.apply(l, a)), (l = a = null)));
          }
          null == t && (t = 100);
          var s = function () {
            (l = this), (a = arguments), (i = Date.now());
            var s = n && !r;
            return (
              r || (r = setTimeout(u, t)),
              s && ((o = e.apply(l, a)), (l = a = null)),
              o
            );
          };
          return (
            (s.clear = function () {
              r && (clearTimeout(r), (r = null));
            }),
            (s.flush = function () {
              r &&
                ((o = e.apply(l, a)),
                (l = a = null),
                clearTimeout(r),
                (r = null));
            }),
            s
          );
        }
        (t.debounce = t), (e.exports = t);
      },
      959: (e, t, n) => {
        var r = n(533);
        (t.s = r.createRoot), r.hydrateRoot;
      },
      93: (e, t) => {
        (t.ConcurrentRoot = 1),
          (t.ContinuousEventPriority = 4),
          (t.DefaultEventPriority = 16),
          (t.DiscreteEventPriority = 1);
      },
      753: (e, t, n) => {
        e.exports = function (e) {
          var t = {},
            r = n(363),
            a = n(296),
            l = Object.assign;
          function i(e) {
            for (
              var t =
                  "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
                n = 1;
              n < arguments.length;
              n++
            )
              t += "&args[]=" + encodeURIComponent(arguments[n]);
            return (
              "Minified React error #" +
              e +
              "; visit " +
              t +
              " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            );
          }
          var o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            u = Symbol.for("react.element"),
            s = Symbol.for("react.portal"),
            c = Symbol.for("react.fragment"),
            f = Symbol.for("react.strict_mode"),
            d = Symbol.for("react.profiler"),
            p = Symbol.for("react.provider"),
            h = Symbol.for("react.context"),
            m = Symbol.for("react.forward_ref"),
            g = Symbol.for("react.suspense"),
            v = Symbol.for("react.suspense_list"),
            b = Symbol.for("react.memo"),
            y = Symbol.for("react.lazy");
          Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
          var S = Symbol.for("react.offscreen");
          Symbol.for("react.legacy_hidden"),
            Symbol.for("react.cache"),
            Symbol.for("react.tracing_marker");
          var w = Symbol.iterator;
          function x(e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (w && e[w]) || e["@@iterator"])
                ? e
                : null;
          }
          function E(e) {
            if (null == e) return null;
            if ("function" == typeof e) return e.displayName || e.name || null;
            if ("string" == typeof e) return e;
            switch (e) {
              case c:
                return "Fragment";
              case s:
                return "Portal";
              case d:
                return "Profiler";
              case f:
                return "StrictMode";
              case g:
                return "Suspense";
              case v:
                return "SuspenseList";
            }
            if ("object" == typeof e)
              switch (e.$$typeof) {
                case h:
                  return (e.displayName || "Context") + ".Consumer";
                case p:
                  return (e._context.displayName || "Context") + ".Provider";
                case m:
                  var t = e.render;
                  return (
                    (e = e.displayName) ||
                      (e =
                        "" !== (e = t.displayName || t.name || "")
                          ? "ForwardRef(" + e + ")"
                          : "ForwardRef"),
                    e
                  );
                case b:
                  return null !== (t = e.displayName || null)
                    ? t
                    : E(e.type) || "Memo";
                case y:
                  (t = e._payload), (e = e._init);
                  try {
                    return E(e(t));
                  } catch (n) {}
              }
            return null;
          }
          function k(e) {
            var t = e.type;
            switch (e.tag) {
              case 24:
                return "Cache";
              case 9:
                return (t.displayName || "Context") + ".Consumer";
              case 10:
                return (t._context.displayName || "Context") + ".Provider";
              case 18:
                return "DehydratedFragment";
              case 11:
                return (
                  (e = (e = t.render).displayName || e.name || ""),
                  t.displayName ||
                    ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
                );
              case 7:
                return "Fragment";
              case 5:
                return t;
              case 4:
                return "Portal";
              case 3:
                return "Root";
              case 6:
                return "Text";
              case 16:
                return E(t);
              case 8:
                return t === f ? "StrictMode" : "Mode";
              case 22:
                return "Offscreen";
              case 12:
                return "Profiler";
              case 21:
                return "Scope";
              case 13:
                return "Suspense";
              case 19:
                return "SuspenseList";
              case 25:
                return "TracingMarker";
              case 1:
              case 0:
              case 17:
              case 2:
              case 14:
              case 15:
                if ("function" == typeof t)
                  return t.displayName || t.name || null;
                if ("string" == typeof t) return t;
            }
            return null;
          }
          function P(e) {
            var t = e,
              n = e;
            if (e.alternate) for (; t.return; ) t = t.return;
            else {
              e = t;
              do {
                0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
              } while (e);
            }
            return 3 === t.tag ? n : null;
          }
          function _(e) {
            if (P(e) !== e) throw Error(i(188));
          }
          function C(e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = P(e))) throw Error(i(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var a = n.return;
              if (null === a) break;
              var l = a.alternate;
              if (null === l) {
                if (null !== (r = a.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (a.child === l.child) {
                for (l = a.child; l; ) {
                  if (l === n) return _(a), e;
                  if (l === r) return _(a), t;
                  l = l.sibling;
                }
                throw Error(i(188));
              }
              if (n.return !== r.return) (n = a), (r = l);
              else {
                for (var o = !1, u = a.child; u; ) {
                  if (u === n) {
                    (o = !0), (n = a), (r = l);
                    break;
                  }
                  if (u === r) {
                    (o = !0), (r = a), (n = l);
                    break;
                  }
                  u = u.sibling;
                }
                if (!o) {
                  for (u = l.child; u; ) {
                    if (u === n) {
                      (o = !0), (n = l), (r = a);
                      break;
                    }
                    if (u === r) {
                      (o = !0), (r = l), (n = a);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!o) throw Error(i(189));
                }
              }
              if (n.alternate !== r) throw Error(i(190));
            }
            if (3 !== n.tag) throw Error(i(188));
            return n.stateNode.current === n ? e : t;
          }
          function j(e) {
            return null !== (e = C(e)) ? z(e) : null;
          }
          function z(e) {
            if (5 === e.tag || 6 === e.tag) return e;
            for (e = e.child; null !== e; ) {
              var t = z(e);
              if (null !== t) return t;
              e = e.sibling;
            }
            return null;
          }
          function O(e) {
            if (5 === e.tag || 6 === e.tag) return e;
            for (e = e.child; null !== e; ) {
              if (4 !== e.tag) {
                var t = O(e);
                if (null !== t) return t;
              }
              e = e.sibling;
            }
            return null;
          }
          var N,
            T = Array.isArray,
            M = e.getPublicInstance,
            L = e.getRootHostContext,
            R = e.getChildHostContext,
            I = e.prepareForCommit,
            D = e.resetAfterCommit,
            A = e.createInstance,
            F = e.appendInitialChild,
            U = e.finalizeInitialChildren,
            H = e.prepareUpdate,
            W = e.shouldSetTextContent,
            B = e.createTextInstance,
            V = e.scheduleTimeout,
            Q = e.cancelTimeout,
            $ = e.noTimeout,
            Y = e.isPrimaryRenderer,
            q = e.supportsMutation,
            X = e.supportsPersistence,
            Z = e.supportsHydration,
            G = e.getInstanceFromNode,
            K = e.preparePortalMount,
            J = e.getCurrentEventPriority,
            ee = e.detachDeletedInstance,
            te = e.supportsMicrotasks,
            ne = e.scheduleMicrotask,
            re = e.supportsTestSelectors,
            ae = e.findFiberRoot,
            le = e.getBoundingRect,
            ie = e.getTextContent,
            oe = e.isHiddenSubtree,
            ue = e.matchAccessibilityRole,
            se = e.setFocusIfFocusable,
            ce = e.setupIntersectionObserver,
            fe = e.appendChild,
            de = e.appendChildToContainer,
            pe = e.commitTextUpdate,
            he = e.commitMount,
            me = e.commitUpdate,
            ge = e.insertBefore,
            ve = e.insertInContainerBefore,
            be = e.removeChild,
            ye = e.removeChildFromContainer,
            Se = e.resetTextContent,
            we = e.hideInstance,
            xe = e.hideTextInstance,
            Ee = e.unhideInstance,
            ke = e.unhideTextInstance,
            Pe = e.clearContainer,
            _e = e.cloneInstance,
            Ce = e.createContainerChildSet,
            je = e.appendChildToContainerChildSet,
            ze = e.finalizeContainerChildren,
            Oe = e.replaceContainerChildren,
            Ne = e.cloneHiddenInstance,
            Te = e.cloneHiddenTextInstance,
            Me = e.canHydrateInstance,
            Le = e.canHydrateTextInstance,
            Re = e.canHydrateSuspenseInstance,
            Ie = e.isSuspenseInstancePending,
            De = e.isSuspenseInstanceFallback,
            Ae = e.registerSuspenseInstanceRetry,
            Fe = e.getNextHydratableSibling,
            Ue = e.getFirstHydratableChild,
            He = e.getFirstHydratableChildWithinContainer,
            We = e.getFirstHydratableChildWithinSuspenseInstance,
            Be = e.hydrateInstance,
            Ve = e.hydrateTextInstance,
            Qe = e.hydrateSuspenseInstance,
            $e = e.getNextHydratableInstanceAfterSuspenseInstance,
            Ye = e.commitHydratedContainer,
            qe = e.commitHydratedSuspenseInstance,
            Xe = e.clearSuspenseBoundary,
            Ze = e.clearSuspenseBoundaryFromContainer,
            Ge = e.shouldDeleteUnhydratedTailInstances,
            Ke = e.didNotMatchHydratedContainerTextInstance,
            Je = e.didNotMatchHydratedTextInstance;
          function et(e) {
            if (void 0 === N)
              try {
                throw Error();
              } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                N = (t && t[1]) || "";
              }
            return "\n" + N + e;
          }
          var tt = !1;
          function nt(e, t) {
            if (!e || tt) return "";
            tt = !0;
            var n = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
              if (t)
                if (
                  ((t = function () {
                    throw Error();
                  }),
                  Object.defineProperty(t.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  "object" == typeof Reflect && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(t, []);
                  } catch (s) {
                    var r = s;
                  }
                  Reflect.construct(e, [], t);
                } else {
                  try {
                    t.call();
                  } catch (s) {
                    r = s;
                  }
                  e.call(t.prototype);
                }
              else {
                try {
                  throw Error();
                } catch (s) {
                  r = s;
                }
                e();
              }
            } catch (s) {
              if (s && r && "string" == typeof s.stack) {
                for (
                  var a = s.stack.split("\n"),
                    l = r.stack.split("\n"),
                    i = a.length - 1,
                    o = l.length - 1;
                  1 <= i && 0 <= o && a[i] !== l[o];

                )
                  o--;
                for (; 1 <= i && 0 <= o; i--, o--)
                  if (a[i] !== l[o]) {
                    if (1 !== i || 1 !== o)
                      do {
                        if ((i--, 0 > --o || a[i] !== l[o])) {
                          var u = "\n" + a[i].replace(" at new ", " at ");
                          return (
                            e.displayName &&
                              u.includes("<anonymous>") &&
                              (u = u.replace("<anonymous>", e.displayName)),
                            u
                          );
                        }
                      } while (1 <= i && 0 <= o);
                    break;
                  }
              }
            } finally {
              (tt = !1), (Error.prepareStackTrace = n);
            }
            return (e = e ? e.displayName || e.name : "") ? et(e) : "";
          }
          var rt = Object.prototype.hasOwnProperty,
            at = [],
            lt = -1;
          function it(e) {
            return {current: e};
          }
          function ot(e) {
            0 > lt || ((e.current = at[lt]), (at[lt] = null), lt--);
          }
          function ut(e, t) {
            lt++, (at[lt] = e.current), (e.current = t);
          }
          var st = {},
            ct = it(st),
            ft = it(!1),
            dt = st;
          function pt(e, t) {
            var n = e.type.contextTypes;
            if (!n) return st;
            var r = e.stateNode;
            if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
              return r.__reactInternalMemoizedMaskedChildContext;
            var a,
              l = {};
            for (a in n) l[a] = t[a];
            return (
              r &&
                (((e =
                  e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
                (e.__reactInternalMemoizedMaskedChildContext = l)),
              l
            );
          }
          function ht(e) {
            return null != (e = e.childContextTypes);
          }
          function mt() {
            ot(ft), ot(ct);
          }
          function gt(e, t, n) {
            if (ct.current !== st) throw Error(i(168));
            ut(ct, t), ut(ft, n);
          }
          function vt(e, t, n) {
            var r = e.stateNode;
            if (
              ((t = t.childContextTypes),
              "function" != typeof r.getChildContext)
            )
              return n;
            for (var a in (r = r.getChildContext()))
              if (!(a in t)) throw Error(i(108, k(e) || "Unknown", a));
            return l({}, n, r);
          }
          function bt(e) {
            return (
              (e =
                ((e = e.stateNode) &&
                  e.__reactInternalMemoizedMergedChildContext) ||
                st),
              (dt = ct.current),
              ut(ct, e),
              ut(ft, ft.current),
              !0
            );
          }
          function yt(e, t, n) {
            var r = e.stateNode;
            if (!r) throw Error(i(169));
            n
              ? ((e = vt(e, t, dt)),
                (r.__reactInternalMemoizedMergedChildContext = e),
                ot(ft),
                ot(ct),
                ut(ct, e))
              : ot(ft),
              ut(ft, n);
          }
          var St = Math.clz32
              ? Math.clz32
              : function (e) {
                  return 0 === (e >>>= 0) ? 32 : (31 - ((wt(e) / xt) | 0)) | 0;
                },
            wt = Math.log,
            xt = Math.LN2;
          var Et = 64,
            kt = 4194304;
          function Pt(e) {
            switch (e & -e) {
              case 1:
                return 1;
              case 2:
                return 2;
              case 4:
                return 4;
              case 8:
                return 8;
              case 16:
                return 16;
              case 32:
                return 32;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
                return 4194240 & e;
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                return 130023424 & e;
              case 134217728:
                return 134217728;
              case 268435456:
                return 268435456;
              case 536870912:
                return 536870912;
              case 1073741824:
                return 1073741824;
              default:
                return e;
            }
          }
          function _t(e, t) {
            var n = e.pendingLanes;
            if (0 === n) return 0;
            var r = 0,
              a = e.suspendedLanes,
              l = e.pingedLanes,
              i = 268435455 & n;
            if (0 !== i) {
              var o = i & ~a;
              0 !== o ? (r = Pt(o)) : 0 !== (l &= i) && (r = Pt(l));
            } else 0 !== (i = n & ~a) ? (r = Pt(i)) : 0 !== l && (r = Pt(l));
            if (0 === r) return 0;
            if (
              0 !== t &&
              t !== r &&
              0 == (t & a) &&
              ((a = r & -r) >= (l = t & -t) || (16 === a && 0 != (4194240 & l)))
            )
              return t;
            if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
              for (e = e.entanglements, t &= r; 0 < t; )
                (a = 1 << (n = 31 - St(t))), (r |= e[n]), (t &= ~a);
            return r;
          }
          function Ct(e, t) {
            switch (e) {
              case 1:
              case 2:
              case 4:
                return t + 250;
              case 8:
              case 16:
              case 32:
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
                return t + 5e3;
              default:
                return -1;
            }
          }
          function jt(e) {
            return 0 !== (e = -1073741825 & e.pendingLanes)
              ? e
              : 1073741824 & e
                ? 1073741824
                : 0;
          }
          function zt(e) {
            for (var t = [], n = 0; 31 > n; n++) t.push(e);
            return t;
          }
          function Ot(e, t, n) {
            (e.pendingLanes |= t),
              536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
              ((e = e.eventTimes)[(t = 31 - St(t))] = n);
          }
          function Nt(e, t) {
            var n = (e.entangledLanes |= t);
            for (e = e.entanglements; n; ) {
              var r = 31 - St(n),
                a = 1 << r;
              (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
            }
          }
          var Tt = 0;
          function Mt(e) {
            return 1 < (e &= -e)
              ? 4 < e
                ? 0 != (268435455 & e)
                  ? 16
                  : 536870912
                : 4
              : 1;
          }
          var Lt = a.unstable_scheduleCallback,
            Rt = a.unstable_cancelCallback,
            It = a.unstable_shouldYield,
            Dt = a.unstable_requestPaint,
            At = a.unstable_now,
            Ft = a.unstable_ImmediatePriority,
            Ut = a.unstable_UserBlockingPriority,
            Ht = a.unstable_NormalPriority,
            Wt = a.unstable_IdlePriority,
            Bt = null,
            Vt = null;
          var Qt =
              "function" == typeof Object.is
                ? Object.is
                : function (e, t) {
                    return (
                      (e === t && (0 !== e || 1 / e == 1 / t)) ||
                      (e != e && t != t)
                    );
                  },
            $t = null,
            Yt = !1,
            qt = !1;
          function Xt(e) {
            null === $t ? ($t = [e]) : $t.push(e);
          }
          function Zt() {
            if (!qt && null !== $t) {
              qt = !0;
              var e = 0,
                t = Tt;
              try {
                var n = $t;
                for (Tt = 1; e < n.length; e++) {
                  var r = n[e];
                  do {
                    r = r(!0);
                  } while (null !== r);
                }
                ($t = null), (Yt = !1);
              } catch (a) {
                throw (null !== $t && ($t = $t.slice(e + 1)), Lt(Ft, Zt), a);
              } finally {
                (Tt = t), (qt = !1);
              }
            }
            return null;
          }
          var Gt = o.ReactCurrentBatchConfig;
          function Kt(e, t) {
            if (Qt(e, t)) return !0;
            if (
              "object" != typeof e ||
              null === e ||
              "object" != typeof t ||
              null === t
            )
              return !1;
            var n = Object.keys(e),
              r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (r = 0; r < n.length; r++) {
              var a = n[r];
              if (!rt.call(t, a) || !Qt(e[a], t[a])) return !1;
            }
            return !0;
          }
          function Jt(e) {
            switch (e.tag) {
              case 5:
                return et(e.type);
              case 16:
                return et("Lazy");
              case 13:
                return et("Suspense");
              case 19:
                return et("SuspenseList");
              case 0:
              case 2:
              case 15:
                return (e = nt(e.type, !1));
              case 11:
                return (e = nt(e.type.render, !1));
              case 1:
                return (e = nt(e.type, !0));
              default:
                return "";
            }
          }
          function en(e, t) {
            if (e && e.defaultProps) {
              for (var n in ((t = l({}, t)), (e = e.defaultProps)))
                void 0 === t[n] && (t[n] = e[n]);
              return t;
            }
            return t;
          }
          var tn = it(null),
            nn = null,
            rn = null,
            an = null;
          function ln() {
            an = rn = nn = null;
          }
          function on(e, t, n) {
            Y
              ? (ut(tn, t._currentValue), (t._currentValue = n))
              : (ut(tn, t._currentValue2), (t._currentValue2 = n));
          }
          function un(e) {
            var t = tn.current;
            ot(tn), Y ? (e._currentValue = t) : (e._currentValue2 = t);
          }
          function sn(e, t, n) {
            for (; null !== e; ) {
              var r = e.alternate;
              if (
                ((e.childLanes & t) !== t
                  ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                  : null !== r &&
                    (r.childLanes & t) !== t &&
                    (r.childLanes |= t),
                e === n)
              )
                break;
              e = e.return;
            }
          }
          function cn(e, t) {
            (nn = e),
              (an = rn = null),
              null !== (e = e.dependencies) &&
                null !== e.firstContext &&
                (0 != (e.lanes & t) && (Ia = !0), (e.firstContext = null));
          }
          function fn(e) {
            var t = Y ? e._currentValue : e._currentValue2;
            if (an !== e)
              if (
                ((e = {context: e, memoizedValue: t, next: null}), null === rn)
              ) {
                if (null === nn) throw Error(i(308));
                (rn = e), (nn.dependencies = {lanes: 0, firstContext: e});
              } else rn = rn.next = e;
            return t;
          }
          var dn = null,
            pn = !1;
          function hn(e) {
            e.updateQueue = {
              baseState: e.memoizedState,
              firstBaseUpdate: null,
              lastBaseUpdate: null,
              shared: {pending: null, interleaved: null, lanes: 0},
              effects: null,
            };
          }
          function mn(e, t) {
            (e = e.updateQueue),
              t.updateQueue === e &&
                (t.updateQueue = {
                  baseState: e.baseState,
                  firstBaseUpdate: e.firstBaseUpdate,
                  lastBaseUpdate: e.lastBaseUpdate,
                  shared: e.shared,
                  effects: e.effects,
                });
          }
          function gn(e, t) {
            return {
              eventTime: e,
              lane: t,
              tag: 0,
              payload: null,
              callback: null,
              next: null,
            };
          }
          function vn(e, t) {
            var n = e.updateQueue;
            null !== n &&
              ((n = n.shared),
              null !== ql && 0 != (1 & e.mode) && 0 == (2 & Yl)
                ? (null === (e = n.interleaved)
                    ? ((t.next = t), null === dn ? (dn = [n]) : dn.push(n))
                    : ((t.next = e.next), (e.next = t)),
                  (n.interleaved = t))
                : (null === (e = n.pending)
                    ? (t.next = t)
                    : ((t.next = e.next), (e.next = t)),
                  (n.pending = t)));
          }
          function bn(e, t, n) {
            if (
              null !== (t = t.updateQueue) &&
              ((t = t.shared), 0 != (4194240 & n))
            ) {
              var r = t.lanes;
              (n |= r &= e.pendingLanes), (t.lanes = n), Nt(e, n);
            }
          }
          function yn(e, t) {
            var n = e.updateQueue,
              r = e.alternate;
            if (null !== r && n === (r = r.updateQueue)) {
              var a = null,
                l = null;
              if (null !== (n = n.firstBaseUpdate)) {
                do {
                  var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                  };
                  null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
                } while (null !== n);
                null === l ? (a = l = t) : (l = l.next = t);
              } else a = l = t;
              return (
                (n = {
                  baseState: r.baseState,
                  firstBaseUpdate: a,
                  lastBaseUpdate: l,
                  shared: r.shared,
                  effects: r.effects,
                }),
                void (e.updateQueue = n)
              );
            }
            null === (e = n.lastBaseUpdate)
              ? (n.firstBaseUpdate = t)
              : (e.next = t),
              (n.lastBaseUpdate = t);
          }
          function Sn(e, t, n, r) {
            var a = e.updateQueue;
            pn = !1;
            var i = a.firstBaseUpdate,
              o = a.lastBaseUpdate,
              u = a.shared.pending;
            if (null !== u) {
              a.shared.pending = null;
              var s = u,
                c = s.next;
              (s.next = null), null === o ? (i = c) : (o.next = c), (o = s);
              var f = e.alternate;
              null !== f &&
                (u = (f = f.updateQueue).lastBaseUpdate) !== o &&
                (null === u ? (f.firstBaseUpdate = c) : (u.next = c),
                (f.lastBaseUpdate = s));
            }
            if (null !== i) {
              var d = a.baseState;
              for (o = 0, f = c = s = null, u = i; ; ) {
                var p = u.lane,
                  h = u.eventTime;
                if ((r & p) === p) {
                  null !== f &&
                    (f = f.next =
                      {
                        eventTime: h,
                        lane: 0,
                        tag: u.tag,
                        payload: u.payload,
                        callback: u.callback,
                        next: null,
                      });
                  e: {
                    var m = e,
                      g = u;
                    switch (((p = t), (h = n), g.tag)) {
                      case 1:
                        if ("function" == typeof (m = g.payload)) {
                          d = m.call(h, d, p);
                          break e;
                        }
                        d = m;
                        break e;
                      case 3:
                        m.flags = (-65537 & m.flags) | 128;
                      case 0:
                        if (
                          null ==
                          (p =
                            "function" == typeof (m = g.payload)
                              ? m.call(h, d, p)
                              : m)
                        )
                          break e;
                        d = l({}, d, p);
                        break e;
                      case 2:
                        pn = !0;
                    }
                  }
                  null !== u.callback &&
                    0 !== u.lane &&
                    ((e.flags |= 64),
                    null === (p = a.effects) ? (a.effects = [u]) : p.push(u));
                } else
                  (h = {
                    eventTime: h,
                    lane: p,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null,
                  }),
                    null === f ? ((c = f = h), (s = d)) : (f = f.next = h),
                    (o |= p);
                if (null === (u = u.next)) {
                  if (null === (u = a.shared.pending)) break;
                  (u = (p = u).next),
                    (p.next = null),
                    (a.lastBaseUpdate = p),
                    (a.shared.pending = null);
                }
              }
              if (
                (null === f && (s = d),
                (a.baseState = s),
                (a.firstBaseUpdate = c),
                (a.lastBaseUpdate = f),
                null !== (t = a.shared.interleaved))
              ) {
                a = t;
                do {
                  (o |= a.lane), (a = a.next);
                } while (a !== t);
              } else null === i && (a.shared.lanes = 0);
              (ti |= o), (e.lanes = o), (e.memoizedState = d);
            }
          }
          function wn(e, t, n) {
            if (((e = t.effects), (t.effects = null), null !== e))
              for (t = 0; t < e.length; t++) {
                var r = e[t],
                  a = r.callback;
                if (null !== a) {
                  if (((r.callback = null), (r = n), "function" != typeof a))
                    throw Error(i(191, a));
                  a.call(r);
                }
              }
          }
          var xn = new r.Component().refs;
          function En(e, t, n, r) {
            (n = null == (n = n(r, (t = e.memoizedState))) ? t : l({}, t, n)),
              (e.memoizedState = n),
              0 === e.lanes && (e.updateQueue.baseState = n);
          }
          var kn = {
            isMounted: function (e) {
              return !!(e = e._reactInternals) && P(e) === e;
            },
            enqueueSetState: function (e, t, n) {
              e = e._reactInternals;
              var r = Si(),
                a = wi(e),
                l = gn(r, a);
              (l.payload = t),
                null != n && (l.callback = n),
                vn(e, l),
                null !== (t = xi(e, a, r)) && bn(t, e, a);
            },
            enqueueReplaceState: function (e, t, n) {
              e = e._reactInternals;
              var r = Si(),
                a = wi(e),
                l = gn(r, a);
              (l.tag = 1),
                (l.payload = t),
                null != n && (l.callback = n),
                vn(e, l),
                null !== (t = xi(e, a, r)) && bn(t, e, a);
            },
            enqueueForceUpdate: function (e, t) {
              e = e._reactInternals;
              var n = Si(),
                r = wi(e),
                a = gn(n, r);
              (a.tag = 2),
                null != t && (a.callback = t),
                vn(e, a),
                null !== (t = xi(e, r, n)) && bn(t, e, r);
            },
          };
          function Pn(e, t, n, r, a, l, i) {
            return "function" == typeof (e = e.stateNode).shouldComponentUpdate
              ? e.shouldComponentUpdate(r, l, i)
              : !t.prototype ||
                  !t.prototype.isPureReactComponent ||
                  !Kt(n, r) ||
                  !Kt(a, l);
          }
          function _n(e, t, n) {
            var r = !1,
              a = st,
              l = t.contextType;
            return (
              "object" == typeof l && null !== l
                ? (l = fn(l))
                : ((a = ht(t) ? dt : ct.current),
                  (l = (r = null != (r = t.contextTypes)) ? pt(e, a) : st)),
              (t = new t(n, l)),
              (e.memoizedState =
                null !== t.state && void 0 !== t.state ? t.state : null),
              (t.updater = kn),
              (e.stateNode = t),
              (t._reactInternals = e),
              r &&
                (((e =
                  e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
                (e.__reactInternalMemoizedMaskedChildContext = l)),
              t
            );
          }
          function Cn(e, t, n, r) {
            (e = t.state),
              "function" == typeof t.componentWillReceiveProps &&
                t.componentWillReceiveProps(n, r),
              "function" == typeof t.UNSAFE_componentWillReceiveProps &&
                t.UNSAFE_componentWillReceiveProps(n, r),
              t.state !== e && kn.enqueueReplaceState(t, t.state, null);
          }
          function jn(e, t, n, r) {
            var a = e.stateNode;
            (a.props = n), (a.state = e.memoizedState), (a.refs = xn), hn(e);
            var l = t.contextType;
            "object" == typeof l && null !== l
              ? (a.context = fn(l))
              : ((l = ht(t) ? dt : ct.current), (a.context = pt(e, l))),
              (a.state = e.memoizedState),
              "function" == typeof (l = t.getDerivedStateFromProps) &&
                (En(e, t, l, n), (a.state = e.memoizedState)),
              "function" == typeof t.getDerivedStateFromProps ||
                "function" == typeof a.getSnapshotBeforeUpdate ||
                ("function" != typeof a.UNSAFE_componentWillMount &&
                  "function" != typeof a.componentWillMount) ||
                ((t = a.state),
                "function" == typeof a.componentWillMount &&
                  a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount &&
                  a.UNSAFE_componentWillMount(),
                t !== a.state && kn.enqueueReplaceState(a, a.state, null),
                Sn(e, n, a, r),
                (a.state = e.memoizedState)),
              "function" == typeof a.componentDidMount && (e.flags |= 4194308);
          }
          var zn = [],
            On = 0,
            Nn = null,
            Tn = 0,
            Mn = [],
            Ln = 0,
            Rn = null,
            In = 1,
            Dn = "";
          function An(e, t) {
            (zn[On++] = Tn), (zn[On++] = Nn), (Nn = e), (Tn = t);
          }
          function Fn(e, t, n) {
            (Mn[Ln++] = In), (Mn[Ln++] = Dn), (Mn[Ln++] = Rn), (Rn = e);
            var r = In;
            e = Dn;
            var a = 32 - St(r) - 1;
            (r &= ~(1 << a)), (n += 1);
            var l = 32 - St(t) + a;
            if (30 < l) {
              var i = a - (a % 5);
              (l = (r & ((1 << i) - 1)).toString(32)),
                (r >>= i),
                (a -= i),
                (In = (1 << (32 - St(t) + a)) | (n << a) | r),
                (Dn = l + e);
            } else (In = (1 << l) | (n << a) | r), (Dn = e);
          }
          function Un(e) {
            null !== e.return && (An(e, 1), Fn(e, 1, 0));
          }
          function Hn(e) {
            for (; e === Nn; )
              (Nn = zn[--On]),
                (zn[On] = null),
                (Tn = zn[--On]),
                (zn[On] = null);
            for (; e === Rn; )
              (Rn = Mn[--Ln]),
                (Mn[Ln] = null),
                (Dn = Mn[--Ln]),
                (Mn[Ln] = null),
                (In = Mn[--Ln]),
                (Mn[Ln] = null);
          }
          var Wn = null,
            Bn = null,
            Vn = !1,
            Qn = !1,
            $n = null;
          function Yn(e, t) {
            var n = Gi(5, null, null, 0);
            (n.elementType = "DELETED"),
              (n.stateNode = t),
              (n.return = e),
              null === (t = e.deletions)
                ? ((e.deletions = [n]), (e.flags |= 16))
                : t.push(n);
          }
          function qn(e, t) {
            switch (e.tag) {
              case 5:
                return (
                  null !== (t = Me(t, e.type, e.pendingProps)) &&
                  ((e.stateNode = t), (Wn = e), (Bn = Ue(t)), !0)
                );
              case 6:
                return (
                  null !== (t = Le(t, e.pendingProps)) &&
                  ((e.stateNode = t), (Wn = e), (Bn = null), !0)
                );
              case 13:
                if (null !== (t = Re(t))) {
                  var n = null !== Rn ? {id: In, overflow: Dn} : null;
                  return (
                    (e.memoizedState = {
                      dehydrated: t,
                      treeContext: n,
                      retryLane: 1073741824,
                    }),
                    ((n = Gi(18, null, null, 0)).stateNode = t),
                    (n.return = e),
                    (e.child = n),
                    (Wn = e),
                    (Bn = null),
                    !0
                  );
                }
                return !1;
              default:
                return !1;
            }
          }
          function Xn(e) {
            return 0 != (1 & e.mode) && 0 == (128 & e.flags);
          }
          function Zn(e) {
            if (Vn) {
              var t = Bn;
              if (t) {
                var n = t;
                if (!qn(e, t)) {
                  if (Xn(e)) throw Error(i(418));
                  t = Fe(n);
                  var r = Wn;
                  t && qn(e, t)
                    ? Yn(r, n)
                    : ((e.flags = (-4097 & e.flags) | 2), (Vn = !1), (Wn = e));
                }
              } else {
                if (Xn(e)) throw Error(i(418));
                (e.flags = (-4097 & e.flags) | 2), (Vn = !1), (Wn = e);
              }
            }
          }
          function Gn(e) {
            for (
              e = e.return;
              null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

            )
              e = e.return;
            Wn = e;
          }
          function Kn(e) {
            if (!Z || e !== Wn) return !1;
            if (!Vn) return Gn(e), (Vn = !0), !1;
            if (
              3 !== e.tag &&
              (5 !== e.tag || (Ge(e.type) && !W(e.type, e.memoizedProps)))
            ) {
              var t = Bn;
              if (t) {
                if (Xn(e)) {
                  for (e = Bn; e; ) e = Fe(e);
                  throw Error(i(418));
                }
                for (; t; ) Yn(e, t), (t = Fe(t));
              }
            }
            if ((Gn(e), 13 === e.tag)) {
              if (!Z) throw Error(i(316));
              if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(i(317));
              Bn = $e(e);
            } else Bn = Wn ? Fe(e.stateNode) : null;
            return !0;
          }
          function Jn() {
            Z && ((Bn = Wn = null), (Qn = Vn = !1));
          }
          function er(e) {
            null === $n ? ($n = [e]) : $n.push(e);
          }
          function tr(e, t, n) {
            if (
              null !== (e = n.ref) &&
              "function" != typeof e &&
              "object" != typeof e
            ) {
              if (n._owner) {
                if ((n = n._owner)) {
                  if (1 !== n.tag) throw Error(i(309));
                  var r = n.stateNode;
                }
                if (!r) throw Error(i(147, e));
                var a = r,
                  l = "" + e;
                return null !== t &&
                  null !== t.ref &&
                  "function" == typeof t.ref &&
                  t.ref._stringRef === l
                  ? t.ref
                  : ((t = function (e) {
                      var t = a.refs;
                      t === xn && (t = a.refs = {}),
                        null === e ? delete t[l] : (t[l] = e);
                    }),
                    (t._stringRef = l),
                    t);
              }
              if ("string" != typeof e) throw Error(i(284));
              if (!n._owner) throw Error(i(290, e));
            }
            return e;
          }
          function nr(e, t) {
            throw (
              ((e = Object.prototype.toString.call(t)),
              Error(
                i(
                  31,
                  "[object Object]" === e
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e,
                ),
              ))
            );
          }
          function rr(e) {
            return (0, e._init)(e._payload);
          }
          function ar(e) {
            function t(t, n) {
              if (e) {
                var r = t.deletions;
                null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
              }
            }
            function n(n, r) {
              if (!e) return null;
              for (; null !== r; ) t(n, r), (r = r.sibling);
              return null;
            }
            function r(e, t) {
              for (e = new Map(); null !== t; )
                null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                  (t = t.sibling);
              return e;
            }
            function a(e, t) {
              return ((e = Ji(e, t)).index = 0), (e.sibling = null), e;
            }
            function l(t, n, r) {
              return (
                (t.index = r),
                e
                  ? null !== (r = t.alternate)
                    ? (r = r.index) < n
                      ? ((t.flags |= 2), n)
                      : r
                    : ((t.flags |= 2), n)
                  : ((t.flags |= 1048576), n)
              );
            }
            function o(t) {
              return e && null === t.alternate && (t.flags |= 2), t;
            }
            function f(e, t, n, r) {
              return null === t || 6 !== t.tag
                ? (((t = ro(n, e.mode, r)).return = e), t)
                : (((t = a(t, n)).return = e), t);
            }
            function d(e, t, n, r) {
              var l = n.type;
              return l === c
                ? h(e, t, n.props.children, r, n.key)
                : null !== t &&
                    (t.elementType === l ||
                      ("object" == typeof l &&
                        null !== l &&
                        l.$$typeof === y &&
                        rr(l) === t.type))
                  ? (((r = a(t, n.props)).ref = tr(e, t, n)), (r.return = e), r)
                  : (((r = eo(n.type, n.key, n.props, null, e.mode, r)).ref =
                      tr(e, t, n)),
                    (r.return = e),
                    r);
            }
            function p(e, t, n, r) {
              return null === t ||
                4 !== t.tag ||
                t.stateNode.containerInfo !== n.containerInfo ||
                t.stateNode.implementation !== n.implementation
                ? (((t = ao(n, e.mode, r)).return = e), t)
                : (((t = a(t, n.children || [])).return = e), t);
            }
            function h(e, t, n, r, l) {
              return null === t || 7 !== t.tag
                ? (((t = to(n, e.mode, r, l)).return = e), t)
                : (((t = a(t, n)).return = e), t);
            }
            function m(e, t, n) {
              if (("string" == typeof t && "" !== t) || "number" == typeof t)
                return ((t = ro("" + t, e.mode, n)).return = e), t;
              if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                  case u:
                    return (
                      ((n = eo(t.type, t.key, t.props, null, e.mode, n)).ref =
                        tr(e, null, t)),
                      (n.return = e),
                      n
                    );
                  case s:
                    return ((t = ao(t, e.mode, n)).return = e), t;
                  case y:
                    return m(e, (0, t._init)(t._payload), n);
                }
                if (T(t) || x(t))
                  return ((t = to(t, e.mode, n, null)).return = e), t;
                nr(e, t);
              }
              return null;
            }
            function g(e, t, n, r) {
              var a = null !== t ? t.key : null;
              if (("string" == typeof n && "" !== n) || "number" == typeof n)
                return null !== a ? null : f(e, t, "" + n, r);
              if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                  case u:
                    return n.key === a ? d(e, t, n, r) : null;
                  case s:
                    return n.key === a ? p(e, t, n, r) : null;
                  case y:
                    return g(e, t, (a = n._init)(n._payload), r);
                }
                if (T(n) || x(n))
                  return null !== a ? null : h(e, t, n, r, null);
                nr(e, n);
              }
              return null;
            }
            function v(e, t, n, r, a) {
              if (("string" == typeof r && "" !== r) || "number" == typeof r)
                return f(t, (e = e.get(n) || null), "" + r, a);
              if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                  case u:
                    return d(
                      t,
                      (e = e.get(null === r.key ? n : r.key) || null),
                      r,
                      a,
                    );
                  case s:
                    return p(
                      t,
                      (e = e.get(null === r.key ? n : r.key) || null),
                      r,
                      a,
                    );
                  case y:
                    return v(e, t, n, (0, r._init)(r._payload), a);
                }
                if (T(r) || x(r))
                  return h(t, (e = e.get(n) || null), r, a, null);
                nr(t, r);
              }
              return null;
            }
            function b(a, i, o, u) {
              for (
                var s = null, c = null, f = i, d = (i = 0), p = null;
                null !== f && d < o.length;
                d++
              ) {
                f.index > d ? ((p = f), (f = null)) : (p = f.sibling);
                var h = g(a, f, o[d], u);
                if (null === h) {
                  null === f && (f = p);
                  break;
                }
                e && f && null === h.alternate && t(a, f),
                  (i = l(h, i, d)),
                  null === c ? (s = h) : (c.sibling = h),
                  (c = h),
                  (f = p);
              }
              if (d === o.length) return n(a, f), Vn && An(a, d), s;
              if (null === f) {
                for (; d < o.length; d++)
                  null !== (f = m(a, o[d], u)) &&
                    ((i = l(f, i, d)),
                    null === c ? (s = f) : (c.sibling = f),
                    (c = f));
                return Vn && An(a, d), s;
              }
              for (f = r(a, f); d < o.length; d++)
                null !== (p = v(f, a, d, o[d], u)) &&
                  (e &&
                    null !== p.alternate &&
                    f.delete(null === p.key ? d : p.key),
                  (i = l(p, i, d)),
                  null === c ? (s = p) : (c.sibling = p),
                  (c = p));
              return (
                e &&
                  f.forEach(function (e) {
                    return t(a, e);
                  }),
                Vn && An(a, d),
                s
              );
            }
            function S(a, o, u, s) {
              var c = x(u);
              if ("function" != typeof c) throw Error(i(150));
              if (null == (u = c.call(u))) throw Error(i(151));
              for (
                var f = (c = null), d = o, p = (o = 0), h = null, b = u.next();
                null !== d && !b.done;
                p++, b = u.next()
              ) {
                d.index > p ? ((h = d), (d = null)) : (h = d.sibling);
                var y = g(a, d, b.value, s);
                if (null === y) {
                  null === d && (d = h);
                  break;
                }
                e && d && null === y.alternate && t(a, d),
                  (o = l(y, o, p)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y),
                  (d = h);
              }
              if (b.done) return n(a, d), Vn && An(a, p), c;
              if (null === d) {
                for (; !b.done; p++, b = u.next())
                  null !== (b = m(a, b.value, s)) &&
                    ((o = l(b, o, p)),
                    null === f ? (c = b) : (f.sibling = b),
                    (f = b));
                return Vn && An(a, p), c;
              }
              for (d = r(a, d); !b.done; p++, b = u.next())
                null !== (b = v(d, a, p, b.value, s)) &&
                  (e &&
                    null !== b.alternate &&
                    d.delete(null === b.key ? p : b.key),
                  (o = l(b, o, p)),
                  null === f ? (c = b) : (f.sibling = b),
                  (f = b));
              return (
                e &&
                  d.forEach(function (e) {
                    return t(a, e);
                  }),
                Vn && An(a, p),
                c
              );
            }
            return function e(r, l, i, f) {
              if (
                ("object" == typeof i &&
                  null !== i &&
                  i.type === c &&
                  null === i.key &&
                  (i = i.props.children),
                "object" == typeof i && null !== i)
              ) {
                switch (i.$$typeof) {
                  case u:
                    e: {
                      for (var d = i.key, p = l; null !== p; ) {
                        if (p.key === d) {
                          if ((d = i.type) === c) {
                            if (7 === p.tag) {
                              n(r, p.sibling),
                                ((l = a(p, i.props.children)).return = r),
                                (r = l);
                              break e;
                            }
                          } else if (
                            p.elementType === d ||
                            ("object" == typeof d &&
                              null !== d &&
                              d.$$typeof === y &&
                              rr(d) === p.type)
                          ) {
                            n(r, p.sibling),
                              ((l = a(p, i.props)).ref = tr(r, p, i)),
                              (l.return = r),
                              (r = l);
                            break e;
                          }
                          n(r, p);
                          break;
                        }
                        t(r, p), (p = p.sibling);
                      }
                      i.type === c
                        ? (((l = to(
                            i.props.children,
                            r.mode,
                            f,
                            i.key,
                          )).return = r),
                          (r = l))
                        : (((f = eo(
                            i.type,
                            i.key,
                            i.props,
                            null,
                            r.mode,
                            f,
                          )).ref = tr(r, l, i)),
                          (f.return = r),
                          (r = f));
                    }
                    return o(r);
                  case s:
                    e: {
                      for (p = i.key; null !== l; ) {
                        if (l.key === p) {
                          if (
                            4 === l.tag &&
                            l.stateNode.containerInfo === i.containerInfo &&
                            l.stateNode.implementation === i.implementation
                          ) {
                            n(r, l.sibling),
                              ((l = a(l, i.children || [])).return = r),
                              (r = l);
                            break e;
                          }
                          n(r, l);
                          break;
                        }
                        t(r, l), (l = l.sibling);
                      }
                      ((l = ao(i, r.mode, f)).return = r), (r = l);
                    }
                    return o(r);
                  case y:
                    return e(r, l, (p = i._init)(i._payload), f);
                }
                if (T(i)) return b(r, l, i, f);
                if (x(i)) return S(r, l, i, f);
                nr(r, i);
              }
              return ("string" == typeof i && "" !== i) || "number" == typeof i
                ? ((i = "" + i),
                  null !== l && 6 === l.tag
                    ? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
                    : (n(r, l), ((l = ro(i, r.mode, f)).return = r), (r = l)),
                  o(r))
                : n(r, l);
            };
          }
          var lr = ar(!0),
            ir = ar(!1),
            or = {},
            ur = it(or),
            sr = it(or),
            cr = it(or);
          function fr(e) {
            if (e === or) throw Error(i(174));
            return e;
          }
          function dr(e, t) {
            ut(cr, t), ut(sr, e), ut(ur, or), (e = L(t)), ot(ur), ut(ur, e);
          }
          function pr() {
            ot(ur), ot(sr), ot(cr);
          }
          function hr(e) {
            var t = fr(cr.current),
              n = fr(ur.current);
            n !== (t = R(n, e.type, t)) && (ut(sr, e), ut(ur, t));
          }
          function mr(e) {
            sr.current === e && (ot(ur), ot(sr));
          }
          var gr = it(0);
          function vr(e) {
            for (var t = e; null !== t; ) {
              if (13 === t.tag) {
                var n = t.memoizedState;
                if (
                  null !== n &&
                  (null === (n = n.dehydrated) || Ie(n) || De(n))
                )
                  return t;
              } else if (
                19 === t.tag &&
                void 0 !== t.memoizedProps.revealOrder
              ) {
                if (0 != (128 & t.flags)) return t;
              } else if (null !== t.child) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
            return null;
          }
          var br = [];
          function yr() {
            for (var e = 0; e < br.length; e++) {
              var t = br[e];
              Y
                ? (t._workInProgressVersionPrimary = null)
                : (t._workInProgressVersionSecondary = null);
            }
            br.length = 0;
          }
          var Sr = o.ReactCurrentDispatcher,
            wr = o.ReactCurrentBatchConfig,
            xr = 0,
            Er = null,
            kr = null,
            Pr = null,
            _r = !1,
            Cr = !1,
            jr = 0,
            zr = 0;
          function Or() {
            throw Error(i(321));
          }
          function Nr(e, t) {
            if (null === t) return !1;
            for (var n = 0; n < t.length && n < e.length; n++)
              if (!Qt(e[n], t[n])) return !1;
            return !0;
          }
          function Tr(e, t, n, r, a, l) {
            if (
              ((xr = l),
              (Er = t),
              (t.memoizedState = null),
              (t.updateQueue = null),
              (t.lanes = 0),
              (Sr.current = null === e || null === e.memoizedState ? ha : ma),
              (e = n(r, a)),
              Cr)
            ) {
              l = 0;
              do {
                if (((Cr = !1), (jr = 0), 25 <= l)) throw Error(i(301));
                (l += 1),
                  (Pr = kr = null),
                  (t.updateQueue = null),
                  (Sr.current = ga),
                  (e = n(r, a));
              } while (Cr);
            }
            if (
              ((Sr.current = pa),
              (t = null !== kr && null !== kr.next),
              (xr = 0),
              (Pr = kr = Er = null),
              (_r = !1),
              t)
            )
              throw Error(i(300));
            return e;
          }
          function Mr() {
            var e = 0 !== jr;
            return (jr = 0), e;
          }
          function Lr() {
            var e = {
              memoizedState: null,
              baseState: null,
              baseQueue: null,
              queue: null,
              next: null,
            };
            return (
              null === Pr ? (Er.memoizedState = Pr = e) : (Pr = Pr.next = e), Pr
            );
          }
          function Rr() {
            if (null === kr) {
              var e = Er.alternate;
              e = null !== e ? e.memoizedState : null;
            } else e = kr.next;
            var t = null === Pr ? Er.memoizedState : Pr.next;
            if (null !== t) (Pr = t), (kr = e);
            else {
              if (null === e) throw Error(i(310));
              (e = {
                memoizedState: (kr = e).memoizedState,
                baseState: kr.baseState,
                baseQueue: kr.baseQueue,
                queue: kr.queue,
                next: null,
              }),
                null === Pr ? (Er.memoizedState = Pr = e) : (Pr = Pr.next = e);
            }
            return Pr;
          }
          function Ir(e, t) {
            return "function" == typeof t ? t(e) : t;
          }
          function Dr(e) {
            var t = Rr(),
              n = t.queue;
            if (null === n) throw Error(i(311));
            n.lastRenderedReducer = e;
            var r = kr,
              a = r.baseQueue,
              l = n.pending;
            if (null !== l) {
              if (null !== a) {
                var o = a.next;
                (a.next = l.next), (l.next = o);
              }
              (r.baseQueue = a = l), (n.pending = null);
            }
            if (null !== a) {
              (l = a.next), (r = r.baseState);
              var u = (o = null),
                s = null,
                c = l;
              do {
                var f = c.lane;
                if ((xr & f) === f)
                  null !== s &&
                    (s = s.next =
                      {
                        lane: 0,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null,
                      }),
                    (r = c.hasEagerState ? c.eagerState : e(r, c.action));
                else {
                  var d = {
                    lane: f,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  };
                  null === s ? ((u = s = d), (o = r)) : (s = s.next = d),
                    (Er.lanes |= f),
                    (ti |= f);
                }
                c = c.next;
              } while (null !== c && c !== l);
              null === s ? (o = r) : (s.next = u),
                Qt(r, t.memoizedState) || (Ia = !0),
                (t.memoizedState = r),
                (t.baseState = o),
                (t.baseQueue = s),
                (n.lastRenderedState = r);
            }
            if (null !== (e = n.interleaved)) {
              a = e;
              do {
                (l = a.lane), (Er.lanes |= l), (ti |= l), (a = a.next);
              } while (a !== e);
            } else null === a && (n.lanes = 0);
            return [t.memoizedState, n.dispatch];
          }
          function Ar(e) {
            var t = Rr(),
              n = t.queue;
            if (null === n) throw Error(i(311));
            n.lastRenderedReducer = e;
            var r = n.dispatch,
              a = n.pending,
              l = t.memoizedState;
            if (null !== a) {
              n.pending = null;
              var o = (a = a.next);
              do {
                (l = e(l, o.action)), (o = o.next);
              } while (o !== a);
              Qt(l, t.memoizedState) || (Ia = !0),
                (t.memoizedState = l),
                null === t.baseQueue && (t.baseState = l),
                (n.lastRenderedState = l);
            }
            return [l, r];
          }
          function Fr() {}
          function Ur(e, t) {
            var n = Er,
              r = Rr(),
              a = t(),
              l = !Qt(r.memoizedState, a);
            if (
              (l && ((r.memoizedState = a), (Ia = !0)),
              (r = r.queue),
              Gr(Br.bind(null, n, r, e), [e]),
              r.getSnapshot !== t ||
                l ||
                (null !== Pr && 1 & Pr.memoizedState.tag))
            ) {
              if (
                ((n.flags |= 2048),
                $r(9, Wr.bind(null, n, r, a, t), void 0, null),
                null === ql)
              )
                throw Error(i(349));
              0 != (30 & xr) || Hr(n, t, a);
            }
            return a;
          }
          function Hr(e, t, n) {
            (e.flags |= 16384),
              (e = {getSnapshot: t, value: n}),
              null === (t = Er.updateQueue)
                ? ((t = {lastEffect: null, stores: null}),
                  (Er.updateQueue = t),
                  (t.stores = [e]))
                : null === (n = t.stores)
                  ? (t.stores = [e])
                  : n.push(e);
          }
          function Wr(e, t, n, r) {
            (t.value = n), (t.getSnapshot = r), Vr(t) && xi(e, 1, -1);
          }
          function Br(e, t, n) {
            return n(function () {
              Vr(t) && xi(e, 1, -1);
            });
          }
          function Vr(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
              var n = t();
              return !Qt(e, n);
            } catch (r) {
              return !0;
            }
          }
          function Qr(e) {
            var t = Lr();
            return (
              "function" == typeof e && (e = e()),
              (t.memoizedState = t.baseState = e),
              (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ir,
                lastRenderedState: e,
              }),
              (t.queue = e),
              (e = e.dispatch = ua.bind(null, Er, e)),
              [t.memoizedState, e]
            );
          }
          function $r(e, t, n, r) {
            return (
              (e = {tag: e, create: t, destroy: n, deps: r, next: null}),
              null === (t = Er.updateQueue)
                ? ((t = {lastEffect: null, stores: null}),
                  (Er.updateQueue = t),
                  (t.lastEffect = e.next = e))
                : null === (n = t.lastEffect)
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e)),
              e
            );
          }
          function Yr() {
            return Rr().memoizedState;
          }
          function qr(e, t, n, r) {
            var a = Lr();
            (Er.flags |= e),
              (a.memoizedState = $r(1 | t, n, void 0, void 0 === r ? null : r));
          }
          function Xr(e, t, n, r) {
            var a = Rr();
            r = void 0 === r ? null : r;
            var l = void 0;
            if (null !== kr) {
              var i = kr.memoizedState;
              if (((l = i.destroy), null !== r && Nr(r, i.deps)))
                return void (a.memoizedState = $r(t, n, l, r));
            }
            (Er.flags |= e), (a.memoizedState = $r(1 | t, n, l, r));
          }
          function Zr(e, t) {
            return qr(8390656, 8, e, t);
          }
          function Gr(e, t) {
            return Xr(2048, 8, e, t);
          }
          function Kr(e, t) {
            return Xr(4, 2, e, t);
          }
          function Jr(e, t) {
            return Xr(4, 4, e, t);
          }
          function ea(e, t) {
            return "function" == typeof t
              ? ((e = e()),
                t(e),
                function () {
                  t(null);
                })
              : null != t
                ? ((e = e()),
                  (t.current = e),
                  function () {
                    t.current = null;
                  })
                : void 0;
          }
          function ta(e, t, n) {
            return (
              (n = null != n ? n.concat([e]) : null),
              Xr(4, 4, ea.bind(null, t, e), n)
            );
          }
          function na() {}
          function ra(e, t) {
            var n = Rr();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && Nr(t, r[1])
              ? r[0]
              : ((n.memoizedState = [e, t]), e);
          }
          function aa(e, t) {
            var n = Rr();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && Nr(t, r[1])
              ? r[0]
              : ((e = e()), (n.memoizedState = [e, t]), e);
          }
          function la(e, t) {
            var n = Tt;
            (Tt = 0 !== n && 4 > n ? n : 4), e(!0);
            var r = wr.transition;
            wr.transition = {};
            try {
              e(!1), t();
            } finally {
              (Tt = n), (wr.transition = r);
            }
          }
          function ia() {
            return Rr().memoizedState;
          }
          function oa(e, t, n) {
            var r = wi(e);
            (n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
              sa(e)
                ? ca(t, n)
                : (fa(e, t, n),
                  null !== (e = xi(e, r, (n = Si()))) && da(e, t, r));
          }
          function ua(e, t, n) {
            var r = wi(e),
              a = {
                lane: r,
                action: n,
                hasEagerState: !1,
                eagerState: null,
                next: null,
              };
            if (sa(e)) ca(t, a);
            else {
              fa(e, t, a);
              var l = e.alternate;
              if (
                0 === e.lanes &&
                (null === l || 0 === l.lanes) &&
                null !== (l = t.lastRenderedReducer)
              )
                try {
                  var i = t.lastRenderedState,
                    o = l(i, n);
                  if (((a.hasEagerState = !0), (a.eagerState = o), Qt(o, i)))
                    return;
                } catch (u) {}
              null !== (e = xi(e, r, (n = Si()))) && da(e, t, r);
            }
          }
          function sa(e) {
            var t = e.alternate;
            return e === Er || (null !== t && t === Er);
          }
          function ca(e, t) {
            Cr = _r = !0;
            var n = e.pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
          function fa(e, t, n) {
            null !== ql && 0 != (1 & e.mode) && 0 == (2 & Yl)
              ? (null === (e = t.interleaved)
                  ? ((n.next = n), null === dn ? (dn = [t]) : dn.push(t))
                  : ((n.next = e.next), (e.next = n)),
                (t.interleaved = n))
              : (null === (e = t.pending)
                  ? (n.next = n)
                  : ((n.next = e.next), (e.next = n)),
                (t.pending = n));
          }
          function da(e, t, n) {
            if (0 != (4194240 & n)) {
              var r = t.lanes;
              (n |= r &= e.pendingLanes), (t.lanes = n), Nt(e, n);
            }
          }
          var pa = {
              readContext: fn,
              useCallback: Or,
              useContext: Or,
              useEffect: Or,
              useImperativeHandle: Or,
              useInsertionEffect: Or,
              useLayoutEffect: Or,
              useMemo: Or,
              useReducer: Or,
              useRef: Or,
              useState: Or,
              useDebugValue: Or,
              useDeferredValue: Or,
              useTransition: Or,
              useMutableSource: Or,
              useSyncExternalStore: Or,
              useId: Or,
              unstable_isNewReconciler: !1,
            },
            ha = {
              readContext: fn,
              useCallback: function (e, t) {
                return (Lr().memoizedState = [e, void 0 === t ? null : t]), e;
              },
              useContext: fn,
              useEffect: Zr,
              useImperativeHandle: function (e, t, n) {
                return (
                  (n = null != n ? n.concat([e]) : null),
                  qr(4194308, 4, ea.bind(null, t, e), n)
                );
              },
              useLayoutEffect: function (e, t) {
                return qr(4194308, 4, e, t);
              },
              useInsertionEffect: function (e, t) {
                return qr(4, 2, e, t);
              },
              useMemo: function (e, t) {
                var n = Lr();
                return (
                  (t = void 0 === t ? null : t),
                  (e = e()),
                  (n.memoizedState = [e, t]),
                  e
                );
              },
              useReducer: function (e, t, n) {
                var r = Lr();
                return (
                  (t = void 0 !== n ? n(t) : t),
                  (r.memoizedState = r.baseState = t),
                  (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }),
                  (r.queue = e),
                  (e = e.dispatch = oa.bind(null, Er, e)),
                  [r.memoizedState, e]
                );
              },
              useRef: function (e) {
                return (e = {current: e}), (Lr().memoizedState = e);
              },
              useState: Qr,
              useDebugValue: na,
              useDeferredValue: function (e) {
                var t = Qr(e),
                  n = t[0],
                  r = t[1];
                return (
                  Zr(
                    function () {
                      var t = wr.transition;
                      wr.transition = {};
                      try {
                        r(e);
                      } finally {
                        wr.transition = t;
                      }
                    },
                    [e],
                  ),
                  n
                );
              },
              useTransition: function () {
                var e = Qr(!1),
                  t = e[0];
                return (
                  (e = la.bind(null, e[1])), (Lr().memoizedState = e), [t, e]
                );
              },
              useMutableSource: function () {},
              useSyncExternalStore: function (e, t, n) {
                var r = Er,
                  a = Lr();
                if (Vn) {
                  if (void 0 === n) throw Error(i(407));
                  n = n();
                } else {
                  if (((n = t()), null === ql)) throw Error(i(349));
                  0 != (30 & xr) || Hr(r, t, n);
                }
                a.memoizedState = n;
                var l = {value: n, getSnapshot: t};
                return (
                  (a.queue = l),
                  Zr(Br.bind(null, r, l, e), [e]),
                  (r.flags |= 2048),
                  $r(9, Wr.bind(null, r, l, n, t), void 0, null),
                  n
                );
              },
              useId: function () {
                var e = Lr(),
                  t = ql.identifierPrefix;
                if (Vn) {
                  var n = Dn;
                  (t =
                    ":" +
                    t +
                    "R" +
                    (n = (In & ~(1 << (32 - St(In) - 1))).toString(32) + n)),
                    0 < (n = jr++) && (t += "H" + n.toString(32)),
                    (t += ":");
                } else t = ":" + t + "r" + (n = zr++).toString(32) + ":";
                return (e.memoizedState = t);
              },
              unstable_isNewReconciler: !1,
            },
            ma = {
              readContext: fn,
              useCallback: ra,
              useContext: fn,
              useEffect: Gr,
              useImperativeHandle: ta,
              useInsertionEffect: Kr,
              useLayoutEffect: Jr,
              useMemo: aa,
              useReducer: Dr,
              useRef: Yr,
              useState: function () {
                return Dr(Ir);
              },
              useDebugValue: na,
              useDeferredValue: function (e) {
                var t = Dr(Ir),
                  n = t[0],
                  r = t[1];
                return (
                  Gr(
                    function () {
                      var t = wr.transition;
                      wr.transition = {};
                      try {
                        r(e);
                      } finally {
                        wr.transition = t;
                      }
                    },
                    [e],
                  ),
                  n
                );
              },
              useTransition: function () {
                return [Dr(Ir)[0], Rr().memoizedState];
              },
              useMutableSource: Fr,
              useSyncExternalStore: Ur,
              useId: ia,
              unstable_isNewReconciler: !1,
            },
            ga = {
              readContext: fn,
              useCallback: ra,
              useContext: fn,
              useEffect: Gr,
              useImperativeHandle: ta,
              useInsertionEffect: Kr,
              useLayoutEffect: Jr,
              useMemo: aa,
              useReducer: Ar,
              useRef: Yr,
              useState: function () {
                return Ar(Ir);
              },
              useDebugValue: na,
              useDeferredValue: function (e) {
                var t = Ar(Ir),
                  n = t[0],
                  r = t[1];
                return (
                  Gr(
                    function () {
                      var t = wr.transition;
                      wr.transition = {};
                      try {
                        r(e);
                      } finally {
                        wr.transition = t;
                      }
                    },
                    [e],
                  ),
                  n
                );
              },
              useTransition: function () {
                return [Ar(Ir)[0], Rr().memoizedState];
              },
              useMutableSource: Fr,
              useSyncExternalStore: Ur,
              useId: ia,
              unstable_isNewReconciler: !1,
            };
          function va(e, t) {
            try {
              var n = "",
                r = t;
              do {
                (n += Jt(r)), (r = r.return);
              } while (r);
              var a = n;
            } catch (l) {
              a = "\nError generating stack: " + l.message + "\n" + l.stack;
            }
            return {value: e, source: t, stack: a};
          }
          function ba(e, t) {
            try {
              console.error(t.value);
            } catch (n) {
              setTimeout(function () {
                throw n;
              });
            }
          }
          var ya,
            Sa,
            wa,
            xa,
            Ea = "function" == typeof WeakMap ? WeakMap : Map;
          function ka(e, t, n) {
            ((n = gn(-1, n)).tag = 3), (n.payload = {element: null});
            var r = t.value;
            return (
              (n.callback = function () {
                ci || ((ci = !0), (fi = r)), ba(0, t);
              }),
              n
            );
          }
          function Pa(e, t, n) {
            (n = gn(-1, n)).tag = 3;
            var r = e.type.getDerivedStateFromError;
            if ("function" == typeof r) {
              var a = t.value;
              (n.payload = function () {
                return r(a);
              }),
                (n.callback = function () {
                  ba(0, t);
                });
            }
            var l = e.stateNode;
            return (
              null !== l &&
                "function" == typeof l.componentDidCatch &&
                (n.callback = function () {
                  ba(0, t),
                    "function" != typeof r &&
                      (null === di ? (di = new Set([this])) : di.add(this));
                  var e = t.stack;
                  this.componentDidCatch(t.value, {
                    componentStack: null !== e ? e : "",
                  });
                }),
              n
            );
          }
          function _a(e, t, n) {
            var r = e.pingCache;
            if (null === r) {
              r = e.pingCache = new Ea();
              var a = new Set();
              r.set(t, a);
            } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
            a.has(n) || (a.add(n), (e = Qi.bind(null, e, t, n)), t.then(e, e));
          }
          function Ca(e) {
            do {
              var t;
              if (
                ((t = 13 === e.tag) &&
                  (t = null === (t = e.memoizedState) || null !== t.dehydrated),
                t)
              )
                return e;
              e = e.return;
            } while (null !== e);
            return null;
          }
          function ja(e, t, n, r, a) {
            return 0 == (1 & e.mode)
              ? (e === t
                  ? (e.flags |= 65536)
                  : ((e.flags |= 128),
                    (n.flags |= 131072),
                    (n.flags &= -52805),
                    1 === n.tag &&
                      (null === n.alternate
                        ? (n.tag = 17)
                        : (((t = gn(-1, 1)).tag = 2), vn(n, t))),
                    (n.lanes |= 1)),
                e)
              : ((e.flags |= 65536), (e.lanes = a), e);
          }
          function za(e) {
            e.flags |= 4;
          }
          function Oa(e, t) {
            if (null !== e && e.child === t.child) return !0;
            if (0 != (16 & t.flags)) return !1;
            for (e = t.child; null !== e; ) {
              if (0 != (12854 & e.flags) || 0 != (12854 & e.subtreeFlags))
                return !1;
              e = e.sibling;
            }
            return !0;
          }
          if (q)
            (ya = function (e, t) {
              for (var n = t.child; null !== n; ) {
                if (5 === n.tag || 6 === n.tag) F(e, n.stateNode);
                else if (4 !== n.tag && null !== n.child) {
                  (n.child.return = n), (n = n.child);
                  continue;
                }
                if (n === t) break;
                for (; null === n.sibling; ) {
                  if (null === n.return || n.return === t) return;
                  n = n.return;
                }
                (n.sibling.return = n.return), (n = n.sibling);
              }
            }),
              (Sa = function () {}),
              (wa = function (e, t, n, r, a) {
                if ((e = e.memoizedProps) !== r) {
                  var l = t.stateNode,
                    i = fr(ur.current);
                  (n = H(l, n, e, r, a, i)), (t.updateQueue = n) && za(t);
                }
              }),
              (xa = function (e, t, n, r) {
                n !== r && za(t);
              });
          else if (X) {
            ya = function (e, t, n, r) {
              for (var a = t.child; null !== a; ) {
                if (5 === a.tag) {
                  var l = a.stateNode;
                  n && r && (l = Ne(l, a.type, a.memoizedProps, a)), F(e, l);
                } else if (6 === a.tag)
                  (l = a.stateNode),
                    n && r && (l = Te(l, a.memoizedProps, a)),
                    F(e, l);
                else if (4 !== a.tag)
                  if (22 === a.tag && null !== a.memoizedState)
                    null !== (l = a.child) && (l.return = a), ya(e, a, !0, !0);
                  else if (null !== a.child) {
                    (a.child.return = a), (a = a.child);
                    continue;
                  }
                if (a === t) break;
                for (; null === a.sibling; ) {
                  if (null === a.return || a.return === t) return;
                  a = a.return;
                }
                (a.sibling.return = a.return), (a = a.sibling);
              }
            };
            var Na = function (e, t, n, r) {
              for (var a = t.child; null !== a; ) {
                if (5 === a.tag) {
                  var l = a.stateNode;
                  n && r && (l = Ne(l, a.type, a.memoizedProps, a)), je(e, l);
                } else if (6 === a.tag)
                  (l = a.stateNode),
                    n && r && (l = Te(l, a.memoizedProps, a)),
                    je(e, l);
                else if (4 !== a.tag)
                  if (22 === a.tag && null !== a.memoizedState)
                    null !== (l = a.child) && (l.return = a), Na(e, a, !0, !0);
                  else if (null !== a.child) {
                    (a.child.return = a), (a = a.child);
                    continue;
                  }
                if (a === t) break;
                for (; null === a.sibling; ) {
                  if (null === a.return || a.return === t) return;
                  a = a.return;
                }
                (a.sibling.return = a.return), (a = a.sibling);
              }
            };
            (Sa = function (e, t) {
              var n = t.stateNode;
              if (!Oa(e, t)) {
                e = n.containerInfo;
                var r = Ce(e);
                Na(r, t, !1, !1), (n.pendingChildren = r), za(t), ze(e, r);
              }
            }),
              (wa = function (e, t, n, r, a) {
                var l = e.stateNode,
                  i = e.memoizedProps;
                if ((e = Oa(e, t)) && i === r) t.stateNode = l;
                else {
                  var o = t.stateNode,
                    u = fr(ur.current),
                    s = null;
                  i !== r && (s = H(o, n, i, r, a, u)),
                    e && null === s
                      ? (t.stateNode = l)
                      : ((l = _e(l, s, n, i, r, t, e, o)),
                        U(l, n, r, a, u) && za(t),
                        (t.stateNode = l),
                        e ? za(t) : ya(l, t, !1, !1));
                }
              }),
              (xa = function (e, t, n, r) {
                n !== r
                  ? ((e = fr(cr.current)),
                    (n = fr(ur.current)),
                    (t.stateNode = B(r, e, n, t)),
                    za(t))
                  : (t.stateNode = e.stateNode);
              });
          } else
            (Sa = function () {}), (wa = function () {}), (xa = function () {});
          function Ta(e, t) {
            if (!Vn)
              switch (e.tailMode) {
                case "hidden":
                  t = e.tail;
                  for (var n = null; null !== t; )
                    null !== t.alternate && (n = t), (t = t.sibling);
                  null === n ? (e.tail = null) : (n.sibling = null);
                  break;
                case "collapsed":
                  n = e.tail;
                  for (var r = null; null !== n; )
                    null !== n.alternate && (r = n), (n = n.sibling);
                  null === r
                    ? t || null === e.tail
                      ? (e.tail = null)
                      : (e.tail.sibling = null)
                    : (r.sibling = null);
              }
          }
          function Ma(e) {
            var t = null !== e.alternate && e.alternate.child === e.child,
              n = 0,
              r = 0;
            if (t)
              for (var a = e.child; null !== a; )
                (n |= a.lanes | a.childLanes),
                  (r |= 14680064 & a.subtreeFlags),
                  (r |= 14680064 & a.flags),
                  (a.return = e),
                  (a = a.sibling);
            else
              for (a = e.child; null !== a; )
                (n |= a.lanes | a.childLanes),
                  (r |= a.subtreeFlags),
                  (r |= a.flags),
                  (a.return = e),
                  (a = a.sibling);
            return (e.subtreeFlags |= r), (e.childLanes = n), t;
          }
          function La(e, t, n) {
            var r = t.pendingProps;
            switch ((Hn(t), t.tag)) {
              case 2:
              case 16:
              case 15:
              case 0:
              case 11:
              case 7:
              case 8:
              case 12:
              case 9:
              case 14:
                return Ma(t), null;
              case 1:
              case 17:
                return ht(t.type) && mt(), Ma(t), null;
              case 3:
                return (
                  (r = t.stateNode),
                  pr(),
                  ot(ft),
                  ot(ct),
                  yr(),
                  r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                  (null !== e && null !== e.child) ||
                    (Kn(t)
                      ? za(t)
                      : null === e ||
                        (e.memoizedState.isDehydrated &&
                          0 == (256 & t.flags)) ||
                        ((t.flags |= 1024),
                        null !== $n && (Ci($n), ($n = null)))),
                  Sa(e, t),
                  Ma(t),
                  null
                );
              case 5:
                mr(t), (n = fr(cr.current));
                var a = t.type;
                if (null !== e && null != t.stateNode)
                  wa(e, t, a, r, n),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
                else {
                  if (!r) {
                    if (null === t.stateNode) throw Error(i(166));
                    return Ma(t), null;
                  }
                  if (((e = fr(ur.current)), Kn(t))) {
                    if (!Z) throw Error(i(175));
                    (e = Be(
                      t.stateNode,
                      t.type,
                      t.memoizedProps,
                      n,
                      e,
                      t,
                      !Qn,
                    )),
                      (t.updateQueue = e),
                      null !== e && za(t);
                  } else {
                    var l = A(a, r, n, e, t);
                    ya(l, t, !1, !1),
                      (t.stateNode = l),
                      U(l, a, r, n, e) && za(t);
                  }
                  null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
                }
                return Ma(t), null;
              case 6:
                if (e && null != t.stateNode) xa(e, t, e.memoizedProps, r);
                else {
                  if ("string" != typeof r && null === t.stateNode)
                    throw Error(i(166));
                  if (((e = fr(cr.current)), (n = fr(ur.current)), Kn(t))) {
                    if (!Z) throw Error(i(176));
                    if (
                      ((e = t.stateNode),
                      (r = t.memoizedProps),
                      (n = Ve(e, r, t, !Qn)) && null !== (a = Wn))
                    )
                      switch (((l = 0 != (1 & a.mode)), a.tag)) {
                        case 3:
                          Ke(a.stateNode.containerInfo, e, r, l);
                          break;
                        case 5:
                          Je(a.type, a.memoizedProps, a.stateNode, e, r, l);
                      }
                    n && za(t);
                  } else t.stateNode = B(r, e, n, t);
                }
                return Ma(t), null;
              case 13:
                if (
                  (ot(gr),
                  (r = t.memoizedState),
                  Vn &&
                    null !== Bn &&
                    0 != (1 & t.mode) &&
                    0 == (128 & t.flags))
                ) {
                  for (e = Bn; e; ) e = Fe(e);
                  return Jn(), (t.flags |= 98560), t;
                }
                if (null !== r && null !== r.dehydrated) {
                  if (((r = Kn(t)), null === e)) {
                    if (!r) throw Error(i(318));
                    if (!Z) throw Error(i(344));
                    if (
                      !(e =
                        null !== (e = t.memoizedState) ? e.dehydrated : null)
                    )
                      throw Error(i(317));
                    Qe(e, t);
                  } else
                    Jn(),
                      0 == (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  return Ma(t), null;
                }
                return (
                  null !== $n && (Ci($n), ($n = null)),
                  0 != (128 & t.flags)
                    ? ((t.lanes = n), t)
                    : ((r = null !== r),
                      (n = !1),
                      null === e ? Kn(t) : (n = null !== e.memoizedState),
                      r &&
                        !n &&
                        ((t.child.flags |= 8192),
                        0 != (1 & t.mode) &&
                          (null === e || 0 != (1 & gr.current)
                            ? 0 === Jl && (Jl = 3)
                            : Ri())),
                      null !== t.updateQueue && (t.flags |= 4),
                      Ma(t),
                      null)
                );
              case 4:
                return (
                  pr(),
                  Sa(e, t),
                  null === e && K(t.stateNode.containerInfo),
                  Ma(t),
                  null
                );
              case 10:
                return un(t.type._context), Ma(t), null;
              case 19:
                if ((ot(gr), null === (a = t.memoizedState)))
                  return Ma(t), null;
                if (((r = 0 != (128 & t.flags)), null === (l = a.rendering)))
                  if (r) Ta(a, !1);
                  else {
                    if (0 !== Jl || (null !== e && 0 != (128 & e.flags)))
                      for (e = t.child; null !== e; ) {
                        if (null !== (l = vr(e))) {
                          for (
                            t.flags |= 128,
                              Ta(a, !1),
                              null !== (e = l.updateQueue) &&
                                ((t.updateQueue = e), (t.flags |= 4)),
                              t.subtreeFlags = 0,
                              e = n,
                              r = t.child;
                            null !== r;

                          )
                            (a = e),
                              ((n = r).flags &= 14680066),
                              null === (l = n.alternate)
                                ? ((n.childLanes = 0),
                                  (n.lanes = a),
                                  (n.child = null),
                                  (n.subtreeFlags = 0),
                                  (n.memoizedProps = null),
                                  (n.memoizedState = null),
                                  (n.updateQueue = null),
                                  (n.dependencies = null),
                                  (n.stateNode = null))
                                : ((n.childLanes = l.childLanes),
                                  (n.lanes = l.lanes),
                                  (n.child = l.child),
                                  (n.subtreeFlags = 0),
                                  (n.deletions = null),
                                  (n.memoizedProps = l.memoizedProps),
                                  (n.memoizedState = l.memoizedState),
                                  (n.updateQueue = l.updateQueue),
                                  (n.type = l.type),
                                  (a = l.dependencies),
                                  (n.dependencies =
                                    null === a
                                      ? null
                                      : {
                                          lanes: a.lanes,
                                          firstContext: a.firstContext,
                                        })),
                              (r = r.sibling);
                          return ut(gr, (1 & gr.current) | 2), t.child;
                        }
                        e = e.sibling;
                      }
                    null !== a.tail &&
                      At() > oi &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ta(a, !1),
                      (t.lanes = 4194304));
                  }
                else {
                  if (!r)
                    if (null !== (e = vr(l))) {
                      if (
                        ((t.flags |= 128),
                        (r = !0),
                        null !== (e = e.updateQueue) &&
                          ((t.updateQueue = e), (t.flags |= 4)),
                        Ta(a, !0),
                        null === a.tail &&
                          "hidden" === a.tailMode &&
                          !l.alternate &&
                          !Vn)
                      )
                        return Ma(t), null;
                    } else
                      2 * At() - a.renderingStartTime > oi &&
                        1073741824 !== n &&
                        ((t.flags |= 128),
                        (r = !0),
                        Ta(a, !1),
                        (t.lanes = 4194304));
                  a.isBackwards
                    ? ((l.sibling = t.child), (t.child = l))
                    : (null !== (e = a.last) ? (e.sibling = l) : (t.child = l),
                      (a.last = l));
                }
                return null !== a.tail
                  ? ((t = a.tail),
                    (a.rendering = t),
                    (a.tail = t.sibling),
                    (a.renderingStartTime = At()),
                    (t.sibling = null),
                    (e = gr.current),
                    ut(gr, r ? (1 & e) | 2 : 1 & e),
                    t)
                  : (Ma(t), null);
              case 22:
              case 23:
                return (
                  Ni(),
                  (r = null !== t.memoizedState),
                  null !== e &&
                    (null !== e.memoizedState) !== r &&
                    (t.flags |= 8192),
                  r && 0 != (1 & t.mode)
                    ? 0 != (1073741824 & Gl) &&
                      (Ma(t), q && 6 & t.subtreeFlags && (t.flags |= 8192))
                    : Ma(t),
                  null
                );
              case 24:
              case 25:
                return null;
            }
            throw Error(i(156, t.tag));
          }
          var Ra = o.ReactCurrentOwner,
            Ia = !1;
          function Da(e, t, n, r) {
            t.child = null === e ? ir(t, null, n, r) : lr(t, e.child, n, r);
          }
          function Aa(e, t, n, r, a) {
            n = n.render;
            var l = t.ref;
            return (
              cn(t, a),
              (r = Tr(e, t, n, r, l, a)),
              (n = Mr()),
              null === e || Ia
                ? (Vn && n && Un(t), (t.flags |= 1), Da(e, t, r, a), t.child)
                : ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~a),
                  al(e, t, a))
            );
          }
          function Fa(e, t, n, r, a) {
            if (null === e) {
              var l = n.type;
              return "function" != typeof l ||
                Ki(l) ||
                void 0 !== l.defaultProps ||
                null !== n.compare ||
                void 0 !== n.defaultProps
                ? (((e = eo(n.type, null, r, t, t.mode, a)).ref = t.ref),
                  (e.return = t),
                  (t.child = e))
                : ((t.tag = 15), (t.type = l), Ua(e, t, l, r, a));
            }
            if (((l = e.child), 0 == (e.lanes & a))) {
              var i = l.memoizedProps;
              if (
                (n = null !== (n = n.compare) ? n : Kt)(i, r) &&
                e.ref === t.ref
              )
                return al(e, t, a);
            }
            return (
              (t.flags |= 1),
              ((e = Ji(l, r)).ref = t.ref),
              (e.return = t),
              (t.child = e)
            );
          }
          function Ua(e, t, n, r, a) {
            if (null !== e && Kt(e.memoizedProps, r) && e.ref === t.ref) {
              if (((Ia = !1), 0 == (e.lanes & a)))
                return (t.lanes = e.lanes), al(e, t, a);
              0 != (131072 & e.flags) && (Ia = !0);
            }
            return Ba(e, t, n, r, a);
          }
          function Ha(e, t, n) {
            var r = t.pendingProps,
              a = r.children,
              l = null !== e ? e.memoizedState : null;
            if ("hidden" === r.mode)
              if (0 == (1 & t.mode))
                (t.memoizedState = {baseLanes: 0, cachePool: null}),
                  ut(Kl, Gl),
                  (Gl |= n);
              else {
                if (0 == (1073741824 & n))
                  return (
                    (e = null !== l ? l.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {baseLanes: e, cachePool: null}),
                    (t.updateQueue = null),
                    ut(Kl, Gl),
                    (Gl |= e),
                    null
                  );
                (t.memoizedState = {baseLanes: 0, cachePool: null}),
                  (r = null !== l ? l.baseLanes : n),
                  ut(Kl, Gl),
                  (Gl |= r);
              }
            else
              null !== l
                ? ((r = l.baseLanes | n), (t.memoizedState = null))
                : (r = n),
                ut(Kl, Gl),
                (Gl |= r);
            return Da(e, t, a, n), t.child;
          }
          function Wa(e, t) {
            var n = t.ref;
            ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
              ((t.flags |= 512), (t.flags |= 2097152));
          }
          function Ba(e, t, n, r, a) {
            var l = ht(n) ? dt : ct.current;
            return (
              (l = pt(t, l)),
              cn(t, a),
              (n = Tr(e, t, n, r, l, a)),
              (r = Mr()),
              null === e || Ia
                ? (Vn && r && Un(t), (t.flags |= 1), Da(e, t, n, a), t.child)
                : ((t.updateQueue = e.updateQueue),
                  (t.flags &= -2053),
                  (e.lanes &= ~a),
                  al(e, t, a))
            );
          }
          function Va(e, t, n, r, a) {
            if (ht(n)) {
              var l = !0;
              bt(t);
            } else l = !1;
            if ((cn(t, a), null === t.stateNode))
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                _n(t, n, r),
                jn(t, n, r, a),
                (r = !0);
            else if (null === e) {
              var i = t.stateNode,
                o = t.memoizedProps;
              i.props = o;
              var u = i.context,
                s = n.contextType;
              "object" == typeof s && null !== s
                ? (s = fn(s))
                : (s = pt(t, (s = ht(n) ? dt : ct.current)));
              var c = n.getDerivedStateFromProps,
                f =
                  "function" == typeof c ||
                  "function" == typeof i.getSnapshotBeforeUpdate;
              f ||
                ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof i.componentWillReceiveProps) ||
                ((o !== r || u !== s) && Cn(t, i, r, s)),
                (pn = !1);
              var d = t.memoizedState;
              (i.state = d),
                Sn(t, r, i, a),
                (u = t.memoizedState),
                o !== r || d !== u || ft.current || pn
                  ? ("function" == typeof c &&
                      (En(t, n, c, r), (u = t.memoizedState)),
                    (o = pn || Pn(t, n, o, r, d, u, s))
                      ? (f ||
                          ("function" != typeof i.UNSAFE_componentWillMount &&
                            "function" != typeof i.componentWillMount) ||
                          ("function" == typeof i.componentWillMount &&
                            i.componentWillMount(),
                          "function" == typeof i.UNSAFE_componentWillMount &&
                            i.UNSAFE_componentWillMount()),
                        "function" == typeof i.componentDidMount &&
                          (t.flags |= 4194308))
                      : ("function" == typeof i.componentDidMount &&
                          (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = u)),
                    (i.props = r),
                    (i.state = u),
                    (i.context = s),
                    (r = o))
                  : ("function" == typeof i.componentDidMount &&
                      (t.flags |= 4194308),
                    (r = !1));
            } else {
              (i = t.stateNode),
                mn(e, t),
                (o = t.memoizedProps),
                (s = t.type === t.elementType ? o : en(t.type, o)),
                (i.props = s),
                (f = t.pendingProps),
                (d = i.context),
                "object" == typeof (u = n.contextType) && null !== u
                  ? (u = fn(u))
                  : (u = pt(t, (u = ht(n) ? dt : ct.current)));
              var p = n.getDerivedStateFromProps;
              (c =
                "function" == typeof p ||
                "function" == typeof i.getSnapshotBeforeUpdate) ||
                ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof i.componentWillReceiveProps) ||
                ((o !== f || d !== u) && Cn(t, i, r, u)),
                (pn = !1),
                (d = t.memoizedState),
                (i.state = d),
                Sn(t, r, i, a);
              var h = t.memoizedState;
              o !== f || d !== h || ft.current || pn
                ? ("function" == typeof p &&
                    (En(t, n, p, r), (h = t.memoizedState)),
                  (s = pn || Pn(t, n, s, r, d, h, u) || !1)
                    ? (c ||
                        ("function" != typeof i.UNSAFE_componentWillUpdate &&
                          "function" != typeof i.componentWillUpdate) ||
                        ("function" == typeof i.componentWillUpdate &&
                          i.componentWillUpdate(r, h, u),
                        "function" == typeof i.UNSAFE_componentWillUpdate &&
                          i.UNSAFE_componentWillUpdate(r, h, u)),
                      "function" == typeof i.componentDidUpdate &&
                        (t.flags |= 4),
                      "function" == typeof i.getSnapshotBeforeUpdate &&
                        (t.flags |= 1024))
                    : ("function" != typeof i.componentDidUpdate ||
                        (o === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                      "function" != typeof i.getSnapshotBeforeUpdate ||
                        (o === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 1024),
                      (t.memoizedProps = r),
                      (t.memoizedState = h)),
                  (i.props = r),
                  (i.state = h),
                  (i.context = u),
                  (r = s))
                : ("function" != typeof i.componentDidUpdate ||
                    (o === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" != typeof i.getSnapshotBeforeUpdate ||
                    (o === e.memoizedProps && d === e.memoizedState) ||
                    (t.flags |= 1024),
                  (r = !1));
            }
            return Qa(e, t, n, r, l, a);
          }
          function Qa(e, t, n, r, a, l) {
            Wa(e, t);
            var i = 0 != (128 & t.flags);
            if (!r && !i) return a && yt(t, n, !1), al(e, t, l);
            (r = t.stateNode), (Ra.current = t);
            var o =
              i && "function" != typeof n.getDerivedStateFromError
                ? null
                : r.render();
            return (
              (t.flags |= 1),
              null !== e && i
                ? ((t.child = lr(t, e.child, null, l)),
                  (t.child = lr(t, null, o, l)))
                : Da(e, t, o, l),
              (t.memoizedState = r.state),
              a && yt(t, n, !0),
              t.child
            );
          }
          function $a(e) {
            var t = e.stateNode;
            t.pendingContext
              ? gt(0, t.pendingContext, t.pendingContext !== t.context)
              : t.context && gt(0, t.context, !1),
              dr(e, t.containerInfo);
          }
          function Ya(e, t, n, r, a) {
            return Jn(), er(a), (t.flags |= 256), Da(e, t, n, r), t.child;
          }
          var qa = {dehydrated: null, treeContext: null, retryLane: 0};
          function Xa(e) {
            return {baseLanes: e, cachePool: null};
          }
          function Za(e, t, n) {
            var r,
              a = t.pendingProps,
              l = gr.current,
              o = !1,
              u = 0 != (128 & t.flags);
            if (
              ((r = u) ||
                (r = (null === e || null !== e.memoizedState) && 0 != (2 & l)),
              r
                ? ((o = !0), (t.flags &= -129))
                : (null !== e && null === e.memoizedState) || (l |= 1),
              ut(gr, 1 & l),
              null === e)
            )
              return (
                Zn(t),
                null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                  ? (0 == (1 & t.mode)
                      ? (t.lanes = 1)
                      : De(e)
                        ? (t.lanes = 8)
                        : (t.lanes = 1073741824),
                    null)
                  : ((l = a.children),
                    (e = a.fallback),
                    o
                      ? ((a = t.mode),
                        (o = t.child),
                        (l = {mode: "hidden", children: l}),
                        0 == (1 & a) && null !== o
                          ? ((o.childLanes = 0), (o.pendingProps = l))
                          : (o = no(l, a, 0, null)),
                        (e = to(e, a, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = Xa(n)),
                        (t.memoizedState = qa),
                        e)
                      : Ga(t, l))
              );
            if (null !== (l = e.memoizedState)) {
              if (null !== (r = l.dehydrated)) {
                if (u)
                  return 256 & t.flags
                    ? ((t.flags &= -257), el(e, t, n, Error(i(422))))
                    : null !== t.memoizedState
                      ? ((t.child = e.child), (t.flags |= 128), null)
                      : ((o = a.fallback),
                        (l = t.mode),
                        (a = no(
                          {mode: "visible", children: a.children},
                          l,
                          0,
                          null,
                        )),
                        ((o = to(o, l, n, null)).flags |= 2),
                        (a.return = t),
                        (o.return = t),
                        (a.sibling = o),
                        (t.child = a),
                        0 != (1 & t.mode) && lr(t, e.child, null, n),
                        (t.child.memoizedState = Xa(n)),
                        (t.memoizedState = qa),
                        o);
                if (0 == (1 & t.mode)) t = el(e, t, n, null);
                else if (De(r)) t = el(e, t, n, Error(i(419)));
                else if (((a = 0 != (n & e.childLanes)), Ia || a)) {
                  if (null !== (a = ql)) {
                    switch (n & -n) {
                      case 4:
                        o = 2;
                        break;
                      case 16:
                        o = 8;
                        break;
                      case 64:
                      case 128:
                      case 256:
                      case 512:
                      case 1024:
                      case 2048:
                      case 4096:
                      case 8192:
                      case 16384:
                      case 32768:
                      case 65536:
                      case 131072:
                      case 262144:
                      case 524288:
                      case 1048576:
                      case 2097152:
                      case 4194304:
                      case 8388608:
                      case 16777216:
                      case 33554432:
                      case 67108864:
                        o = 32;
                        break;
                      case 536870912:
                        o = 268435456;
                        break;
                      default:
                        o = 0;
                    }
                    0 !== (a = 0 != (o & (a.suspendedLanes | n)) ? 0 : o) &&
                      a !== l.retryLane &&
                      ((l.retryLane = a), xi(e, a, -1));
                  }
                  Ri(), (t = el(e, t, n, Error(i(421))));
                } else
                  Ie(r)
                    ? ((t.flags |= 128),
                      (t.child = e.child),
                      (t = Yi.bind(null, e)),
                      Ae(r, t),
                      (t = null))
                    : ((n = l.treeContext),
                      Z &&
                        ((Bn = We(r)),
                        (Wn = t),
                        (Vn = !0),
                        ($n = null),
                        (Qn = !1),
                        null !== n &&
                          ((Mn[Ln++] = In),
                          (Mn[Ln++] = Dn),
                          (Mn[Ln++] = Rn),
                          (In = n.id),
                          (Dn = n.overflow),
                          (Rn = t))),
                      ((t = Ga(t, t.pendingProps.children)).flags |= 4096));
                return t;
              }
              return o
                ? ((a = Ja(e, t, a.children, a.fallback, n)),
                  (o = t.child),
                  (l = e.child.memoizedState),
                  (o.memoizedState =
                    null === l
                      ? Xa(n)
                      : {baseLanes: l.baseLanes | n, cachePool: null}),
                  (o.childLanes = e.childLanes & ~n),
                  (t.memoizedState = qa),
                  a)
                : ((n = Ka(e, t, a.children, n)), (t.memoizedState = null), n);
            }
            return o
              ? ((a = Ja(e, t, a.children, a.fallback, n)),
                (o = t.child),
                (l = e.child.memoizedState),
                (o.memoizedState =
                  null === l
                    ? Xa(n)
                    : {baseLanes: l.baseLanes | n, cachePool: null}),
                (o.childLanes = e.childLanes & ~n),
                (t.memoizedState = qa),
                a)
              : ((n = Ka(e, t, a.children, n)), (t.memoizedState = null), n);
          }
          function Ga(e, t) {
            return (
              ((t = no(
                {mode: "visible", children: t},
                e.mode,
                0,
                null,
              )).return = e),
              (e.child = t)
            );
          }
          function Ka(e, t, n, r) {
            var a = e.child;
            return (
              (e = a.sibling),
              (n = Ji(a, {mode: "visible", children: n})),
              0 == (1 & t.mode) && (n.lanes = r),
              (n.return = t),
              (n.sibling = null),
              null !== e &&
                (null === (r = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : r.push(e)),
              (t.child = n)
            );
          }
          function Ja(e, t, n, r, a) {
            var l = t.mode,
              i = (e = e.child).sibling,
              o = {mode: "hidden", children: n};
            return (
              0 == (1 & l) && t.child !== e
                ? (((n = t.child).childLanes = 0),
                  (n.pendingProps = o),
                  (t.deletions = null))
                : ((n = Ji(e, o)).subtreeFlags = 14680064 & e.subtreeFlags),
              null !== i
                ? (r = Ji(i, r))
                : ((r = to(r, l, a, null)).flags |= 2),
              (r.return = t),
              (n.return = t),
              (n.sibling = r),
              (t.child = n),
              r
            );
          }
          function el(e, t, n, r) {
            return (
              null !== r && er(r),
              lr(t, e.child, null, n),
              ((e = Ga(t, t.pendingProps.children)).flags |= 2),
              (t.memoizedState = null),
              e
            );
          }
          function tl(e, t, n) {
            e.lanes |= t;
            var r = e.alternate;
            null !== r && (r.lanes |= t), sn(e.return, t, n);
          }
          function nl(e, t, n, r, a) {
            var l = e.memoizedState;
            null === l
              ? (e.memoizedState = {
                  isBackwards: t,
                  rendering: null,
                  renderingStartTime: 0,
                  last: r,
                  tail: n,
                  tailMode: a,
                })
              : ((l.isBackwards = t),
                (l.rendering = null),
                (l.renderingStartTime = 0),
                (l.last = r),
                (l.tail = n),
                (l.tailMode = a));
          }
          function rl(e, t, n) {
            var r = t.pendingProps,
              a = r.revealOrder,
              l = r.tail;
            if ((Da(e, t, r.children, n), 0 != (2 & (r = gr.current))))
              (r = (1 & r) | 2), (t.flags |= 128);
            else {
              if (null !== e && 0 != (128 & e.flags))
                e: for (e = t.child; null !== e; ) {
                  if (13 === e.tag) null !== e.memoizedState && tl(e, n, t);
                  else if (19 === e.tag) tl(e, n, t);
                  else if (null !== e.child) {
                    (e.child.return = e), (e = e.child);
                    continue;
                  }
                  if (e === t) break e;
                  for (; null === e.sibling; ) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return;
                  }
                  (e.sibling.return = e.return), (e = e.sibling);
                }
              r &= 1;
            }
            if ((ut(gr, r), 0 == (1 & t.mode))) t.memoizedState = null;
            else
              switch (a) {
                case "forwards":
                  for (n = t.child, a = null; null !== n; )
                    null !== (e = n.alternate) && null === vr(e) && (a = n),
                      (n = n.sibling);
                  null === (n = a)
                    ? ((a = t.child), (t.child = null))
                    : ((a = n.sibling), (n.sibling = null)),
                    nl(t, !1, a, n, l);
                  break;
                case "backwards":
                  for (n = null, a = t.child, t.child = null; null !== a; ) {
                    if (null !== (e = a.alternate) && null === vr(e)) {
                      t.child = a;
                      break;
                    }
                    (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                  }
                  nl(t, !0, n, null, l);
                  break;
                case "together":
                  nl(t, !1, null, null, void 0);
                  break;
                default:
                  t.memoizedState = null;
              }
            return t.child;
          }
          function al(e, t, n) {
            if (
              (null !== e && (t.dependencies = e.dependencies),
              (ti |= t.lanes),
              0 == (n & t.childLanes))
            )
              return null;
            if (null !== e && t.child !== e.child) throw Error(i(153));
            if (null !== t.child) {
              for (
                n = Ji((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = Ji(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          function ll(e, t) {
            switch ((Hn(t), t.tag)) {
              case 1:
                return (
                  ht(t.type) && mt(),
                  65536 & (e = t.flags)
                    ? ((t.flags = (-65537 & e) | 128), t)
                    : null
                );
              case 3:
                return (
                  pr(),
                  ot(ft),
                  ot(ct),
                  yr(),
                  0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                    ? ((t.flags = (-65537 & e) | 128), t)
                    : null
                );
              case 5:
                return mr(t), null;
              case 13:
                if (
                  (ot(gr),
                  null !== (e = t.memoizedState) && null !== e.dehydrated)
                ) {
                  if (null === t.alternate) throw Error(i(340));
                  Jn();
                }
                return 65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null;
              case 19:
                return ot(gr), null;
              case 4:
                return pr(), null;
              case 10:
                return un(t.type._context), null;
              case 22:
              case 23:
                return Ni(), null;
              default:
                return null;
            }
          }
          var il = !1,
            ol = !1,
            ul = "function" == typeof WeakSet ? WeakSet : Set,
            sl = null;
          function cl(e, t) {
            var n = e.ref;
            if (null !== n)
              if ("function" == typeof n)
                try {
                  n(null);
                } catch (r) {
                  Vi(e, t, r);
                }
              else n.current = null;
          }
          function fl(e, t, n) {
            try {
              n();
            } catch (r) {
              Vi(e, t, r);
            }
          }
          var dl = !1;
          function pl(e, t, n) {
            var r = t.updateQueue;
            if (null !== (r = null !== r ? r.lastEffect : null)) {
              var a = (r = r.next);
              do {
                if ((a.tag & e) === e) {
                  var l = a.destroy;
                  (a.destroy = void 0), void 0 !== l && fl(t, n, l);
                }
                a = a.next;
              } while (a !== r);
            }
          }
          function hl(e, t) {
            if (
              null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
            ) {
              var n = (t = t.next);
              do {
                if ((n.tag & e) === e) {
                  var r = n.create;
                  n.destroy = r();
                }
                n = n.next;
              } while (n !== t);
            }
          }
          function ml(e) {
            var t = e.ref;
            if (null !== t) {
              var n = e.stateNode;
              if (5 === e.tag) e = M(n);
              else e = n;
              "function" == typeof t ? t(e) : (t.current = e);
            }
          }
          function gl(e, t, n) {
            if (Vt && "function" == typeof Vt.onCommitFiberUnmount)
              try {
                Vt.onCommitFiberUnmount(Bt, t);
              } catch (i) {}
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                if (
                  null !== (e = t.updateQueue) &&
                  null !== (e = e.lastEffect)
                ) {
                  var r = (e = e.next);
                  do {
                    var a = r,
                      l = a.destroy;
                    (a = a.tag),
                      void 0 !== l &&
                        (0 != (2 & a) || 0 != (4 & a)) &&
                        fl(t, n, l),
                      (r = r.next);
                  } while (r !== e);
                }
                break;
              case 1:
                if (
                  (cl(t, n),
                  "function" == typeof (e = t.stateNode).componentWillUnmount)
                )
                  try {
                    (e.props = t.memoizedProps),
                      (e.state = t.memoizedState),
                      e.componentWillUnmount();
                  } catch (i) {
                    Vi(t, n, i);
                  }
                break;
              case 5:
                cl(t, n);
                break;
              case 4:
                q
                  ? kl(e, t, n)
                  : X &&
                    X &&
                    ((t = t.stateNode.containerInfo), (n = Ce(t)), Oe(t, n));
            }
          }
          function vl(e, t, n) {
            for (var r = t; ; )
              if ((gl(e, r, n), null === r.child || (q && 4 === r.tag))) {
                if (r === t) break;
                for (; null === r.sibling; ) {
                  if (null === r.return || r.return === t) return;
                  r = r.return;
                }
                (r.sibling.return = r.return), (r = r.sibling);
              } else (r.child.return = r), (r = r.child);
          }
          function bl(e) {
            var t = e.alternate;
            null !== t && ((e.alternate = null), bl(t)),
              (e.child = null),
              (e.deletions = null),
              (e.sibling = null),
              5 === e.tag && null !== (t = e.stateNode) && ee(t),
              (e.stateNode = null),
              (e.return = null),
              (e.dependencies = null),
              (e.memoizedProps = null),
              (e.memoizedState = null),
              (e.pendingProps = null),
              (e.stateNode = null),
              (e.updateQueue = null);
          }
          function yl(e) {
            return 5 === e.tag || 3 === e.tag || 4 === e.tag;
          }
          function Sl(e) {
            e: for (;;) {
              for (; null === e.sibling; ) {
                if (null === e.return || yl(e.return)) return null;
                e = e.return;
              }
              for (
                e.sibling.return = e.return, e = e.sibling;
                5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

              ) {
                if (2 & e.flags) continue e;
                if (null === e.child || 4 === e.tag) continue e;
                (e.child.return = e), (e = e.child);
              }
              if (!(2 & e.flags)) return e.stateNode;
            }
          }
          function wl(e) {
            if (q) {
              e: {
                for (var t = e.return; null !== t; ) {
                  if (yl(t)) break e;
                  t = t.return;
                }
                throw Error(i(160));
              }
              var n = t;
              switch (n.tag) {
                case 5:
                  (t = n.stateNode),
                    32 & n.flags && (Se(t), (n.flags &= -33)),
                    El(e, (n = Sl(e)), t);
                  break;
                case 3:
                case 4:
                  (t = n.stateNode.containerInfo), xl(e, (n = Sl(e)), t);
                  break;
                default:
                  throw Error(i(161));
              }
            }
          }
          function xl(e, t, n) {
            var r = e.tag;
            if (5 === r || 6 === r)
              (e = e.stateNode), t ? ve(n, e, t) : de(n, e);
            else if (4 !== r && null !== (e = e.child))
              for (xl(e, t, n), e = e.sibling; null !== e; )
                xl(e, t, n), (e = e.sibling);
          }
          function El(e, t, n) {
            var r = e.tag;
            if (5 === r || 6 === r)
              (e = e.stateNode), t ? ge(n, e, t) : fe(n, e);
            else if (4 !== r && null !== (e = e.child))
              for (El(e, t, n), e = e.sibling; null !== e; )
                El(e, t, n), (e = e.sibling);
          }
          function kl(e, t, n) {
            for (var r, a, l = t, o = !1; ; ) {
              if (!o) {
                o = l.return;
                e: for (;;) {
                  if (null === o) throw Error(i(160));
                  switch (((r = o.stateNode), o.tag)) {
                    case 5:
                      a = !1;
                      break e;
                    case 3:
                    case 4:
                      (r = r.containerInfo), (a = !0);
                      break e;
                  }
                  o = o.return;
                }
                o = !0;
              }
              if (5 === l.tag || 6 === l.tag)
                vl(e, l, n), a ? ye(r, l.stateNode) : be(r, l.stateNode);
              else if (18 === l.tag)
                a ? Ze(r, l.stateNode) : Xe(r, l.stateNode);
              else if (4 === l.tag) {
                if (null !== l.child) {
                  (r = l.stateNode.containerInfo),
                    (a = !0),
                    (l.child.return = l),
                    (l = l.child);
                  continue;
                }
              } else if ((gl(e, l, n), null !== l.child)) {
                (l.child.return = l), (l = l.child);
                continue;
              }
              if (l === t) break;
              for (; null === l.sibling; ) {
                if (null === l.return || l.return === t) return;
                4 === (l = l.return).tag && (o = !1);
              }
              (l.sibling.return = l.return), (l = l.sibling);
            }
          }
          function Pl(e, t) {
            if (q) {
              switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  return pl(3, t, t.return), hl(3, t), void pl(5, t, t.return);
                case 1:
                case 12:
                case 17:
                  return;
                case 5:
                  var n = t.stateNode;
                  if (null != n) {
                    var r = t.memoizedProps;
                    e = null !== e ? e.memoizedProps : r;
                    var a = t.type,
                      l = t.updateQueue;
                    (t.updateQueue = null), null !== l && me(n, l, a, e, r, t);
                  }
                  return;
                case 6:
                  if (null === t.stateNode) throw Error(i(162));
                  return (
                    (n = t.memoizedProps),
                    void pe(t.stateNode, null !== e ? e.memoizedProps : n, n)
                  );
                case 3:
                  return void (
                    Z &&
                    null !== e &&
                    e.memoizedState.isDehydrated &&
                    Ye(t.stateNode.containerInfo)
                  );
                case 13:
                case 19:
                  return void _l(t);
              }
              throw Error(i(163));
            }
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                return pl(3, t, t.return), hl(3, t), void pl(5, t, t.return);
              case 12:
              case 22:
              case 23:
                return;
              case 13:
              case 19:
                return void _l(t);
              case 3:
                Z &&
                  null !== e &&
                  e.memoizedState.isDehydrated &&
                  Ye(t.stateNode.containerInfo);
            }
            e: if (X) {
              switch (t.tag) {
                case 1:
                case 5:
                case 6:
                  break e;
                case 3:
                case 4:
                  (t = t.stateNode), Oe(t.containerInfo, t.pendingChildren);
                  break e;
              }
              throw Error(i(163));
            }
          }
          function _l(e) {
            var t = e.updateQueue;
            if (null !== t) {
              e.updateQueue = null;
              var n = e.stateNode;
              null === n && (n = e.stateNode = new ul()),
                t.forEach(function (t) {
                  var r = qi.bind(null, e, t);
                  n.has(t) || (n.add(t), t.then(r, r));
                });
            }
          }
          function Cl(e, t, n) {
            (sl = e), jl(e, t, n);
          }
          function jl(e, t, n) {
            for (var r = 0 != (1 & e.mode); null !== sl; ) {
              var a = sl,
                l = a.child;
              if (22 === a.tag && r) {
                var i = null !== a.memoizedState || il;
                if (!i) {
                  var o = a.alternate,
                    u = (null !== o && null !== o.memoizedState) || ol;
                  o = il;
                  var s = ol;
                  if (((il = i), (ol = u) && !s))
                    for (sl = a; null !== sl; )
                      (u = (i = sl).child),
                        22 === i.tag && null !== i.memoizedState
                          ? Nl(a)
                          : null !== u
                            ? ((u.return = i), (sl = u))
                            : Nl(a);
                  for (; null !== l; ) (sl = l), jl(l, t, n), (l = l.sibling);
                  (sl = a), (il = o), (ol = s);
                }
                zl(e);
              } else
                0 != (8772 & a.subtreeFlags) && null !== l
                  ? ((l.return = a), (sl = l))
                  : zl(e);
            }
          }
          function zl(e) {
            for (; null !== sl; ) {
              var t = sl;
              if (0 != (8772 & t.flags)) {
                var n = t.alternate;
                try {
                  if (0 != (8772 & t.flags))
                    switch (t.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ol || hl(5, t);
                        break;
                      case 1:
                        var r = t.stateNode;
                        if (4 & t.flags && !ol)
                          if (null === n) r.componentDidMount();
                          else {
                            var a =
                              t.elementType === t.type
                                ? n.memoizedProps
                                : en(t.type, n.memoizedProps);
                            r.componentDidUpdate(
                              a,
                              n.memoizedState,
                              r.__reactInternalSnapshotBeforeUpdate,
                            );
                          }
                        var l = t.updateQueue;
                        null !== l && wn(t, l, r);
                        break;
                      case 3:
                        var o = t.updateQueue;
                        if (null !== o) {
                          if (((n = null), null !== t.child))
                            switch (t.child.tag) {
                              case 5:
                                n = M(t.child.stateNode);
                                break;
                              case 1:
                                n = t.child.stateNode;
                            }
                          wn(t, o, n);
                        }
                        break;
                      case 5:
                        var u = t.stateNode;
                        null === n &&
                          4 & t.flags &&
                          he(u, t.type, t.memoizedProps, t);
                        break;
                      case 6:
                      case 4:
                      case 12:
                      case 19:
                      case 17:
                      case 21:
                      case 22:
                      case 23:
                        break;
                      case 13:
                        if (Z && null === t.memoizedState) {
                          var s = t.alternate;
                          if (null !== s) {
                            var c = s.memoizedState;
                            if (null !== c) {
                              var f = c.dehydrated;
                              null !== f && qe(f);
                            }
                          }
                        }
                        break;
                      default:
                        throw Error(i(163));
                    }
                  ol || (512 & t.flags && ml(t));
                } catch (d) {
                  Vi(t, t.return, d);
                }
              }
              if (t === e) {
                sl = null;
                break;
              }
              if (null !== (n = t.sibling)) {
                (n.return = t.return), (sl = n);
                break;
              }
              sl = t.return;
            }
          }
          function Ol(e) {
            for (; null !== sl; ) {
              var t = sl;
              if (t === e) {
                sl = null;
                break;
              }
              var n = t.sibling;
              if (null !== n) {
                (n.return = t.return), (sl = n);
                break;
              }
              sl = t.return;
            }
          }
          function Nl(e) {
            for (; null !== sl; ) {
              var t = sl;
              try {
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    var n = t.return;
                    try {
                      hl(4, t);
                    } catch (u) {
                      Vi(t, n, u);
                    }
                    break;
                  case 1:
                    var r = t.stateNode;
                    if ("function" == typeof r.componentDidMount) {
                      var a = t.return;
                      try {
                        r.componentDidMount();
                      } catch (u) {
                        Vi(t, a, u);
                      }
                    }
                    var l = t.return;
                    try {
                      ml(t);
                    } catch (u) {
                      Vi(t, l, u);
                    }
                    break;
                  case 5:
                    var i = t.return;
                    try {
                      ml(t);
                    } catch (u) {
                      Vi(t, i, u);
                    }
                }
              } catch (u) {
                Vi(t, t.return, u);
              }
              if (t === e) {
                sl = null;
                break;
              }
              var o = t.sibling;
              if (null !== o) {
                (o.return = t.return), (sl = o);
                break;
              }
              sl = t.return;
            }
          }
          var Tl = 0,
            Ml = 1,
            Ll = 2,
            Rl = 3,
            Il = 4;
          if ("function" == typeof Symbol && Symbol.for) {
            var Dl = Symbol.for;
            (Tl = Dl("selector.component")),
              (Ml = Dl("selector.has_pseudo_class")),
              (Ll = Dl("selector.role")),
              (Rl = Dl("selector.test_id")),
              (Il = Dl("selector.text"));
          }
          function Al(e) {
            var t = G(e);
            if (null != t) {
              if ("string" != typeof t.memoizedProps["data-testname"])
                throw Error(i(364));
              return t;
            }
            if (null === (e = ae(e))) throw Error(i(362));
            return e.stateNode.current;
          }
          function Fl(e, t) {
            switch (t.$$typeof) {
              case Tl:
                if (e.type === t.value) return !0;
                break;
              case Ml:
                e: {
                  (t = t.value), (e = [e, 0]);
                  for (var n = 0; n < e.length; ) {
                    var r = e[n++],
                      a = e[n++],
                      l = t[a];
                    if (5 !== r.tag || !oe(r)) {
                      for (; null != l && Fl(r, l); ) l = t[++a];
                      if (a === t.length) {
                        t = !0;
                        break e;
                      }
                      for (r = r.child; null !== r; )
                        e.push(r, a), (r = r.sibling);
                    }
                  }
                  t = !1;
                }
                return t;
              case Ll:
                if (5 === e.tag && ue(e.stateNode, t.value)) return !0;
                break;
              case Il:
                if (
                  (5 === e.tag || 6 === e.tag) &&
                  null !== (e = ie(e)) &&
                  0 <= e.indexOf(t.value)
                )
                  return !0;
                break;
              case Rl:
                if (
                  5 === e.tag &&
                  "string" == typeof (e = e.memoizedProps["data-testname"]) &&
                  e.toLowerCase() === t.value.toLowerCase()
                )
                  return !0;
                break;
              default:
                throw Error(i(365));
            }
            return !1;
          }
          function Ul(e) {
            switch (e.$$typeof) {
              case Tl:
                return "<" + (E(e.value) || "Unknown") + ">";
              case Ml:
                return ":has(" + (Ul(e) || "") + ")";
              case Ll:
                return '[role="' + e.value + '"]';
              case Il:
                return '"' + e.value + '"';
              case Rl:
                return '[data-testname="' + e.value + '"]';
              default:
                throw Error(i(365));
            }
          }
          function Hl(e, t) {
            var n = [];
            e = [e, 0];
            for (var r = 0; r < e.length; ) {
              var a = e[r++],
                l = e[r++],
                i = t[l];
              if (5 !== a.tag || !oe(a)) {
                for (; null != i && Fl(a, i); ) i = t[++l];
                if (l === t.length) n.push(a);
                else
                  for (a = a.child; null !== a; ) e.push(a, l), (a = a.sibling);
              }
            }
            return n;
          }
          function Wl(e, t) {
            if (!re) throw Error(i(363));
            (e = Hl((e = Al(e)), t)), (t = []), (e = Array.from(e));
            for (var n = 0; n < e.length; ) {
              var r = e[n++];
              if (5 === r.tag) oe(r) || t.push(r.stateNode);
              else for (r = r.child; null !== r; ) e.push(r), (r = r.sibling);
            }
            return t;
          }
          var Bl = Math.ceil,
            Vl = o.ReactCurrentDispatcher,
            Ql = o.ReactCurrentOwner,
            $l = o.ReactCurrentBatchConfig,
            Yl = 0,
            ql = null,
            Xl = null,
            Zl = 0,
            Gl = 0,
            Kl = it(0),
            Jl = 0,
            ei = null,
            ti = 0,
            ni = 0,
            ri = 0,
            ai = null,
            li = null,
            ii = 0,
            oi = 1 / 0;
          function ui() {
            oi = At() + 500;
          }
          var si,
            ci = !1,
            fi = null,
            di = null,
            pi = !1,
            hi = null,
            mi = 0,
            gi = 0,
            vi = null,
            bi = -1,
            yi = 0;
          function Si() {
            return 0 != (6 & Yl) ? At() : -1 !== bi ? bi : (bi = At());
          }
          function wi(e) {
            return 0 == (1 & e.mode)
              ? 1
              : 0 != (2 & Yl) && 0 !== Zl
                ? Zl & -Zl
                : null !== Gt.transition
                  ? (0 === yi &&
                      ((e = Et),
                      0 == (4194240 & (Et <<= 1)) && (Et = 64),
                      (yi = e)),
                    yi)
                  : 0 !== (e = Tt)
                    ? e
                    : J();
          }
          function xi(e, t, n) {
            if (50 < gi) throw ((gi = 0), (vi = null), Error(i(185)));
            var r = Ei(e, t);
            return null === r
              ? null
              : (Ot(r, t, n),
                (0 != (2 & Yl) && r === ql) ||
                  (r === ql &&
                    (0 == (2 & Yl) && (ni |= t), 4 === Jl && ji(r, Zl)),
                  ki(r, n),
                  1 === t &&
                    0 === Yl &&
                    0 == (1 & e.mode) &&
                    (ui(), Yt && Zt())),
                r);
          }
          function Ei(e, t) {
            e.lanes |= t;
            var n = e.alternate;
            for (
              null !== n && (n.lanes |= t), n = e, e = e.return;
              null !== e;

            )
              (e.childLanes |= t),
                null !== (n = e.alternate) && (n.childLanes |= t),
                (n = e),
                (e = e.return);
            return 3 === n.tag ? n.stateNode : null;
          }
          function ki(e, t) {
            var n = e.callbackNode;
            !(function (e, t) {
              for (
                var n = e.suspendedLanes,
                  r = e.pingedLanes,
                  a = e.expirationTimes,
                  l = e.pendingLanes;
                0 < l;

              ) {
                var i = 31 - St(l),
                  o = 1 << i,
                  u = a[i];
                -1 === u
                  ? (0 != (o & n) && 0 == (o & r)) || (a[i] = Ct(o, t))
                  : u <= t && (e.expiredLanes |= o),
                  (l &= ~o);
              }
            })(e, t);
            var r = _t(e, e === ql ? Zl : 0);
            if (0 === r)
              null !== n && Rt(n),
                (e.callbackNode = null),
                (e.callbackPriority = 0);
            else if (((t = r & -r), e.callbackPriority !== t)) {
              if ((null != n && Rt(n), 1 === t))
                0 === e.tag
                  ? (function (e) {
                      (Yt = !0), Xt(e);
                    })(zi.bind(null, e))
                  : Xt(zi.bind(null, e)),
                  te
                    ? ne(function () {
                        0 === Yl && Zt();
                      })
                    : Lt(Ft, Zt),
                  (n = null);
              else {
                switch (Mt(r)) {
                  case 1:
                    n = Ft;
                    break;
                  case 4:
                    n = Ut;
                    break;
                  case 16:
                  default:
                    n = Ht;
                    break;
                  case 536870912:
                    n = Wt;
                }
                n = Xi(n, Pi.bind(null, e));
              }
              (e.callbackPriority = t), (e.callbackNode = n);
            }
          }
          function Pi(e, t) {
            if (((bi = -1), (yi = 0), 0 != (6 & Yl))) throw Error(i(327));
            var n = e.callbackNode;
            if (Wi() && e.callbackNode !== n) return null;
            var r = _t(e, e === ql ? Zl : 0);
            if (0 === r) return null;
            if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Ii(e, r);
            else {
              t = r;
              var a = Yl;
              Yl |= 2;
              var l = Li();
              for ((ql === e && Zl === t) || (ui(), Ti(e, t)); ; )
                try {
                  Ai();
                  break;
                } catch (u) {
                  Mi(e, u);
                }
              ln(),
                (Vl.current = l),
                (Yl = a),
                null !== Xl ? (t = 0) : ((ql = null), (Zl = 0), (t = Jl));
            }
            if (0 !== t) {
              if (
                (2 === t && 0 !== (a = jt(e)) && ((r = a), (t = _i(e, a))),
                1 === t)
              )
                throw ((n = ei), Ti(e, 0), ji(e, r), ki(e, At()), n);
              if (6 === t) ji(e, r);
              else {
                if (
                  ((a = e.current.alternate),
                  0 == (30 & r) &&
                    !(function (e) {
                      for (var t = e; ; ) {
                        if (16384 & t.flags) {
                          var n = t.updateQueue;
                          if (null !== n && null !== (n = n.stores))
                            for (var r = 0; r < n.length; r++) {
                              var a = n[r],
                                l = a.getSnapshot;
                              a = a.value;
                              try {
                                if (!Qt(l(), a)) return !1;
                              } catch (o) {
                                return !1;
                              }
                            }
                        }
                        if (
                          ((n = t.child), 16384 & t.subtreeFlags && null !== n)
                        )
                          (n.return = t), (t = n);
                        else {
                          if (t === e) break;
                          for (; null === t.sibling; ) {
                            if (null === t.return || t.return === e) return !0;
                            t = t.return;
                          }
                          (t.sibling.return = t.return), (t = t.sibling);
                        }
                      }
                      return !0;
                    })(a) &&
                    (2 === (t = Ii(e, r)) &&
                      0 !== (l = jt(e)) &&
                      ((r = l), (t = _i(e, l))),
                    1 === t))
                )
                  throw ((n = ei), Ti(e, 0), ji(e, r), ki(e, At()), n);
                switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                  case 0:
                  case 1:
                    throw Error(i(345));
                  case 2:
                  case 5:
                    Hi(e, li);
                    break;
                  case 3:
                    if (
                      (ji(e, r),
                      (130023424 & r) === r && 10 < (t = ii + 500 - At()))
                    ) {
                      if (0 !== _t(e, 0)) break;
                      if (((a = e.suspendedLanes) & r) !== r) {
                        Si(), (e.pingedLanes |= e.suspendedLanes & a);
                        break;
                      }
                      e.timeoutHandle = V(Hi.bind(null, e, li), t);
                      break;
                    }
                    Hi(e, li);
                    break;
                  case 4:
                    if ((ji(e, r), (4194240 & r) === r)) break;
                    for (t = e.eventTimes, a = -1; 0 < r; ) {
                      var o = 31 - St(r);
                      (l = 1 << o), (o = t[o]) > a && (a = o), (r &= ~l);
                    }
                    if (
                      ((r = a),
                      10 <
                        (r =
                          (120 > (r = At() - r)
                            ? 120
                            : 480 > r
                              ? 480
                              : 1080 > r
                                ? 1080
                                : 1920 > r
                                  ? 1920
                                  : 3e3 > r
                                    ? 3e3
                                    : 4320 > r
                                      ? 4320
                                      : 1960 * Bl(r / 1960)) - r))
                    ) {
                      e.timeoutHandle = V(Hi.bind(null, e, li), r);
                      break;
                    }
                    Hi(e, li);
                    break;
                  default:
                    throw Error(i(329));
                }
              }
            }
            return ki(e, At()), e.callbackNode === n ? Pi.bind(null, e) : null;
          }
          function _i(e, t) {
            var n = ai;
            return (
              e.current.memoizedState.isDehydrated && (Ti(e, t).flags |= 256),
              2 !== (e = Ii(e, t)) && ((t = li), (li = n), null !== t && Ci(t)),
              e
            );
          }
          function Ci(e) {
            null === li ? (li = e) : li.push.apply(li, e);
          }
          function ji(e, t) {
            for (
              t &= ~ri,
                t &= ~ni,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes;
              0 < t;

            ) {
              var n = 31 - St(t),
                r = 1 << n;
              (e[n] = -1), (t &= ~r);
            }
          }
          function zi(e) {
            if (0 != (6 & Yl)) throw Error(i(327));
            Wi();
            var t = _t(e, 0);
            if (0 == (1 & t)) return ki(e, At()), null;
            var n = Ii(e, t);
            if (0 !== e.tag && 2 === n) {
              var r = jt(e);
              0 !== r && ((t = r), (n = _i(e, r)));
            }
            if (1 === n) throw ((n = ei), Ti(e, 0), ji(e, t), ki(e, At()), n);
            if (6 === n) throw Error(i(345));
            return (
              (e.finishedWork = e.current.alternate),
              (e.finishedLanes = t),
              Hi(e, li),
              ki(e, At()),
              null
            );
          }
          function Oi(e) {
            null !== hi && 0 === hi.tag && 0 == (6 & Yl) && Wi();
            var t = Yl;
            Yl |= 1;
            var n = $l.transition,
              r = Tt;
            try {
              if ((($l.transition = null), (Tt = 1), e)) return e();
            } finally {
              (Tt = r), ($l.transition = n), 0 == (6 & (Yl = t)) && Zt();
            }
          }
          function Ni() {
            (Gl = Kl.current), ot(Kl);
          }
          function Ti(e, t) {
            (e.finishedWork = null), (e.finishedLanes = 0);
            var n = e.timeoutHandle;
            if ((n !== $ && ((e.timeoutHandle = $), Q(n)), null !== Xl))
              for (n = Xl.return; null !== n; ) {
                var r = n;
                switch ((Hn(r), r.tag)) {
                  case 1:
                    null != (r = r.type.childContextTypes) && mt();
                    break;
                  case 3:
                    pr(), ot(ft), ot(ct), yr();
                    break;
                  case 5:
                    mr(r);
                    break;
                  case 4:
                    pr();
                    break;
                  case 13:
                  case 19:
                    ot(gr);
                    break;
                  case 10:
                    un(r.type._context);
                    break;
                  case 22:
                  case 23:
                    Ni();
                }
                n = n.return;
              }
            if (
              ((ql = e),
              (Xl = e = Ji(e.current, null)),
              (Zl = Gl = t),
              (Jl = 0),
              (ei = null),
              (ri = ni = ti = 0),
              (li = ai = null),
              null !== dn)
            ) {
              for (t = 0; t < dn.length; t++)
                if (null !== (r = (n = dn[t]).interleaved)) {
                  n.interleaved = null;
                  var a = r.next,
                    l = n.pending;
                  if (null !== l) {
                    var i = l.next;
                    (l.next = a), (r.next = i);
                  }
                  n.pending = r;
                }
              dn = null;
            }
            return e;
          }
          function Mi(e, t) {
            for (;;) {
              var n = Xl;
              try {
                if ((ln(), (Sr.current = pa), _r)) {
                  for (var r = Er.memoizedState; null !== r; ) {
                    var a = r.queue;
                    null !== a && (a.pending = null), (r = r.next);
                  }
                  _r = !1;
                }
                if (
                  ((xr = 0),
                  (Pr = kr = Er = null),
                  (Cr = !1),
                  (jr = 0),
                  (Ql.current = null),
                  null === n || null === n.return)
                ) {
                  (Jl = 1), (ei = t), (Xl = null);
                  break;
                }
                e: {
                  var l = e,
                    o = n.return,
                    u = n,
                    s = t;
                  if (
                    ((t = Zl),
                    (u.flags |= 32768),
                    null !== s &&
                      "object" == typeof s &&
                      "function" == typeof s.then)
                  ) {
                    var c = s,
                      f = u,
                      d = f.tag;
                    if (
                      0 == (1 & f.mode) &&
                      (0 === d || 11 === d || 15 === d)
                    ) {
                      var p = f.alternate;
                      p
                        ? ((f.updateQueue = p.updateQueue),
                          (f.memoizedState = p.memoizedState),
                          (f.lanes = p.lanes))
                        : ((f.updateQueue = null), (f.memoizedState = null));
                    }
                    var h = Ca(o);
                    if (null !== h) {
                      (h.flags &= -257),
                        ja(h, o, u, 0, t),
                        1 & h.mode && _a(l, c, t),
                        (s = c);
                      var m = (t = h).updateQueue;
                      if (null === m) {
                        var g = new Set();
                        g.add(s), (t.updateQueue = g);
                      } else m.add(s);
                      break e;
                    }
                    if (0 == (1 & t)) {
                      _a(l, c, t), Ri();
                      break e;
                    }
                    s = Error(i(426));
                  } else if (Vn && 1 & u.mode) {
                    var v = Ca(o);
                    if (null !== v) {
                      0 == (65536 & v.flags) && (v.flags |= 256),
                        ja(v, o, u, 0, t),
                        er(s);
                      break e;
                    }
                  }
                  (l = s),
                    4 !== Jl && (Jl = 2),
                    null === ai ? (ai = [l]) : ai.push(l),
                    (s = va(s, u)),
                    (u = o);
                  do {
                    switch (u.tag) {
                      case 3:
                        (u.flags |= 65536),
                          (t &= -t),
                          (u.lanes |= t),
                          yn(u, ka(0, s, t));
                        break e;
                      case 1:
                        l = s;
                        var b = u.type,
                          y = u.stateNode;
                        if (
                          0 == (128 & u.flags) &&
                          ("function" == typeof b.getDerivedStateFromError ||
                            (null !== y &&
                              "function" == typeof y.componentDidCatch &&
                              (null === di || !di.has(y))))
                        ) {
                          (u.flags |= 65536),
                            (t &= -t),
                            (u.lanes |= t),
                            yn(u, Pa(u, l, t));
                          break e;
                        }
                    }
                    u = u.return;
                  } while (null !== u);
                }
                Ui(n);
              } catch (S) {
                (t = S), Xl === n && null !== n && (Xl = n = n.return);
                continue;
              }
              break;
            }
          }
          function Li() {
            var e = Vl.current;
            return (Vl.current = pa), null === e ? pa : e;
          }
          function Ri() {
            (0 !== Jl && 3 !== Jl && 2 !== Jl) || (Jl = 4),
              null === ql ||
                (0 == (268435455 & ti) && 0 == (268435455 & ni)) ||
                ji(ql, Zl);
          }
          function Ii(e, t) {
            var n = Yl;
            Yl |= 2;
            var r = Li();
            for ((ql === e && Zl === t) || Ti(e, t); ; )
              try {
                Di();
                break;
              } catch (a) {
                Mi(e, a);
              }
            if ((ln(), (Yl = n), (Vl.current = r), null !== Xl))
              throw Error(i(261));
            return (ql = null), (Zl = 0), Jl;
          }
          function Di() {
            for (; null !== Xl; ) Fi(Xl);
          }
          function Ai() {
            for (; null !== Xl && !It(); ) Fi(Xl);
          }
          function Fi(e) {
            var t = si(e.alternate, e, Gl);
            (e.memoizedProps = e.pendingProps),
              null === t ? Ui(e) : (Xl = t),
              (Ql.current = null);
          }
          function Ui(e) {
            var t = e;
            do {
              var n = t.alternate;
              if (((e = t.return), 0 == (32768 & t.flags))) {
                if (null !== (n = La(n, t, Gl))) return void (Xl = n);
              } else {
                if (null !== (n = ll(n, t)))
                  return (n.flags &= 32767), void (Xl = n);
                if (null === e) return (Jl = 6), void (Xl = null);
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
              }
              if (null !== (t = t.sibling)) return void (Xl = t);
              Xl = t = e;
            } while (null !== t);
            0 === Jl && (Jl = 5);
          }
          function Hi(e, t) {
            var n = Tt,
              r = $l.transition;
            try {
              ($l.transition = null),
                (Tt = 1),
                (function (e, t, n) {
                  do {
                    Wi();
                  } while (null !== hi);
                  if (0 != (6 & Yl)) throw Error(i(327));
                  var r = e.finishedWork,
                    a = e.finishedLanes;
                  if (null === r) return null;
                  if (
                    ((e.finishedWork = null),
                    (e.finishedLanes = 0),
                    r === e.current)
                  )
                    throw Error(i(177));
                  (e.callbackNode = null), (e.callbackPriority = 0);
                  var l = r.lanes | r.childLanes;
                  if (
                    ((function (e, t) {
                      var n = e.pendingLanes & ~t;
                      (e.pendingLanes = t),
                        (e.suspendedLanes = 0),
                        (e.pingedLanes = 0),
                        (e.expiredLanes &= t),
                        (e.mutableReadLanes &= t),
                        (e.entangledLanes &= t),
                        (t = e.entanglements);
                      var r = e.eventTimes;
                      for (e = e.expirationTimes; 0 < n; ) {
                        var a = 31 - St(n),
                          l = 1 << a;
                        (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                      }
                    })(e, l),
                    e === ql && ((Xl = ql = null), (Zl = 0)),
                    (0 == (2064 & r.subtreeFlags) && 0 == (2064 & r.flags)) ||
                      pi ||
                      ((pi = !0),
                      Xi(Ht, function () {
                        return Wi(), null;
                      })),
                    (l = 0 != (15990 & r.flags)),
                    0 != (15990 & r.subtreeFlags) || l)
                  ) {
                    (l = $l.transition), ($l.transition = null);
                    var o = Tt;
                    Tt = 1;
                    var u = Yl;
                    (Yl |= 4),
                      (Ql.current = null),
                      (function (e, t) {
                        for (I(e.containerInfo), sl = t; null !== sl; )
                          if (
                            ((t = (e = sl).child),
                            0 != (1028 & e.subtreeFlags) && null !== t)
                          )
                            (t.return = e), (sl = t);
                          else
                            for (; null !== sl; ) {
                              e = sl;
                              try {
                                var n = e.alternate;
                                if (0 != (1024 & e.flags))
                                  switch (e.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                    case 5:
                                    case 6:
                                    case 4:
                                    case 17:
                                      break;
                                    case 1:
                                      if (null !== n) {
                                        var r = n.memoizedProps,
                                          a = n.memoizedState,
                                          l = e.stateNode,
                                          o = l.getSnapshotBeforeUpdate(
                                            e.elementType === e.type
                                              ? r
                                              : en(e.type, r),
                                            a,
                                          );
                                        l.__reactInternalSnapshotBeforeUpdate =
                                          o;
                                      }
                                      break;
                                    case 3:
                                      q && Pe(e.stateNode.containerInfo);
                                      break;
                                    default:
                                      throw Error(i(163));
                                  }
                              } catch (u) {
                                Vi(e, e.return, u);
                              }
                              if (null !== (t = e.sibling)) {
                                (t.return = e.return), (sl = t);
                                break;
                              }
                              sl = e.return;
                            }
                        (n = dl), (dl = !1);
                      })(e, r),
                      (function (e, t) {
                        for (sl = t; null !== sl; ) {
                          var n = (t = sl).deletions;
                          if (null !== n)
                            for (var r = 0; r < n.length; r++) {
                              var a = n[r];
                              try {
                                var l = e;
                                q ? kl(l, a, t) : vl(l, a, t);
                                var i = a.alternate;
                                null !== i && (i.return = null),
                                  (a.return = null);
                              } catch (w) {
                                Vi(a, t, w);
                              }
                            }
                          if (
                            ((n = t.child),
                            0 != (12854 & t.subtreeFlags) && null !== n)
                          )
                            (n.return = t), (sl = n);
                          else
                            for (; null !== sl; ) {
                              t = sl;
                              try {
                                var o = t.flags;
                                if ((32 & o && q && Se(t.stateNode), 512 & o)) {
                                  var u = t.alternate;
                                  if (null !== u) {
                                    var s = u.ref;
                                    null !== s &&
                                      ("function" == typeof s
                                        ? s(null)
                                        : (s.current = null));
                                  }
                                }
                                if (8192 & o)
                                  switch (t.tag) {
                                    case 13:
                                      if (null !== t.memoizedState) {
                                        var c = t.alternate;
                                        (null !== c &&
                                          null !== c.memoizedState) ||
                                          (ii = At());
                                      }
                                      break;
                                    case 22:
                                      var f = null !== t.memoizedState,
                                        d = t.alternate,
                                        p =
                                          null !== d &&
                                          null !== d.memoizedState;
                                      if (((n = t), q))
                                        e: if (
                                          ((r = n), (a = f), (l = null), q)
                                        )
                                          for (var h = r; ; ) {
                                            if (5 === h.tag) {
                                              if (null === l) {
                                                l = h;
                                                var m = h.stateNode;
                                                a
                                                  ? we(m)
                                                  : Ee(
                                                      h.stateNode,
                                                      h.memoizedProps,
                                                    );
                                              }
                                            } else if (6 === h.tag) {
                                              if (null === l) {
                                                var g = h.stateNode;
                                                a
                                                  ? xe(g)
                                                  : ke(g, h.memoizedProps);
                                              }
                                            } else if (
                                              ((22 !== h.tag && 23 !== h.tag) ||
                                                null === h.memoizedState ||
                                                h === r) &&
                                              null !== h.child
                                            ) {
                                              (h.child.return = h),
                                                (h = h.child);
                                              continue;
                                            }
                                            if (h === r) break;
                                            for (; null === h.sibling; ) {
                                              if (
                                                null === h.return ||
                                                h.return === r
                                              )
                                                break e;
                                              l === h && (l = null),
                                                (h = h.return);
                                            }
                                            l === h && (l = null),
                                              (h.sibling.return = h.return),
                                              (h = h.sibling);
                                          }
                                      if (f && !p && 0 != (1 & n.mode)) {
                                        sl = n;
                                        for (var v = n.child; null !== v; ) {
                                          for (n = sl = v; null !== sl; ) {
                                            var b = (r = sl).child;
                                            switch (r.tag) {
                                              case 0:
                                              case 11:
                                              case 14:
                                              case 15:
                                                pl(4, r, r.return);
                                                break;
                                              case 1:
                                                cl(r, r.return);
                                                var y = r.stateNode;
                                                if (
                                                  "function" ==
                                                  typeof y.componentWillUnmount
                                                ) {
                                                  var S = r.return;
                                                  try {
                                                    (y.props = r.memoizedProps),
                                                      (y.state =
                                                        r.memoizedState),
                                                      y.componentWillUnmount();
                                                  } catch (w) {
                                                    Vi(r, S, w);
                                                  }
                                                }
                                                break;
                                              case 5:
                                                cl(r, r.return);
                                                break;
                                              case 22:
                                                if (null !== r.memoizedState) {
                                                  Ol(n);
                                                  continue;
                                                }
                                            }
                                            null !== b
                                              ? ((b.return = r), (sl = b))
                                              : Ol(n);
                                          }
                                          v = v.sibling;
                                        }
                                      }
                                  }
                                switch (4102 & o) {
                                  case 2:
                                    wl(t), (t.flags &= -3);
                                    break;
                                  case 6:
                                    wl(t), (t.flags &= -3), Pl(t.alternate, t);
                                    break;
                                  case 4096:
                                    t.flags &= -4097;
                                    break;
                                  case 4100:
                                    (t.flags &= -4097), Pl(t.alternate, t);
                                    break;
                                  case 4:
                                    Pl(t.alternate, t);
                                }
                              } catch (w) {
                                Vi(t, t.return, w);
                              }
                              if (null !== (n = t.sibling)) {
                                (n.return = t.return), (sl = n);
                                break;
                              }
                              sl = t.return;
                            }
                        }
                      })(e, r),
                      D(e.containerInfo),
                      (e.current = r),
                      Cl(r, e, a),
                      Dt(),
                      (Yl = u),
                      (Tt = o),
                      ($l.transition = l);
                  } else e.current = r;
                  if (
                    (pi && ((pi = !1), (hi = e), (mi = a)),
                    0 === (l = e.pendingLanes) && (di = null),
                    (function (e) {
                      if (Vt && "function" == typeof Vt.onCommitFiberRoot)
                        try {
                          Vt.onCommitFiberRoot(
                            Bt,
                            e,
                            void 0,
                            128 == (128 & e.current.flags),
                          );
                        } catch (t) {}
                    })(r.stateNode),
                    ki(e, At()),
                    null !== t)
                  )
                    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
                      n(t[r]);
                  if (ci) throw ((ci = !1), (e = fi), (fi = null), e);
                  0 != (1 & mi) && 0 !== e.tag && Wi(),
                    0 != (1 & (l = e.pendingLanes))
                      ? e === vi
                        ? gi++
                        : ((gi = 0), (vi = e))
                      : (gi = 0),
                    Zt();
                })(e, t, n);
            } finally {
              ($l.transition = r), (Tt = n);
            }
            return null;
          }
          function Wi() {
            if (null !== hi) {
              var e = Mt(mi),
                t = $l.transition,
                n = Tt;
              try {
                if (
                  (($l.transition = null), (Tt = 16 > e ? 16 : e), null === hi)
                )
                  var r = !1;
                else {
                  if (((e = hi), (hi = null), (mi = 0), 0 != (6 & Yl)))
                    throw Error(i(331));
                  var a = Yl;
                  for (Yl |= 4, sl = e.current; null !== sl; ) {
                    var l = sl,
                      o = l.child;
                    if (0 != (16 & sl.flags)) {
                      var u = l.deletions;
                      if (null !== u) {
                        for (var s = 0; s < u.length; s++) {
                          var c = u[s];
                          for (sl = c; null !== sl; ) {
                            var f = sl;
                            switch (f.tag) {
                              case 0:
                              case 11:
                              case 15:
                                pl(8, f, l);
                            }
                            var d = f.child;
                            if (null !== d) (d.return = f), (sl = d);
                            else
                              for (; null !== sl; ) {
                                var p = (f = sl).sibling,
                                  h = f.return;
                                if ((bl(f), f === c)) {
                                  sl = null;
                                  break;
                                }
                                if (null !== p) {
                                  (p.return = h), (sl = p);
                                  break;
                                }
                                sl = h;
                              }
                          }
                        }
                        var m = l.alternate;
                        if (null !== m) {
                          var g = m.child;
                          if (null !== g) {
                            m.child = null;
                            do {
                              var v = g.sibling;
                              (g.sibling = null), (g = v);
                            } while (null !== g);
                          }
                        }
                        sl = l;
                      }
                    }
                    if (0 != (2064 & l.subtreeFlags) && null !== o)
                      (o.return = l), (sl = o);
                    else
                      e: for (; null !== sl; ) {
                        if (0 != (2048 & (l = sl).flags))
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              pl(9, l, l.return);
                          }
                        var b = l.sibling;
                        if (null !== b) {
                          (b.return = l.return), (sl = b);
                          break e;
                        }
                        sl = l.return;
                      }
                  }
                  var y = e.current;
                  for (sl = y; null !== sl; ) {
                    var S = (o = sl).child;
                    if (0 != (2064 & o.subtreeFlags) && null !== S)
                      (S.return = o), (sl = S);
                    else
                      e: for (o = y; null !== sl; ) {
                        if (0 != (2048 & (u = sl).flags))
                          try {
                            switch (u.tag) {
                              case 0:
                              case 11:
                              case 15:
                                hl(9, u);
                            }
                          } catch (x) {
                            Vi(u, u.return, x);
                          }
                        if (u === o) {
                          sl = null;
                          break e;
                        }
                        var w = u.sibling;
                        if (null !== w) {
                          (w.return = u.return), (sl = w);
                          break e;
                        }
                        sl = u.return;
                      }
                  }
                  if (
                    ((Yl = a),
                    Zt(),
                    Vt && "function" == typeof Vt.onPostCommitFiberRoot)
                  )
                    try {
                      Vt.onPostCommitFiberRoot(Bt, e);
                    } catch (x) {}
                  r = !0;
                }
                return r;
              } finally {
                (Tt = n), ($l.transition = t);
              }
            }
            return !1;
          }
          function Bi(e, t, n) {
            vn(e, (t = ka(0, (t = va(n, t)), 1))),
              (t = Si()),
              null !== (e = Ei(e, 1)) && (Ot(e, 1, t), ki(e, t));
          }
          function Vi(e, t, n) {
            if (3 === e.tag) Bi(e, e, n);
            else
              for (; null !== t; ) {
                if (3 === t.tag) {
                  Bi(t, e, n);
                  break;
                }
                if (1 === t.tag) {
                  var r = t.stateNode;
                  if (
                    "function" == typeof t.type.getDerivedStateFromError ||
                    ("function" == typeof r.componentDidCatch &&
                      (null === di || !di.has(r)))
                  ) {
                    vn(t, (e = Pa(t, (e = va(n, e)), 1))),
                      (e = Si()),
                      null !== (t = Ei(t, 1)) && (Ot(t, 1, e), ki(t, e));
                    break;
                  }
                }
                t = t.return;
              }
          }
          function Qi(e, t, n) {
            var r = e.pingCache;
            null !== r && r.delete(t),
              (t = Si()),
              (e.pingedLanes |= e.suspendedLanes & n),
              ql === e &&
                (Zl & n) === n &&
                (4 === Jl ||
                (3 === Jl && (130023424 & Zl) === Zl && 500 > At() - ii)
                  ? Ti(e, 0)
                  : (ri |= n)),
              ki(e, t);
          }
          function $i(e, t) {
            0 === t &&
              (0 == (1 & e.mode)
                ? (t = 1)
                : ((t = kt), 0 == (130023424 & (kt <<= 1)) && (kt = 4194304)));
            var n = Si();
            null !== (e = Ei(e, t)) && (Ot(e, t, n), ki(e, n));
          }
          function Yi(e) {
            var t = e.memoizedState,
              n = 0;
            null !== t && (n = t.retryLane), $i(e, n);
          }
          function qi(e, t) {
            var n = 0;
            switch (e.tag) {
              case 13:
                var r = e.stateNode,
                  a = e.memoizedState;
                null !== a && (n = a.retryLane);
                break;
              case 19:
                r = e.stateNode;
                break;
              default:
                throw Error(i(314));
            }
            null !== r && r.delete(t), $i(e, n);
          }
          function Xi(e, t) {
            return Lt(e, t);
          }
          function Zi(e, t, n, r) {
            (this.tag = e),
              (this.key = n),
              (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                  null),
              (this.index = 0),
              (this.ref = null),
              (this.pendingProps = t),
              (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                  null),
              (this.mode = r),
              (this.subtreeFlags = this.flags = 0),
              (this.deletions = null),
              (this.childLanes = this.lanes = 0),
              (this.alternate = null);
          }
          function Gi(e, t, n, r) {
            return new Zi(e, t, n, r);
          }
          function Ki(e) {
            return !(!(e = e.prototype) || !e.isReactComponent);
          }
          function Ji(e, t) {
            var n = e.alternate;
            return (
              null === n
                ? (((n = Gi(e.tag, t, e.key, e.mode)).elementType =
                    e.elementType),
                  (n.type = e.type),
                  (n.stateNode = e.stateNode),
                  (n.alternate = e),
                  (e.alternate = n))
                : ((n.pendingProps = t),
                  (n.type = e.type),
                  (n.flags = 0),
                  (n.subtreeFlags = 0),
                  (n.deletions = null)),
              (n.flags = 14680064 & e.flags),
              (n.childLanes = e.childLanes),
              (n.lanes = e.lanes),
              (n.child = e.child),
              (n.memoizedProps = e.memoizedProps),
              (n.memoizedState = e.memoizedState),
              (n.updateQueue = e.updateQueue),
              (t = e.dependencies),
              (n.dependencies =
                null === t
                  ? null
                  : {lanes: t.lanes, firstContext: t.firstContext}),
              (n.sibling = e.sibling),
              (n.index = e.index),
              (n.ref = e.ref),
              n
            );
          }
          function eo(e, t, n, r, a, l) {
            var o = 2;
            if (((r = e), "function" == typeof e)) Ki(e) && (o = 1);
            else if ("string" == typeof e) o = 5;
            else
              e: switch (e) {
                case c:
                  return to(n.children, a, l, t);
                case f:
                  (o = 8), (a |= 8);
                  break;
                case d:
                  return (
                    ((e = Gi(12, n, t, 2 | a)).elementType = d),
                    (e.lanes = l),
                    e
                  );
                case g:
                  return (
                    ((e = Gi(13, n, t, a)).elementType = g), (e.lanes = l), e
                  );
                case v:
                  return (
                    ((e = Gi(19, n, t, a)).elementType = v), (e.lanes = l), e
                  );
                case S:
                  return no(n, a, l, t);
                default:
                  if ("object" == typeof e && null !== e)
                    switch (e.$$typeof) {
                      case p:
                        o = 10;
                        break e;
                      case h:
                        o = 9;
                        break e;
                      case m:
                        o = 11;
                        break e;
                      case b:
                        o = 14;
                        break e;
                      case y:
                        (o = 16), (r = null);
                        break e;
                    }
                  throw Error(i(130, null == e ? e : typeof e, ""));
              }
            return (
              ((t = Gi(o, n, t, a)).elementType = e),
              (t.type = r),
              (t.lanes = l),
              t
            );
          }
          function to(e, t, n, r) {
            return ((e = Gi(7, e, r, t)).lanes = n), e;
          }
          function no(e, t, n, r) {
            return (
              ((e = Gi(22, e, r, t)).elementType = S),
              (e.lanes = n),
              (e.stateNode = {}),
              e
            );
          }
          function ro(e, t, n) {
            return ((e = Gi(6, e, null, t)).lanes = n), e;
          }
          function ao(e, t, n) {
            return (
              ((t = Gi(
                4,
                null !== e.children ? e.children : [],
                e.key,
                t,
              )).lanes = n),
              (t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation,
              }),
              t
            );
          }
          function lo(e, t, n, r, a) {
            (this.tag = t),
              (this.containerInfo = e),
              (this.finishedWork =
                this.pingCache =
                this.current =
                this.pendingChildren =
                  null),
              (this.timeoutHandle = $),
              (this.callbackNode = this.pendingContext = this.context = null),
              (this.callbackPriority = 0),
              (this.eventTimes = zt(0)),
              (this.expirationTimes = zt(-1)),
              (this.entangledLanes =
                this.finishedLanes =
                this.mutableReadLanes =
                this.expiredLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                  0),
              (this.entanglements = zt(0)),
              (this.identifierPrefix = r),
              (this.onRecoverableError = a),
              Z && (this.mutableSourceEagerHydrationData = null);
          }
          function io(e, t, n, r, a, l, i, o, u) {
            return (
              (e = new lo(e, t, n, o, u)),
              1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
              (l = Gi(3, null, null, t)),
              (e.current = l),
              (l.stateNode = e),
              (l.memoizedState = {
                element: r,
                isDehydrated: n,
                cache: null,
                transitions: null,
              }),
              hn(l),
              e
            );
          }
          function oo(e) {
            if (!e) return st;
            e: {
              if (P((e = e._reactInternals)) !== e || 1 !== e.tag)
                throw Error(i(170));
              var t = e;
              do {
                switch (t.tag) {
                  case 3:
                    t = t.stateNode.context;
                    break e;
                  case 1:
                    if (ht(t.type)) {
                      t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                      break e;
                    }
                }
                t = t.return;
              } while (null !== t);
              throw Error(i(171));
            }
            if (1 === e.tag) {
              var n = e.type;
              if (ht(n)) return vt(e, n, t);
            }
            return t;
          }
          function uo(e) {
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return null === (e = j(t)) ? null : e.stateNode;
          }
          function so(e, t) {
            if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
              var n = e.retryLane;
              e.retryLane = 0 !== n && n < t ? n : t;
            }
          }
          function co(e, t) {
            so(e, t), (e = e.alternate) && so(e, t);
          }
          function fo(e) {
            return null === (e = j(e)) ? null : e.stateNode;
          }
          function po() {
            return null;
          }
          return (
            (si = function (e, t, n) {
              if (null !== e)
                if (e.memoizedProps !== t.pendingProps || ft.current) Ia = !0;
                else {
                  if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                    return (
                      (Ia = !1),
                      (function (e, t, n) {
                        switch (t.tag) {
                          case 3:
                            $a(t), Jn();
                            break;
                          case 5:
                            hr(t);
                            break;
                          case 1:
                            ht(t.type) && bt(t);
                            break;
                          case 4:
                            dr(t, t.stateNode.containerInfo);
                            break;
                          case 10:
                            on(0, t.type._context, t.memoizedProps.value);
                            break;
                          case 13:
                            var r = t.memoizedState;
                            if (null !== r)
                              return null !== r.dehydrated
                                ? (ut(gr, 1 & gr.current),
                                  (t.flags |= 128),
                                  null)
                                : 0 != (n & t.child.childLanes)
                                  ? Za(e, t, n)
                                  : (ut(gr, 1 & gr.current),
                                    null !== (e = al(e, t, n))
                                      ? e.sibling
                                      : null);
                            ut(gr, 1 & gr.current);
                            break;
                          case 19:
                            if (
                              ((r = 0 != (n & t.childLanes)),
                              0 != (128 & e.flags))
                            ) {
                              if (r) return rl(e, t, n);
                              t.flags |= 128;
                            }
                            var a = t.memoizedState;
                            if (
                              (null !== a &&
                                ((a.rendering = null),
                                (a.tail = null),
                                (a.lastEffect = null)),
                              ut(gr, gr.current),
                              r)
                            )
                              break;
                            return null;
                          case 22:
                          case 23:
                            return (t.lanes = 0), Ha(e, t, n);
                        }
                        return al(e, t, n);
                      })(e, t, n)
                    );
                  Ia = 0 != (131072 & e.flags);
                }
              else
                (Ia = !1), Vn && 0 != (1048576 & t.flags) && Fn(t, Tn, t.index);
              switch (((t.lanes = 0), t.tag)) {
                case 2:
                  var r = t.type;
                  null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                    (e = t.pendingProps);
                  var a = pt(t, ct.current);
                  cn(t, n), (a = Tr(null, t, r, e, a, n));
                  var l = Mr();
                  return (
                    (t.flags |= 1),
                    "object" == typeof a &&
                    null !== a &&
                    "function" == typeof a.render &&
                    void 0 === a.$$typeof
                      ? ((t.tag = 1),
                        (t.memoizedState = null),
                        (t.updateQueue = null),
                        ht(r) ? ((l = !0), bt(t)) : (l = !1),
                        (t.memoizedState =
                          null !== a.state && void 0 !== a.state
                            ? a.state
                            : null),
                        hn(t),
                        (a.updater = kn),
                        (t.stateNode = a),
                        (a._reactInternals = t),
                        jn(t, r, e, n),
                        (t = Qa(null, t, r, !0, l, n)))
                      : ((t.tag = 0),
                        Vn && l && Un(t),
                        Da(null, t, a, n),
                        (t = t.child)),
                    t
                  );
                case 16:
                  r = t.elementType;
                  e: {
                    switch (
                      (null !== e &&
                        ((e.alternate = null),
                        (t.alternate = null),
                        (t.flags |= 2)),
                      (e = t.pendingProps),
                      (r = (a = r._init)(r._payload)),
                      (t.type = r),
                      (a = t.tag =
                        (function (e) {
                          if ("function" == typeof e) return Ki(e) ? 1 : 0;
                          if (null != e) {
                            if ((e = e.$$typeof) === m) return 11;
                            if (e === b) return 14;
                          }
                          return 2;
                        })(r)),
                      (e = en(r, e)),
                      a)
                    ) {
                      case 0:
                        t = Ba(null, t, r, e, n);
                        break e;
                      case 1:
                        t = Va(null, t, r, e, n);
                        break e;
                      case 11:
                        t = Aa(null, t, r, e, n);
                        break e;
                      case 14:
                        t = Fa(null, t, r, en(r.type, e), n);
                        break e;
                    }
                    throw Error(i(306, r, ""));
                  }
                  return t;
                case 0:
                  return (
                    (r = t.type),
                    (a = t.pendingProps),
                    Ba(e, t, r, (a = t.elementType === r ? a : en(r, a)), n)
                  );
                case 1:
                  return (
                    (r = t.type),
                    (a = t.pendingProps),
                    Va(e, t, r, (a = t.elementType === r ? a : en(r, a)), n)
                  );
                case 3:
                  e: {
                    if (($a(t), null === e)) throw Error(i(387));
                    (r = t.pendingProps),
                      (a = (l = t.memoizedState).element),
                      mn(e, t),
                      Sn(t, r, null, n);
                    var o = t.memoizedState;
                    if (((r = o.element), Z && l.isDehydrated)) {
                      if (
                        ((l = {
                          element: r,
                          isDehydrated: !1,
                          cache: o.cache,
                          transitions: o.transitions,
                        }),
                        (t.updateQueue.baseState = l),
                        (t.memoizedState = l),
                        256 & t.flags)
                      ) {
                        t = Ya(e, t, r, n, (a = Error(i(423))));
                        break e;
                      }
                      if (r !== a) {
                        t = Ya(e, t, r, n, (a = Error(i(424))));
                        break e;
                      }
                      for (
                        Z &&
                          ((Bn = He(t.stateNode.containerInfo)),
                          (Wn = t),
                          (Vn = !0),
                          ($n = null),
                          (Qn = !1)),
                          n = ir(t, null, r, n),
                          t.child = n;
                        n;

                      )
                        (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                    } else {
                      if ((Jn(), r === a)) {
                        t = al(e, t, n);
                        break e;
                      }
                      Da(e, t, r, n);
                    }
                    t = t.child;
                  }
                  return t;
                case 5:
                  return (
                    hr(t),
                    null === e && Zn(t),
                    (r = t.type),
                    (a = t.pendingProps),
                    (l = null !== e ? e.memoizedProps : null),
                    (o = a.children),
                    W(r, a)
                      ? (o = null)
                      : null !== l && W(r, l) && (t.flags |= 32),
                    Wa(e, t),
                    Da(e, t, o, n),
                    t.child
                  );
                case 6:
                  return null === e && Zn(t), null;
                case 13:
                  return Za(e, t, n);
                case 4:
                  return (
                    dr(t, t.stateNode.containerInfo),
                    (r = t.pendingProps),
                    null === e ? (t.child = lr(t, null, r, n)) : Da(e, t, r, n),
                    t.child
                  );
                case 11:
                  return (
                    (r = t.type),
                    (a = t.pendingProps),
                    Aa(e, t, r, (a = t.elementType === r ? a : en(r, a)), n)
                  );
                case 7:
                  return Da(e, t, t.pendingProps, n), t.child;
                case 8:
                case 12:
                  return Da(e, t, t.pendingProps.children, n), t.child;
                case 10:
                  e: {
                    if (
                      ((r = t.type._context),
                      (a = t.pendingProps),
                      (l = t.memoizedProps),
                      on(0, r, (o = a.value)),
                      null !== l)
                    )
                      if (Qt(l.value, o)) {
                        if (l.children === a.children && !ft.current) {
                          t = al(e, t, n);
                          break e;
                        }
                      } else
                        for (
                          null !== (l = t.child) && (l.return = t);
                          null !== l;

                        ) {
                          var u = l.dependencies;
                          if (null !== u) {
                            o = l.child;
                            for (var s = u.firstContext; null !== s; ) {
                              if (s.context === r) {
                                if (1 === l.tag) {
                                  (s = gn(-1, n & -n)).tag = 2;
                                  var c = l.updateQueue;
                                  if (null !== c) {
                                    var f = (c = c.shared).pending;
                                    null === f
                                      ? (s.next = s)
                                      : ((s.next = f.next), (f.next = s)),
                                      (c.pending = s);
                                  }
                                }
                                (l.lanes |= n),
                                  null !== (s = l.alternate) && (s.lanes |= n),
                                  sn(l.return, n, t),
                                  (u.lanes |= n);
                                break;
                              }
                              s = s.next;
                            }
                          } else if (10 === l.tag)
                            o = l.type === t.type ? null : l.child;
                          else if (18 === l.tag) {
                            if (null === (o = l.return)) throw Error(i(341));
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              sn(o, n, t),
                              (o = l.sibling);
                          } else o = l.child;
                          if (null !== o) o.return = l;
                          else
                            for (o = l; null !== o; ) {
                              if (o === t) {
                                o = null;
                                break;
                              }
                              if (null !== (l = o.sibling)) {
                                (l.return = o.return), (o = l);
                                break;
                              }
                              o = o.return;
                            }
                          l = o;
                        }
                    Da(e, t, a.children, n), (t = t.child);
                  }
                  return t;
                case 9:
                  return (
                    (a = t.type),
                    (r = t.pendingProps.children),
                    cn(t, n),
                    (r = r((a = fn(a)))),
                    (t.flags |= 1),
                    Da(e, t, r, n),
                    t.child
                  );
                case 14:
                  return (
                    (a = en((r = t.type), t.pendingProps)),
                    Fa(e, t, r, (a = en(r.type, a)), n)
                  );
                case 15:
                  return Ua(e, t, t.type, t.pendingProps, n);
                case 17:
                  return (
                    (r = t.type),
                    (a = t.pendingProps),
                    (a = t.elementType === r ? a : en(r, a)),
                    null !== e &&
                      ((e.alternate = null),
                      (t.alternate = null),
                      (t.flags |= 2)),
                    (t.tag = 1),
                    ht(r) ? ((e = !0), bt(t)) : (e = !1),
                    cn(t, n),
                    _n(t, r, a),
                    jn(t, r, a, n),
                    Qa(null, t, r, !0, e, n)
                  );
                case 19:
                  return rl(e, t, n);
                case 22:
                  return Ha(e, t, n);
              }
              throw Error(i(156, t.tag));
            }),
            (t.attemptContinuousHydration = function (e) {
              13 === e.tag && (xi(e, 134217728, Si()), co(e, 134217728));
            }),
            (t.attemptHydrationAtCurrentPriority = function (e) {
              if (13 === e.tag) {
                var t = Si(),
                  n = wi(e);
                xi(e, n, t), co(e, n);
              }
            }),
            (t.attemptSynchronousHydration = function (e) {
              switch (e.tag) {
                case 3:
                  var t = e.stateNode;
                  if (t.current.memoizedState.isDehydrated) {
                    var n = Pt(t.pendingLanes);
                    0 !== n &&
                      (Nt(t, 1 | n),
                      ki(t, At()),
                      0 == (6 & Yl) && (ui(), Zt()));
                  }
                  break;
                case 13:
                  var r = Si();
                  Oi(function () {
                    return xi(e, 1, r);
                  }),
                    co(e, 1);
              }
            }),
            (t.batchedUpdates = function (e, t) {
              var n = Yl;
              Yl |= 1;
              try {
                return e(t);
              } finally {
                0 === (Yl = n) && (ui(), Yt && Zt());
              }
            }),
            (t.createComponentSelector = function (e) {
              return {$$typeof: Tl, value: e};
            }),
            (t.createContainer = function (e, t, n, r, a, l, i) {
              return io(e, t, !1, null, 0, r, 0, l, i);
            }),
            (t.createHasPseudoClassSelector = function (e) {
              return {$$typeof: Ml, value: e};
            }),
            (t.createHydrationContainer = function (e, t, n, r, a, l, i, o, u) {
              return (
                ((e = io(n, r, !0, e, 0, l, 0, o, u)).context = oo(null)),
                (n = e.current),
                ((l = gn((r = Si()), (a = wi(n)))).callback =
                  null != t ? t : null),
                vn(n, l),
                (e.current.lanes = a),
                Ot(e, a, r),
                ki(e, r),
                e
              );
            }),
            (t.createPortal = function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: s,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            }),
            (t.createRoleSelector = function (e) {
              return {$$typeof: Ll, value: e};
            }),
            (t.createTestNameSelector = function (e) {
              return {$$typeof: Rl, value: e};
            }),
            (t.createTextSelector = function (e) {
              return {$$typeof: Il, value: e};
            }),
            (t.deferredUpdates = function (e) {
              var t = Tt,
                n = $l.transition;
              try {
                return ($l.transition = null), (Tt = 16), e();
              } finally {
                (Tt = t), ($l.transition = n);
              }
            }),
            (t.discreteUpdates = function (e, t, n, r, a) {
              var l = Tt,
                i = $l.transition;
              try {
                return ($l.transition = null), (Tt = 1), e(t, n, r, a);
              } finally {
                (Tt = l), ($l.transition = i), 0 === Yl && ui();
              }
            }),
            (t.findAllNodes = Wl),
            (t.findBoundingRects = function (e, t) {
              if (!re) throw Error(i(363));
              (t = Wl(e, t)), (e = []);
              for (var n = 0; n < t.length; n++) e.push(le(t[n]));
              for (t = e.length - 1; 0 < t; t--)
                for (
                  var r = (n = e[t]).x,
                    a = r + n.width,
                    l = n.y,
                    o = l + n.height,
                    u = t - 1;
                  0 <= u;
                  u--
                )
                  if (t !== u) {
                    var s = e[u],
                      c = s.x,
                      f = c + s.width,
                      d = s.y,
                      p = d + s.height;
                    if (r >= c && l >= d && a <= f && o <= p) {
                      e.splice(t, 1);
                      break;
                    }
                    if (!(r !== c || n.width !== s.width || p < l || d > o)) {
                      d > l && ((s.height += d - l), (s.y = l)),
                        p < o && (s.height = o - d),
                        e.splice(t, 1);
                      break;
                    }
                    if (!(l !== d || n.height !== s.height || f < r || c > a)) {
                      c > r && ((s.width += c - r), (s.x = r)),
                        f < a && (s.width = a - c),
                        e.splice(t, 1);
                      break;
                    }
                  }
              return e;
            }),
            (t.findHostInstance = uo),
            (t.findHostInstanceWithNoPortals = function (e) {
              return null === (e = null !== (e = C(e)) ? O(e) : null)
                ? null
                : e.stateNode;
            }),
            (t.findHostInstanceWithWarning = function (e) {
              return uo(e);
            }),
            (t.flushControlled = function (e) {
              var t = Yl;
              Yl |= 1;
              var n = $l.transition,
                r = Tt;
              try {
                ($l.transition = null), (Tt = 1), e();
              } finally {
                (Tt = r), ($l.transition = n), 0 === (Yl = t) && (ui(), Zt());
              }
            }),
            (t.flushPassiveEffects = Wi),
            (t.flushSync = Oi),
            (t.focusWithin = function (e, t) {
              if (!re) throw Error(i(363));
              for (
                t = Hl((e = Al(e)), t), t = Array.from(t), e = 0;
                e < t.length;

              ) {
                var n = t[e++];
                if (!oe(n)) {
                  if (5 === n.tag && se(n.stateNode)) return !0;
                  for (n = n.child; null !== n; ) t.push(n), (n = n.sibling);
                }
              }
              return !1;
            }),
            (t.getCurrentUpdatePriority = function () {
              return Tt;
            }),
            (t.getFindAllNodesFailureDescription = function (e, t) {
              if (!re) throw Error(i(363));
              var n = 0,
                r = [];
              e = [Al(e), 0];
              for (var a = 0; a < e.length; ) {
                var l = e[a++],
                  o = e[a++],
                  u = t[o];
                if (
                  (5 !== l.tag || !oe(l)) &&
                  (Fl(l, u) && (r.push(Ul(u)), ++o > n && (n = o)),
                  o < t.length)
                )
                  for (l = l.child; null !== l; ) e.push(l, o), (l = l.sibling);
              }
              if (n < t.length) {
                for (e = []; n < t.length; n++) e.push(Ul(t[n]));
                return (
                  "findAllNodes was able to match part of the selector:\n  " +
                  r.join(" > ") +
                  "\n\nNo matching component was found for:\n  " +
                  e.join(" > ")
                );
              }
              return null;
            }),
            (t.getPublicRootInstance = function (e) {
              return (e = e.current).child
                ? 5 === e.child.tag
                  ? M(e.child.stateNode)
                  : e.child.stateNode
                : null;
            }),
            (t.injectIntoDevTools = function (e) {
              if (
                ((e = {
                  bundleType: e.bundleType,
                  version: e.version,
                  rendererPackageName: e.rendererPackageName,
                  rendererConfig: e.rendererConfig,
                  overrideHookState: null,
                  overrideHookStateDeletePath: null,
                  overrideHookStateRenamePath: null,
                  overrideProps: null,
                  overridePropsDeletePath: null,
                  overridePropsRenamePath: null,
                  setErrorHandler: null,
                  setSuspenseHandler: null,
                  scheduleUpdate: null,
                  currentDispatcherRef: o.ReactCurrentDispatcher,
                  findHostInstanceByFiber: fo,
                  findFiberByHostInstance: e.findFiberByHostInstance || po,
                  findHostInstancesForRefresh: null,
                  scheduleRefresh: null,
                  scheduleRoot: null,
                  setRefreshHandler: null,
                  getCurrentFiber: null,
                  reconcilerVersion: "18.0.0-fc46dba67-20220329",
                }),
                "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
              )
                e = !1;
              else {
                var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (t.isDisabled || !t.supportsFiber) e = !0;
                else {
                  try {
                    (Bt = t.inject(e)), (Vt = t);
                  } catch (n) {}
                  e = !!t.checkDCE;
                }
              }
              return e;
            }),
            (t.isAlreadyRendering = function () {
              return !1;
            }),
            (t.observeVisibleRects = function (e, t, n, r) {
              if (!re) throw Error(i(363));
              e = Wl(e, t);
              var a = ce(e, n, r).disconnect;
              return {
                disconnect: function () {
                  a();
                },
              };
            }),
            (t.registerMutableSourceForHydration = function (e, t) {
              var n = t._getVersion;
              (n = n(t._source)),
                null == e.mutableSourceEagerHydrationData
                  ? (e.mutableSourceEagerHydrationData = [t, n])
                  : e.mutableSourceEagerHydrationData.push(t, n);
            }),
            (t.runWithPriority = function (e, t) {
              var n = Tt;
              try {
                return (Tt = e), t();
              } finally {
                Tt = n;
              }
            }),
            (t.shouldError = function () {
              return null;
            }),
            (t.shouldSuspend = function () {
              return !1;
            }),
            (t.updateContainer = function (e, t, n, r) {
              var a = t.current,
                l = Si(),
                i = wi(a);
              return (
                (n = oo(n)),
                null === t.context ? (t.context = n) : (t.pendingContext = n),
                ((t = gn(l, i)).payload = {element: e}),
                null !== (r = void 0 === r ? null : r) && (t.callback = r),
                vn(a, t),
                null !== (e = xi(a, i, l)) && bn(e, a, i),
                i
              );
            }),
            t
          );
        };
      },
      974: (e, t, n) => {
        e.exports = n(93);
      },
      873: (e, t, n) => {
        e.exports = n(753);
      },
      625: (e, t, n) => {
        var r = n(363),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = {key: !0, ref: !0, __self: !0, __source: !0};
        function s(e, t, n) {
          var r,
            l = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: l,
            _owner: o.current,
          };
        }
        (t.Fragment = l), (t.jsx = s), (t.jsxs = s);
      },
      664: (e, t, n) => {
        e.exports = n(625);
      },
      474: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                u = e[o],
                s = o + 1,
                c = e[s];
              if (0 > l(u, n))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[o] = n), (r = o));
              else {
                if (!(s < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            u = o.now();
          t.unstable_now = function () {
            return o.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          v = "function" == typeof setTimeout ? setTimeout : null,
          b = "function" == typeof clearTimeout ? clearTimeout : null,
          y = "undefined" != typeof setImmediate ? setImmediate : null;
        function S(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function w(e) {
          if (((g = !1), S(e), !m))
            if (null !== r(s)) (m = !0), M(x);
            else {
              var t = r(c);
              null !== t && L(w, t.startTime - e);
            }
        }
        function x(e, n) {
          (m = !1), g && ((g = !1), b(_), (_ = -1)), (h = !0);
          var l = p;
          try {
            for (
              S(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !z()));

            ) {
              var i = d.callback;
              if ("function" == typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var o = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof o
                    ? (d.callback = o)
                    : d === r(s) && a(s),
                  S(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && L(w, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = l), (h = !1);
          }
        }
        "undefined" != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var E,
          k = !1,
          P = null,
          _ = -1,
          C = 5,
          j = -1;
        function z() {
          return !(t.unstable_now() - j < C);
        }
        function O() {
          if (null !== P) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              n = P(!0, e);
            } finally {
              n ? E() : ((k = !1), (P = null));
            }
          } else k = !1;
        }
        if ("function" == typeof y)
          E = function () {
            y(O);
          };
        else if ("undefined" != typeof MessageChannel) {
          var N = new MessageChannel(),
            T = N.port2;
          (N.port1.onmessage = O),
            (E = function () {
              T.postMessage(null);
            });
        } else
          E = function () {
            v(O, 0);
          };
        function M(e) {
          (P = e), k || ((k = !0), E());
        }
        function L(e, n) {
          _ = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), M(x));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now();
            switch (
              ("object" == typeof l && null !== l
                ? (l = "number" == typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (o = l + o),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (g ? (b(_), (_ = -1)) : (g = !0), L(w, l - i)))
                : ((e.sortIndex = o), n(s, e), m || h || ((m = !0), M(x))),
              e
            );
          }),
          (t.unstable_shouldYield = z),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: (e, t, n) => {
        e.exports = n(474);
      },
      294: (e, t, n) => {
        var r = n(363);
        var a =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          l = r.useState,
          i = r.useEffect,
          o = r.useLayoutEffect,
          u = r.useDebugValue;
        function s(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !a(e, n);
          } catch (r) {
            return !0;
          }
        }
        var c =
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
            ? function (e, t) {
                return t();
              }
            : function (e, t) {
                var n = t(),
                  r = l({inst: {value: n, getSnapshot: t}}),
                  a = r[0].inst,
                  c = r[1];
                return (
                  o(
                    function () {
                      (a.value = n), (a.getSnapshot = t), s(a) && c({inst: a});
                    },
                    [e, n, t],
                  ),
                  i(
                    function () {
                      return (
                        s(a) && c({inst: a}),
                        e(function () {
                          s(a) && c({inst: a});
                        })
                      );
                    },
                    [e],
                  ),
                  u(n),
                  n
                );
              };
        t.useSyncExternalStore =
          void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
      },
      238: (e, t, n) => {
        var r = n(363),
          a = n(900);
        var l =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          i = a.useSyncExternalStore,
          o = r.useRef,
          u = r.useEffect,
          s = r.useMemo,
          c = r.useDebugValue;
        t.useSyncExternalStoreWithSelector = function (e, t, n, r, a) {
          var f = o(null);
          if (null === f.current) {
            var d = {hasValue: !1, value: null};
            f.current = d;
          } else d = f.current;
          f = s(
            function () {
              function e(e) {
                if (!u) {
                  if (
                    ((u = !0), (i = e), (e = r(e)), void 0 !== a && d.hasValue)
                  ) {
                    var t = d.value;
                    if (a(t, e)) return (o = t);
                  }
                  return (o = e);
                }
                if (((t = o), l(i, e))) return t;
                var n = r(e);
                return void 0 !== a && a(t, n) ? t : ((i = e), (o = n));
              }
              var i,
                o,
                u = !1,
                s = void 0 === n ? null : n;
              return [
                function () {
                  return e(t());
                },
                null === s
                  ? void 0
                  : function () {
                      return e(s());
                    },
              ];
            },
            [t, n, r, a],
          );
          var p = i(e, f[0], f[1]);
          return (
            u(
              function () {
                (d.hasValue = !0), (d.value = p);
              },
              [p],
            ),
            c(p),
            p
          );
        };
      },
      900: (e, t, n) => {
        e.exports = n(294);
      },
      471: (e, t, n) => {
        e.exports = n(238);
      },
      363: (e) => {
        e.exports = React;
      },
      533: (e) => {
        e.exports = ReactDOM;
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = {exports: {}});
    return e[r](l, l.exports, n), l.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, {a: t}), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, {enumerable: !0, get: t[r]});
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = n(664),
        t = n(959),
        r = n(363);
      function a(e, t) {
        return r.Children.map(e, (e) =>
          (0, r.isValidElement)(e)
            ? ("children" in e.props &&
                (e = (0, r.cloneElement)(e, {
                  children: a(e.props.children, t),
                })),
              t(e))
            : e,
        );
      }
      function l(e = []) {
        const t = (0, r.useRef)(),
          n = (0, r.useRef)();
        return [
          (0, r.useMemo)(
            () =>
              new Promise((e, r) => {
                (t.current = e), (n.current = r);
              }),
            e,
          ),
          t.current,
          n.current,
        ];
      }
      const i = MathJax._.components.package.Package.packages,
        o = Array.from(i.keys()).filter((e) => "output/svg" !== e),
        u = Promise.all([MathJax.loader.ready(...o), MathJax.startup.promise]),
        s = (0, r.forwardRef)(function (e, t) {
          const [n, i] = l();
          (0, r.useImperativeHandle)(t, () => ({ready: n}));
          const o = (0, r.useRef)([]);
          return (
            (0, r.useEffect)(() => {
              Promise.all(o.current).then(i);
            }, []),
            a(e.children, (e) => {
              if (
                (function (e) {
                  return (
                    (0, r.isValidElement)(e) &&
                    "object" == typeof e.type &&
                    e.type === c
                  );
                })(e)
              ) {
                const t = e.ref;
                return (0, r.cloneElement)(e, {
                  ref: (e) => {
                    e &&
                      (o.current.push(e.ready),
                      "function" == typeof t
                        ? t(e)
                        : t && "object" == typeof t && (t.current = e));
                  },
                });
              }
              return e;
            })
          );
        });
      const c = (0, r.forwardRef)(function (t, n) {
        const {children: a, display: i = !1, span: o = !1, ...s} = t,
          c = (0, r.useRef)(),
          [f, d] = l();
        (0, r.useEffect)(() => {
          u.then(() => {
            if ((MathJax.typeset([c.current]), !o)) {
              const e = c.current.firstElementChild;
              e.id = c.current.id;
              for (let t = 0, n = c.current.classList.length; t < n; ++t)
                e.classList.add(c.current.classList.item(t));
              Object.assign(e.dataset, c.current.dataset),
                c.current.replaceWith(e),
                (c.current = e);
            }
            d();
          });
        }, [String(a)]),
          (0, r.useImperativeHandle)(n, () => ({
            get domElement() {
              return c.current;
            },
            ready: f,
          }));
        const [p, h] = i ? ["\\[", "\\]"] : ["\\(", "\\)"];
        return (0, e.jsx)("span", {...s, ref: c, children: p + a + h});
      });
      (0, r.forwardRef)(function (e, t) {
        const n = (0, r.useRef)(),
          a = (function (...e) {
            return (t) => {
              for (const n of e)
                "function" == typeof n
                  ? n(t)
                  : null === n ||
                    ("object" == typeof n &&
                      n.hasOwnProperty("current") &&
                      (n.current = t));
            };
          })(n, t);
        (0, r.useEffect)(() => {
          MathJax.startup.promise.then(() => {
            MathJax.typeset([n.current]);
          });
        }, []);
        const {tagName: l = "p", children: i, ...o} = e;
        return (0, r.createElement)(l, {...o, ref: a}, i);
      });
      function f(e, t, n) {
        return void 0 === n || 0 == +n
          ? Math[e](t)
          : ((t = +t),
            (n = +n),
            isNaN(t) || "number" != typeof n || n % 1 != 0
              ? NaN
              : ((t = t.toString().split("e")),
                +(
                  (t = (t = Math[e](+(t[0] + "e" + (t[1] ? +t[1] - n : -n))))
                    .toString()
                    .split("e"))[0] +
                  "e" +
                  (t[1] ? +t[1] + n : n)
                )));
      }
      const d = (e, t) => f("round", e, t);
      const p = (e) => {
        let t;
        const n = new Set(),
          r = (e, r) => {
            const a = "function" == typeof e ? e(t) : e;
            if (a !== t) {
              const e = t;
              (t = r ? a : Object.assign({}, t, a)), n.forEach((n) => n(t, e));
            }
          },
          a = () => t,
          l = {
            setState: r,
            getState: a,
            subscribe: (e) => (n.add(e), () => n.delete(e)),
            destroy: () => n.clear(),
          };
        return (t = e(r, a, l)), l;
      };
      var h = n(471);
      const m = (e) => {
        const t = "function" == typeof e ? ((e) => (e ? p(e) : p))(e) : e,
          n = (e, n) =>
            (function (e, t = e.getState, n) {
              const a = (0, h.useSyncExternalStoreWithSelector)(
                e.subscribe,
                e.getState,
                e.getServerState || e.getState,
                t,
                n,
              );
              return (0, r.useDebugValue)(a), a;
            })(t, e, n);
        return Object.assign(n, t), n;
      };
      const g = ((e) => (e ? m(e) : m))((e) => ({
        a: 1,
        b: 0,
        c: 0,
        d: 0,
        e: 1,
        f: 0,
        g: 0,
        h: 0,
        i: 1,
      }));
      function v() {
        window.parent.postMessage({type: "iframe-resize"}, location.origin);
      }
      const b = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
      function y() {
        const {raw: t} = String,
          n = (0, r.useRef)();
        (0, r.useEffect)(() => {
          const e = {};
          return (
            n.current.ready.then(() => {
              v();
              const t = Array.from(
                n.current.domElement.querySelectorAll("mjx-math input"),
              );
              for (const n of t)
                (e[n.id] = n),
                  n.setAttribute("tabindex", String(b.indexOf(n.id) + 1)),
                  n.addEventListener("change", () => {
                    g.setState({[n.id]: d(parseFloat(n.value) || 0, -4)});
                  });
            }),
            g.subscribe((t) => {
              for (const n in t) e[n].value = d(t[n], -4);
            })
          );
        }, []);
        const a = [
          t`\begin{bmatrix}`,
          [0, 1, 2]
            .map((e) =>
              [0, 1, 2]
                .map(
                  (n) =>
                    t`\input[2][matrix-entry][${+(e === n)}]{${b[3 * e + n]}}`,
                )
                .join(" & "),
            )
            .join(t`\\`),
          t`\end{bmatrix}`,
        ].join("\n");
        return (0, e.jsx)(
          c,
          Object.assign({display: !0, ref: n}, {children: a}),
        );
      }
      const S = THREE,
        w = {type: "change"},
        x = {type: "start"},
        E = {type: "end"};
      class k extends S.EventDispatcher {
        constructor(e, t) {
          super(),
            void 0 === t &&
              console.warn(
                'THREE.OrbitControls: The second parameter "domElement" is now mandatory.',
              ),
            t === document &&
              console.error(
                'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.',
              ),
            (this.object = e),
            (this.domElement = t),
            (this.domElement.style.touchAction = "none"),
            (this.enabled = !0),
            (this.target = new S.Vector3()),
            (this.minDistance = 0),
            (this.maxDistance = 1 / 0),
            (this.minZoom = 0),
            (this.maxZoom = 1 / 0),
            (this.minPolarAngle = 0),
            (this.maxPolarAngle = Math.PI),
            (this.minAzimuthAngle = -1 / 0),
            (this.maxAzimuthAngle = 1 / 0),
            (this.enableDamping = !1),
            (this.dampingFactor = 0.05),
            (this.enableZoom = !0),
            (this.zoomSpeed = 1),
            (this.enableRotate = !0),
            (this.rotateSpeed = 1),
            (this.enablePan = !0),
            (this.panSpeed = 1),
            (this.screenSpacePanning = !0),
            (this.keyPanSpeed = 7),
            (this.autoRotate = !1),
            (this.autoRotateSpeed = 2),
            (this.keys = {
              LEFT: "ArrowLeft",
              UP: "ArrowUp",
              RIGHT: "ArrowRight",
              BOTTOM: "ArrowDown",
            }),
            (this.mouseButtons = {
              LEFT: S.MOUSE.ROTATE,
              MIDDLE: S.MOUSE.DOLLY,
              RIGHT: S.MOUSE.PAN,
            }),
            (this.touches = {ONE: S.TOUCH.ROTATE, TWO: S.TOUCH.DOLLY_PAN}),
            (this.target0 = this.target.clone()),
            (this.position0 = this.object.position.clone()),
            (this.zoom0 = this.object.zoom),
            (this._domElementKeyEvents = null),
            (this.getPolarAngle = function () {
              return i.phi;
            }),
            (this.getAzimuthalAngle = function () {
              return i.theta;
            }),
            (this.getDistance = function () {
              return this.object.position.distanceTo(this.target);
            }),
            (this.listenToKeyEvents = function (e) {
              e.addEventListener("keydown", Y), (this._domElementKeyEvents = e);
            }),
            (this.saveState = function () {
              n.target0.copy(n.target),
                n.position0.copy(n.object.position),
                (n.zoom0 = n.object.zoom);
            }),
            (this.reset = function () {
              n.target.copy(n.target0),
                n.object.position.copy(n.position0),
                (n.object.zoom = n.zoom0),
                n.object.updateProjectionMatrix(),
                n.dispatchEvent(w),
                n.update(),
                (a = r.NONE);
            }),
            (this.update = (function () {
              const t = new S.Vector3(),
                f = new S.Quaternion().setFromUnitVectors(
                  e.up,
                  new S.Vector3(0, 1, 0),
                ),
                d = f.clone().invert(),
                p = new S.Vector3(),
                h = new S.Quaternion(),
                m = 2 * Math.PI;
              return function () {
                const e = n.object.position;
                t.copy(e).sub(n.target),
                  t.applyQuaternion(f),
                  i.setFromVector3(t),
                  n.autoRotate &&
                    a === r.NONE &&
                    C(((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed),
                  n.enableDamping
                    ? ((i.theta += o.theta * n.dampingFactor),
                      (i.phi += o.phi * n.dampingFactor))
                    : ((i.theta += o.theta), (i.phi += o.phi));
                let g = n.minAzimuthAngle,
                  v = n.maxAzimuthAngle;
                return (
                  isFinite(g) &&
                    isFinite(v) &&
                    (g < -Math.PI ? (g += m) : g > Math.PI && (g -= m),
                    v < -Math.PI ? (v += m) : v > Math.PI && (v -= m),
                    (i.theta =
                      g <= v
                        ? Math.max(g, Math.min(v, i.theta))
                        : i.theta > (g + v) / 2
                          ? Math.max(g, i.theta)
                          : Math.min(v, i.theta))),
                  (i.phi = Math.max(
                    n.minPolarAngle,
                    Math.min(n.maxPolarAngle, i.phi),
                  )),
                  i.makeSafe(),
                  (i.radius *= u),
                  (i.radius = Math.max(
                    n.minDistance,
                    Math.min(n.maxDistance, i.radius),
                  )),
                  !0 === n.enableDamping
                    ? n.target.addScaledVector(s, n.dampingFactor)
                    : n.target.add(s),
                  t.setFromSpherical(i),
                  t.applyQuaternion(d),
                  e.copy(n.target).add(t),
                  n.object.lookAt(n.target),
                  !0 === n.enableDamping
                    ? ((o.theta *= 1 - n.dampingFactor),
                      (o.phi *= 1 - n.dampingFactor),
                      s.multiplyScalar(1 - n.dampingFactor))
                    : (o.set(0, 0, 0), s.set(0, 0, 0)),
                  (u = 1),
                  !!(
                    c ||
                    p.distanceToSquared(n.object.position) > l ||
                    8 * (1 - h.dot(n.object.quaternion)) > l
                  ) &&
                    (n.dispatchEvent(w),
                    p.copy(n.object.position),
                    h.copy(n.object.quaternion),
                    (c = !1),
                    !0)
                );
              };
            })()),
            (this.dispose = function () {
              n.domElement.removeEventListener("contextmenu", q),
                n.domElement.removeEventListener("pointerdown", W),
                n.domElement.removeEventListener("pointercancel", Q),
                n.domElement.removeEventListener("wheel", $),
                n.domElement.removeEventListener("pointermove", B),
                n.domElement.removeEventListener("pointerup", V),
                null !== n._domElementKeyEvents &&
                  n._domElementKeyEvents.removeEventListener("keydown", Y);
            });
          const n = this,
            r = {
              NONE: -1,
              ROTATE: 0,
              DOLLY: 1,
              PAN: 2,
              TOUCH_ROTATE: 3,
              TOUCH_PAN: 4,
              TOUCH_DOLLY_PAN: 5,
              TOUCH_DOLLY_ROTATE: 6,
            };
          let a = r.NONE;
          const l = 1e-6,
            i = new S.Spherical(),
            o = new S.Spherical();
          let u = 1;
          const s = new S.Vector3();
          let c = !1;
          const f = new S.Vector2(),
            d = new S.Vector2(),
            p = new S.Vector2(),
            h = new S.Vector2(),
            m = new S.Vector2(),
            g = new S.Vector2(),
            v = new S.Vector2(),
            b = new S.Vector2(),
            y = new S.Vector2(),
            k = [],
            P = {};
          function _() {
            return Math.pow(0.95, n.zoomSpeed);
          }
          function C(e) {
            o.theta -= e;
          }
          function j(e) {
            o.phi -= e;
          }
          const z = (function () {
              const e = new S.Vector3();
              return function (t, n) {
                e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), s.add(e);
              };
            })(),
            O = (function () {
              const e = new S.Vector3();
              return function (t, r) {
                !0 === n.screenSpacePanning
                  ? e.setFromMatrixColumn(r, 1)
                  : (e.setFromMatrixColumn(r, 0),
                    e.crossVectors(n.object.up, e)),
                  e.multiplyScalar(t),
                  s.add(e);
              };
            })(),
            N = (function () {
              const e = new S.Vector3();
              return function (t, r) {
                const a = n.domElement;
                if (n.object.isPerspectiveCamera) {
                  const l = n.object.position;
                  e.copy(l).sub(n.target);
                  let i = e.length();
                  (i *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
                    z((2 * t * i) / a.clientHeight, n.object.matrix),
                    O((2 * r * i) / a.clientHeight, n.object.matrix);
                } else
                  n.object.isOrthographicCamera
                    ? (z(
                        (t * (n.object.right - n.object.left)) /
                          n.object.zoom /
                          a.clientWidth,
                        n.object.matrix,
                      ),
                      O(
                        (r * (n.object.top - n.object.bottom)) /
                          n.object.zoom /
                          a.clientHeight,
                        n.object.matrix,
                      ))
                    : (console.warn(
                        "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.",
                      ),
                      (n.enablePan = !1));
              };
            })();
          function T(e) {
            n.object.isPerspectiveCamera
              ? (u /= e)
              : n.object.isOrthographicCamera
                ? ((n.object.zoom = Math.max(
                    n.minZoom,
                    Math.min(n.maxZoom, n.object.zoom * e),
                  )),
                  n.object.updateProjectionMatrix(),
                  (c = !0))
                : (console.warn(
                    "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.",
                  ),
                  (n.enableZoom = !1));
          }
          function M(e) {
            n.object.isPerspectiveCamera
              ? (u *= e)
              : n.object.isOrthographicCamera
                ? ((n.object.zoom = Math.max(
                    n.minZoom,
                    Math.min(n.maxZoom, n.object.zoom / e),
                  )),
                  n.object.updateProjectionMatrix(),
                  (c = !0))
                : (console.warn(
                    "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.",
                  ),
                  (n.enableZoom = !1));
          }
          function L(e) {
            f.set(e.clientX, e.clientY);
          }
          function R(e) {
            h.set(e.clientX, e.clientY);
          }
          function I() {
            if (1 === k.length) f.set(k[0].pageX, k[0].pageY);
            else {
              const e = 0.5 * (k[0].pageX + k[1].pageX),
                t = 0.5 * (k[0].pageY + k[1].pageY);
              f.set(e, t);
            }
          }
          function D() {
            if (1 === k.length) h.set(k[0].pageX, k[0].pageY);
            else {
              const e = 0.5 * (k[0].pageX + k[1].pageX),
                t = 0.5 * (k[0].pageY + k[1].pageY);
              h.set(e, t);
            }
          }
          function A() {
            const e = k[0].pageX - k[1].pageX,
              t = k[0].pageY - k[1].pageY,
              n = Math.sqrt(e * e + t * t);
            v.set(0, n);
          }
          function F(e) {
            if (1 == k.length) d.set(e.pageX, e.pageY);
            else {
              const t = G(e),
                n = 0.5 * (e.pageX + t.x),
                r = 0.5 * (e.pageY + t.y);
              d.set(n, r);
            }
            p.subVectors(d, f).multiplyScalar(n.rotateSpeed);
            const t = n.domElement;
            C((2 * Math.PI * p.x) / t.clientHeight),
              j((2 * Math.PI * p.y) / t.clientHeight),
              f.copy(d);
          }
          function U(e) {
            if (1 === k.length) m.set(e.pageX, e.pageY);
            else {
              const t = G(e),
                n = 0.5 * (e.pageX + t.x),
                r = 0.5 * (e.pageY + t.y);
              m.set(n, r);
            }
            g.subVectors(m, h).multiplyScalar(n.panSpeed),
              N(g.x, g.y),
              h.copy(m);
          }
          function H(e) {
            const t = G(e),
              r = e.pageX - t.x,
              a = e.pageY - t.y,
              l = Math.sqrt(r * r + a * a);
            b.set(0, l),
              y.set(0, Math.pow(b.y / v.y, n.zoomSpeed)),
              T(y.y),
              v.copy(b);
          }
          function W(e) {
            !1 !== n.enabled &&
              (0 === k.length &&
                (n.domElement.setPointerCapture(e.pointerId),
                n.domElement.addEventListener("pointermove", B),
                n.domElement.addEventListener("pointerup", V)),
              (function (e) {
                k.push(e);
              })(e),
              "touch" === e.pointerType
                ? (function (e) {
                    switch ((Z(e), k.length)) {
                      case 1:
                        switch (n.touches.ONE) {
                          case S.TOUCH.ROTATE:
                            if (!1 === n.enableRotate) return;
                            I(), (a = r.TOUCH_ROTATE);
                            break;
                          case S.TOUCH.PAN:
                            if (!1 === n.enablePan) return;
                            D(), (a = r.TOUCH_PAN);
                            break;
                          default:
                            a = r.NONE;
                        }
                        break;
                      case 2:
                        switch (n.touches.TWO) {
                          case S.TOUCH.DOLLY_PAN:
                            if (!1 === n.enableZoom && !1 === n.enablePan)
                              return;
                            n.enableZoom && A(),
                              n.enablePan && D(),
                              (a = r.TOUCH_DOLLY_PAN);
                            break;
                          case S.TOUCH.DOLLY_ROTATE:
                            if (!1 === n.enableZoom && !1 === n.enableRotate)
                              return;
                            n.enableZoom && A(),
                              n.enableRotate && I(),
                              (a = r.TOUCH_DOLLY_ROTATE);
                            break;
                          default:
                            a = r.NONE;
                        }
                        break;
                      default:
                        a = r.NONE;
                    }
                    a !== r.NONE && n.dispatchEvent(x);
                  })(e)
                : (function (e) {
                    let t;
                    switch (e.button) {
                      case 0:
                        t = n.mouseButtons.LEFT;
                        break;
                      case 1:
                        t = n.mouseButtons.MIDDLE;
                        break;
                      case 2:
                        t = n.mouseButtons.RIGHT;
                        break;
                      default:
                        t = -1;
                    }
                    switch (t) {
                      case S.MOUSE.DOLLY:
                        if (!1 === n.enableZoom) return;
                        !(function (e) {
                          v.set(e.clientX, e.clientY);
                        })(e),
                          (a = r.DOLLY);
                        break;
                      case S.MOUSE.ROTATE:
                        if (e.ctrlKey || e.metaKey || e.shiftKey) {
                          if (!1 === n.enablePan) return;
                          R(e), (a = r.PAN);
                        } else {
                          if (!1 === n.enableRotate) return;
                          L(e), (a = r.ROTATE);
                        }
                        break;
                      case S.MOUSE.PAN:
                        if (e.ctrlKey || e.metaKey || e.shiftKey) {
                          if (!1 === n.enableRotate) return;
                          L(e), (a = r.ROTATE);
                        } else {
                          if (!1 === n.enablePan) return;
                          R(e), (a = r.PAN);
                        }
                        break;
                      default:
                        a = r.NONE;
                    }
                    a !== r.NONE && n.dispatchEvent(x);
                  })(e));
          }
          function B(e) {
            !1 !== n.enabled &&
              ("touch" === e.pointerType
                ? (function (e) {
                    switch ((Z(e), a)) {
                      case r.TOUCH_ROTATE:
                        if (!1 === n.enableRotate) return;
                        F(e), n.update();
                        break;
                      case r.TOUCH_PAN:
                        if (!1 === n.enablePan) return;
                        U(e), n.update();
                        break;
                      case r.TOUCH_DOLLY_PAN:
                        if (!1 === n.enableZoom && !1 === n.enablePan) return;
                        !(function (e) {
                          n.enableZoom && H(e), n.enablePan && U(e);
                        })(e),
                          n.update();
                        break;
                      case r.TOUCH_DOLLY_ROTATE:
                        if (!1 === n.enableZoom && !1 === n.enableRotate)
                          return;
                        !(function (e) {
                          n.enableZoom && H(e), n.enableRotate && F(e);
                        })(e),
                          n.update();
                        break;
                      default:
                        a = r.NONE;
                    }
                  })(e)
                : (function (e) {
                    if (!1 === n.enabled) return;
                    switch (a) {
                      case r.ROTATE:
                        if (!1 === n.enableRotate) return;
                        !(function (e) {
                          d.set(e.clientX, e.clientY),
                            p.subVectors(d, f).multiplyScalar(n.rotateSpeed);
                          const t = n.domElement;
                          C((2 * Math.PI * p.x) / t.clientHeight),
                            j((2 * Math.PI * p.y) / t.clientHeight),
                            f.copy(d),
                            n.update();
                        })(e);
                        break;
                      case r.DOLLY:
                        if (!1 === n.enableZoom) return;
                        !(function (e) {
                          b.set(e.clientX, e.clientY),
                            y.subVectors(b, v),
                            y.y > 0 ? T(_()) : y.y < 0 && M(_()),
                            v.copy(b),
                            n.update();
                        })(e);
                        break;
                      case r.PAN:
                        if (!1 === n.enablePan) return;
                        !(function (e) {
                          m.set(e.clientX, e.clientY),
                            g.subVectors(m, h).multiplyScalar(n.panSpeed),
                            N(g.x, g.y),
                            h.copy(m),
                            n.update();
                        })(e);
                    }
                  })(e));
          }
          function V(e) {
            X(e),
              0 === k.length &&
                (n.domElement.releasePointerCapture(e.pointerId),
                n.domElement.removeEventListener("pointermove", B),
                n.domElement.removeEventListener("pointerup", V)),
              n.dispatchEvent(E),
              (a = r.NONE);
          }
          function Q(e) {
            X(e);
          }
          function $(e) {
            !1 !== n.enabled &&
              !1 !== n.enableZoom &&
              a === r.NONE &&
              (e.preventDefault(),
              n.dispatchEvent(x),
              (function (e) {
                e.deltaY < 0 ? M(_()) : e.deltaY > 0 && T(_()), n.update();
              })(e),
              n.dispatchEvent(E));
          }
          function Y(e) {
            !1 !== n.enabled &&
              !1 !== n.enablePan &&
              (function (e) {
                let t = !1;
                switch (e.code) {
                  case n.keys.UP:
                    N(0, n.keyPanSpeed), (t = !0);
                    break;
                  case n.keys.BOTTOM:
                    N(0, -n.keyPanSpeed), (t = !0);
                    break;
                  case n.keys.LEFT:
                    N(n.keyPanSpeed, 0), (t = !0);
                    break;
                  case n.keys.RIGHT:
                    N(-n.keyPanSpeed, 0), (t = !0);
                }
                t && (e.preventDefault(), n.update());
              })(e);
          }
          function q(e) {
            !1 !== n.enabled && e.preventDefault();
          }
          function X(e) {
            delete P[e.pointerId];
            for (let t = 0; t < k.length; t++)
              if (k[t].pointerId == e.pointerId) return void k.splice(t, 1);
          }
          function Z(e) {
            let t = P[e.pointerId];
            void 0 === t && ((t = new S.Vector2()), (P[e.pointerId] = t)),
              t.set(e.pageX, e.pageY);
          }
          function G(e) {
            const t = e.pointerId === k[0].pointerId ? k[1] : k[0];
            return P[t.pointerId];
          }
          n.domElement.addEventListener("contextmenu", q),
            n.domElement.addEventListener("pointerdown", W),
            n.domElement.addEventListener("pointercancel", Q),
            n.domElement.addEventListener("wheel", $, {passive: !1}),
            this.update();
        }
      }
      var P = n(974);
      function _(e) {
        let t;
        const n = new Set(),
          r = (e, r) => {
            const a = "function" == typeof e ? e(t) : e;
            if (a !== t) {
              const e = t;
              (t = r ? a : Object.assign({}, t, a)), n.forEach((n) => n(t, e));
            }
          },
          a = () => t,
          l = {
            setState: r,
            getState: a,
            subscribe: (e, r, l) =>
              r || l
                ? ((e, r = a, l = Object.is) => {
                    console.warn(
                      "[DEPRECATED] Please use `subscribeWithSelector` middleware",
                    );
                    let i = r(t);
                    function o() {
                      const n = r(t);
                      if (!l(i, n)) {
                        const t = i;
                        e((i = n), t);
                      }
                    }
                    return n.add(o), () => n.delete(o);
                  })(e, r, l)
                : (n.add(e), () => n.delete(e)),
            destroy: () => n.clear(),
          };
        return (t = e(r, a, l)), l;
      }
      const C =
        "undefined" == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
          ? r.useEffect
          : r.useLayoutEffect;
      var j = n(873),
        z = n.n(j),
        O = n(296);
      function N(e, t, n = (e, t) => e === t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        const r = e.length;
        if (t.length !== r) return !1;
        for (let a = 0; a < r; a++) if (!n(e[a], t[a])) return !1;
        return !0;
      }
      const T = [];
      function M(e, t, n = !1, r = {}) {
        for (const l of T)
          if (N(t, l.keys, l.equal)) {
            if (n) return;
            if (Object.prototype.hasOwnProperty.call(l, "error")) throw l.error;
            if (Object.prototype.hasOwnProperty.call(l, "response"))
              return l.response;
            if (!n) throw l.promise;
          }
        const a = {
          keys: t,
          equal: r.equal,
          promise: e(...t)
            .then((e) => (a.response = e))
            .then(() => {
              r.lifespan &&
                r.lifespan > 0 &&
                setTimeout(() => {
                  const e = T.indexOf(a);
                  -1 !== e && T.splice(e, 1);
                }, r.lifespan);
            })
            .catch((e) => (a.error = e)),
        };
        if ((T.push(a), !n)) throw a.promise;
      }
      var L = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      };
      Object.freeze({__proto__: null});
      const R = (e) => e && e.isOrthographicCamera,
        I =
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
            ? r.useEffect
            : r.useLayoutEffect;
      function D(e) {
        const t = r.useRef(e);
        return (
          I(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
      function A({set: e}) {
        return I(() => (e(new Promise(() => null)), () => e(!1)), [e]), null;
      }
      class F extends r.Component {
        constructor(...e) {
          super(...e), (this.state = {error: !1});
        }
        componentDidCatch(e) {
          this.props.set(e);
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }
      F.getDerivedStateFromError = () => ({error: !0});
      const U = "__default";
      function H(e) {
        return Array.isArray(e)
          ? Math.min(Math.max(e[0], window.devicePixelRatio), e[1])
          : e;
      }
      const W = (e) => {
          var t;
          return null == (t = e.__r3f) ? void 0 : t.root.getState();
        },
        B = {
          obj: (e) => e === Object(e) && !B.arr(e) && "function" != typeof e,
          fun: (e) => "function" == typeof e,
          str: (e) => "string" == typeof e,
          num: (e) => "number" == typeof e,
          boo: (e) => "boolean" == typeof e,
          und: (e) => void 0 === e,
          arr: (e) => Array.isArray(e),
          equ(
            e,
            t,
            {
              arrays: n = "shallow",
              objects: r = "reference",
              strict: a = !0,
            } = {},
          ) {
            if (typeof e != typeof t || !!e != !!t) return !1;
            if (B.str(e) || B.num(e)) return e === t;
            const l = B.obj(e);
            if (l && "reference" === r) return e === t;
            const i = B.arr(e);
            if (i && "reference" === n) return e === t;
            if ((i || l) && e === t) return !0;
            let o;
            for (o in e) if (!(o in t)) return !1;
            for (o in a ? t : e) if (e[o] !== t[o]) return !1;
            if (B.und(o)) {
              if (i && 0 === e.length && 0 === t.length) return !0;
              if (
                l &&
                0 === Object.keys(e).length &&
                0 === Object.keys(t).length
              )
                return !0;
              if (e !== t) return !1;
            }
            return !0;
          },
        };
      function V(e) {
        const t = {nodes: {}, materials: {}};
        return (
          e &&
            e.traverse((e) => {
              e.name && (t.nodes[e.name] = e),
                e.material &&
                  !t.materials[e.material.name] &&
                  (t.materials[e.material.name] = e.material);
            }),
          t
        );
      }
      function Q(e, t) {
        const n = e;
        return (
          ((null != t && t.primitive) || !n.__r3f) &&
            (n.__r3f = Object.assign(
              {
                type: "",
                root: null,
                previousAttach: null,
                memoizedProps: {},
                eventCount: 0,
                handlers: {},
                objects: [],
                parent: null,
              },
              t,
            )),
          e
        );
      }
      function $(e, t) {
        let n = e;
        if (t.includes("-")) {
          const r = t.split("-"),
            a = r.pop();
          return (n = r.reduce((e, t) => e[t], e)), {target: n, key: a};
        }
        return {target: n, key: t};
      }
      const Y = /-\d+$/;
      function q(e, t, n) {
        if (B.str(n)) {
          if (Y.test(n)) {
            const t = n.replace(Y, ""),
              {target: r, key: a} = $(e, t);
            Array.isArray(r[a]) || (r[a] = []);
          }
          const {target: r, key: a} = $(e, n);
          (t.__r3f.previousAttach = r[a]), (r[a] = t);
        } else t.__r3f.previousAttach = n(e, t);
      }
      function X(e, t, n) {
        var r, a;
        if (B.str(n)) {
          const {target: r, key: a} = $(e, n),
            l = t.__r3f.previousAttach;
          void 0 === l ? delete r[a] : (r[a] = l);
        } else
          null == (r = t.__r3f) ||
            null == r.previousAttach ||
            r.previousAttach(e, t);
        null == (a = t.__r3f) || delete a.previousAttach;
      }
      function Z(e, t, n, r) {
        var a,
          {children: l, key: i, ref: o} = t,
          u = L(t, ["children", "key", "ref"]),
          s = void 0 === n ? {} : n,
          c = (s.children, s.key, s.ref, L(s, ["children", "key", "ref"]));
        void 0 === r && (r = !1);
        const f = null != (a = null == e ? void 0 : e.__r3f) ? a : {},
          d = Object.entries(u),
          p = [];
        if (r) {
          const e = Object.keys(c);
          for (let t = 0; t < e.length; t++)
            u.hasOwnProperty(e[t]) || d.unshift([e[t], U + "remove"]);
        }
        d.forEach(([t, n]) => {
          var r;
          if (null != (r = e.__r3f) && r.primitive && "object" === t) return;
          if (B.equ(n, c[t])) return;
          if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(t))
            return p.push([t, n, !0, []]);
          let a = [];
          t.includes("-") && (a = t.split("-")), p.push([t, n, !1, a]);
        });
        const h = Object.assign({}, u);
        return (
          f.memoizedProps &&
            f.memoizedProps.args &&
            (h.args = f.memoizedProps.args),
          f.memoizedProps &&
            f.memoizedProps.attach &&
            (h.attach = f.memoizedProps.attach),
          {memoized: h, changes: p}
        );
      }
      function G(e, t) {
        var n, r;
        const a = null != (n = null == e ? void 0 : e.__r3f) ? n : {},
          l = a.root,
          i =
            null !=
            (r = null == l || null == l.getState ? void 0 : l.getState())
              ? r
              : {},
          {memoized: o, changes: u} =
            (s = t) && s.memoized && s.changes ? t : Z(e, t);
        var s;
        const c = a.eventCount;
        if (
          (e.__r3f && (e.__r3f.memoizedProps = o),
          u.forEach(([t, n, r, l]) => {
            let u = e,
              s = u[t];
            if (l.length && ((s = l.reduce((e, t) => e[t], e)), !s || !s.set)) {
              const [n, ...r] = l.reverse();
              (u = r.reverse().reduce((e, t) => e[t], e)), (t = n);
            }
            var c;
            if (n === U + "remove")
              if (s && s.constructor)
                n = new s.constructor(...(null != (c = o.args) ? c : []));
              else if (u.constructor) {
                var f;
                const e = new u.constructor(
                  ...(null != (f = u.__r3f.memoizedProps.args) ? f : []),
                );
                (n = e[s]), e.dispose && e.dispose();
              } else n = 0;
            if (r)
              n ? (a.handlers[t] = n) : delete a.handlers[t],
                (a.eventCount = Object.keys(a.handlers).length);
            else if (s && s.set && (s.copy || s instanceof S.Layers)) {
              if (Array.isArray(n)) s.fromArray ? s.fromArray(n) : s.set(...n);
              else if (
                s.copy &&
                n &&
                n.constructor &&
                s.constructor.name === n.constructor.name
              )
                s.copy(n);
              else if (void 0 !== n) {
                const e = s instanceof S.Color;
                !e && s.setScalar
                  ? s.setScalar(n)
                  : s instanceof S.Layers && n instanceof S.Layers
                    ? (s.mask = n.mask)
                    : s.set(n);
                S.ColorManagement || i.linear || !e || s.convertSRGBToLinear();
              }
            } else
              (u[t] = n),
                !i.linear &&
                  u[t] instanceof S.Texture &&
                  (u[t].encoding = S.sRGBEncoding);
            K(e);
          }),
          a.parent && i.internal && e.raycast && c !== a.eventCount)
        ) {
          const t = i.internal.interaction.indexOf(e);
          t > -1 && i.internal.interaction.splice(t, 1),
            a.eventCount && i.internal.interaction.push(e);
        }
        return u.length && e.parent && J(e), e;
      }
      function K(e) {
        var t, n;
        const r =
          null == (t = e.__r3f) || null == (n = t.root) || null == n.getState
            ? void 0
            : n.getState();
        r && 0 === r.internal.frames && r.invalidate();
      }
      function J(e) {
        null == e.onUpdate || e.onUpdate(e);
      }
      function ee(e, t) {
        e.manual ||
          (R(e)
            ? ((e.left = t.width / -2),
              (e.right = t.width / 2),
              (e.top = t.height / 2),
              (e.bottom = t.height / -2))
            : (e.aspect = t.width / t.height),
          e.updateProjectionMatrix(),
          e.updateMatrixWorld());
      }
      function te(e) {
        return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId;
      }
      function ne(e, t, n, r) {
        const a = n.get(t);
        a &&
          (n.delete(t),
          0 === n.size && (e.delete(r), a.target.releasePointerCapture(r)));
      }
      function re(e) {
        const t = new S.Vector3();
        function n(e) {
          return e.filter((e) =>
            ["Move", "Over", "Enter", "Out", "Leave"].some((t) => {
              var n;
              return null == (n = e.__r3f)
                ? void 0
                : n.handlers["onPointer" + t];
            }),
          );
        }
        function r(t) {
          const {internal: n} = e.getState();
          Array.from(n.hovered.values()).forEach((e) => {
            if (
              !t.length ||
              !t.find(
                (t) =>
                  t.object === e.object &&
                  t.index === e.index &&
                  t.instanceId === e.instanceId,
              )
            ) {
              const r = e.eventObject.__r3f,
                a = null == r ? void 0 : r.handlers;
              if ((n.hovered.delete(te(e)), null != r && r.eventCount)) {
                const n = Object.assign(Object.assign({}, e), {
                  intersections: t || [],
                });
                null == a.onPointerOut || a.onPointerOut(n),
                  null == a.onPointerLeave || a.onPointerLeave(n);
              }
            }
          });
        }
        function a(e, t) {
          t.forEach((t) => {
            var n;
            return null == (n = t.__r3f) || null == n.handlers.onPointerMissed
              ? void 0
              : n.handlers.onPointerMissed(e);
          });
        }
        return {
          handlePointer: (l) => {
            switch (l) {
              case "onPointerLeave":
              case "onPointerCancel":
                return () => r([]);
              case "onLostPointerCapture":
                return (t) => {
                  const {internal: n} = e.getState();
                  "pointerId" in t &&
                    !n.capturedMap.has(t.pointerId) &&
                    (n.capturedMap.delete(t.pointerId), r([]));
                };
            }
            return (i) => {
              const {onPointerMissed: o, internal: u} = e.getState();
              u.lastEvent.current = i;
              const s = "onPointerMove" === l,
                c =
                  "onClick" === l ||
                  "onContextMenu" === l ||
                  "onDoubleClick" === l,
                f = (function (t, n) {
                  const r = e.getState(),
                    a = new Set(),
                    l = [],
                    i = n ? n(r.internal.interaction) : r.internal.interaction;
                  i.forEach((e) => {
                    const t = W(e);
                    t && (t.raycaster.camera = void 0);
                  }),
                    r.previousRoot ||
                      null == r.events.compute ||
                      r.events.compute(t, r);
                  let o = i
                    .flatMap((e) => {
                      const n = W(e);
                      return n &&
                        n.events.enabled &&
                        null !== n.raycaster.camera
                        ? (void 0 === n.raycaster.camera &&
                            (null == n.events.compute ||
                              n.events.compute(
                                t,
                                n,
                                null == (r = n.previousRoot)
                                  ? void 0
                                  : r.getState(),
                              ),
                            void 0 === n.raycaster.camera &&
                              (n.raycaster.camera = null)),
                          n.raycaster.camera
                            ? n.raycaster.intersectObject(e, !0)
                            : [])
                        : [];
                      var r;
                    })
                    .sort((e, t) => {
                      const n = W(e.object),
                        r = W(t.object);
                      return n && r
                        ? r.events.priority - n.events.priority ||
                            e.distance - t.distance
                        : 0;
                    })
                    .filter((e) => {
                      const t = te(e);
                      return !a.has(t) && (a.add(t), !0);
                    });
                  r.events.filter && (o = r.events.filter(o, r));
                  for (const e of o) {
                    let t = e.object;
                    for (; t; ) {
                      var u;
                      null != (u = t.__r3f) &&
                        u.eventCount &&
                        l.push(
                          Object.assign(Object.assign({}, e), {eventObject: t}),
                        ),
                        (t = t.parent);
                    }
                  }
                  if (
                    "pointerId" in t &&
                    r.internal.capturedMap.has(t.pointerId)
                  )
                    for (let e of r.internal.capturedMap
                      .get(t.pointerId)
                      .values())
                      l.push(e.intersection);
                  return l;
                })(i, s ? n : void 0),
                d = c
                  ? (function (t) {
                      const {internal: n} = e.getState(),
                        r = t.offsetX - n.initialClick[0],
                        a = t.offsetY - n.initialClick[1];
                      return Math.round(Math.sqrt(r * r + a * a));
                    })(i)
                  : 0;
              "onPointerDown" === l &&
                ((u.initialClick = [i.offsetX, i.offsetY]),
                (u.initialHits = f.map((e) => e.eventObject))),
                c && !f.length && d <= 2 && (a(i, u.interaction), o && o(i)),
                s && r(f),
                (function (n, a, l, i) {
                  const {
                    raycaster: o,
                    pointer: u,
                    camera: s,
                    internal: c,
                  } = e.getState();
                  if (n.length) {
                    const e = t.set(u.x, u.y, 0).unproject(s),
                      f = {stopped: !1};
                    for (const t of n) {
                      const d = (e) => {
                          var n, r;
                          return (
                            null !=
                              (n =
                                null == (r = c.capturedMap.get(e))
                                  ? void 0
                                  : r.has(t.eventObject)) && n
                          );
                        },
                        p = (e) => {
                          const n = {intersection: t, target: a.target};
                          c.capturedMap.has(e)
                            ? c.capturedMap.get(e).set(t.eventObject, n)
                            : c.capturedMap.set(
                                e,
                                new Map([[t.eventObject, n]]),
                              ),
                            a.target.setPointerCapture(e);
                        },
                        h = (e) => {
                          const n = c.capturedMap.get(e);
                          n && ne(c.capturedMap, t.eventObject, n, e);
                        };
                      let m = {};
                      for (let e in a) {
                        let t = a[e];
                        "function" != typeof t && (m[e] = t);
                      }
                      let g = Object.assign(
                        Object.assign(Object.assign({}, t), m),
                        {
                          pointer: u,
                          intersections: n,
                          stopped: f.stopped,
                          delta: l,
                          unprojectedPoint: e,
                          ray: o.ray,
                          camera: s,
                          stopPropagation: () => {
                            const e =
                              "pointerId" in a &&
                              c.capturedMap.get(a.pointerId);
                            (!e || e.has(t.eventObject)) &&
                              ((g.stopped = f.stopped = !0),
                              c.hovered.size &&
                                Array.from(c.hovered.values()).find(
                                  (e) => e.eventObject === t.eventObject,
                                )) &&
                              r([...n.slice(0, n.indexOf(t)), t]);
                          },
                          target: {
                            hasPointerCapture: d,
                            setPointerCapture: p,
                            releasePointerCapture: h,
                          },
                          currentTarget: {
                            hasPointerCapture: d,
                            setPointerCapture: p,
                            releasePointerCapture: h,
                          },
                          nativeEvent: a,
                        },
                      );
                      if ((i(g), !0 === f.stopped)) break;
                    }
                  }
                })(f, i, d, (e) => {
                  const t = e.eventObject,
                    n = t.__r3f,
                    r = null == n ? void 0 : n.handlers;
                  if (null != n && n.eventCount)
                    if (s) {
                      if (
                        r.onPointerOver ||
                        r.onPointerEnter ||
                        r.onPointerOut ||
                        r.onPointerLeave
                      ) {
                        const t = te(e),
                          n = u.hovered.get(t);
                        n
                          ? n.stopped && e.stopPropagation()
                          : (u.hovered.set(t, e),
                            null == r.onPointerOver || r.onPointerOver(e),
                            null == r.onPointerEnter || r.onPointerEnter(e));
                      }
                      null == r.onPointerMove || r.onPointerMove(e);
                    } else {
                      const n = r[l];
                      n
                        ? (c && !u.initialHits.includes(t)) ||
                          (a(
                            i,
                            u.interaction.filter(
                              (e) => !u.initialHits.includes(e),
                            ),
                          ),
                          n(e))
                        : c &&
                          u.initialHits.includes(t) &&
                          a(
                            i,
                            u.interaction.filter(
                              (e) => !u.initialHits.includes(e),
                            ),
                          );
                    }
                });
            };
          },
        };
      }
      let ae = {},
        le = (e) => {
          ae = Object.assign(Object.assign({}, ae), e);
        };
      const ie = (e) => !(null == e || !e.render),
        oe = r.createContext(null),
        ue = (e, t) => {
          const n = (function (e) {
              const t = "function" == typeof e ? _(e) : e,
                n = (e = t.getState, n = Object.is) => {
                  const [, a] = (0, r.useReducer)((e) => e + 1, 0),
                    l = t.getState(),
                    i = (0, r.useRef)(l),
                    o = (0, r.useRef)(e),
                    u = (0, r.useRef)(n),
                    s = (0, r.useRef)(!1),
                    c = (0, r.useRef)();
                  let f;
                  void 0 === c.current && (c.current = e(l));
                  let d = !1;
                  (i.current !== l ||
                    o.current !== e ||
                    u.current !== n ||
                    s.current) &&
                    ((f = e(l)), (d = !n(c.current, f))),
                    C(() => {
                      d && (c.current = f),
                        (i.current = l),
                        (o.current = e),
                        (u.current = n),
                        (s.current = !1);
                    });
                  const p = (0, r.useRef)(l);
                  C(() => {
                    const e = () => {
                        try {
                          const e = t.getState(),
                            n = o.current(e);
                          u.current(c.current, n) ||
                            ((i.current = e), (c.current = n), a());
                        } catch (e) {
                          (s.current = !0), a();
                        }
                      },
                      n = t.subscribe(e);
                    return t.getState() !== p.current && e(), n;
                  }, []);
                  const h = d ? f : c.current;
                  return (0, r.useDebugValue)(h), h;
                };
              return (
                Object.assign(n, t),
                (n[Symbol.iterator] = function () {
                  console.warn(
                    "[useStore, api] = create() is deprecated and will be removed in v4",
                  );
                  const e = [n, t];
                  return {
                    next() {
                      const t = e.length <= 0;
                      return {value: e.shift(), done: t};
                    },
                  };
                }),
                n
              );
            })((n, a) => {
              const l = new S.Vector3(),
                i = new S.Vector3(),
                o = new S.Vector3();
              function u(e = a().camera, t = i, n = a().size) {
                const {width: r, height: u} = n,
                  s = r / u;
                t instanceof S.Vector3 ? o.copy(t) : o.set(...t);
                const c = e.getWorldPosition(l).distanceTo(o);
                if (R(e))
                  return {
                    width: r / e.zoom,
                    height: u / e.zoom,
                    factor: 1,
                    distance: c,
                    aspect: s,
                  };
                {
                  const t = (e.fov * Math.PI) / 180,
                    n = 2 * Math.tan(t / 2) * c,
                    a = n * (r / u);
                  return {
                    width: a,
                    height: n,
                    factor: r / a,
                    distance: c,
                    aspect: s,
                  };
                }
              }
              let s;
              const c = (e) =>
                  n((t) => ({
                    performance: Object.assign(
                      Object.assign({}, t.performance),
                      {current: e},
                    ),
                  })),
                f = new S.Vector2();
              return {
                set: n,
                get: a,
                gl: null,
                camera: null,
                raycaster: null,
                events: {priority: 1, enabled: !0, connected: !1},
                xr: null,
                invalidate: (t = 1) => e(a(), t),
                advance: (e, n) => t(e, n, a()),
                legacy: !1,
                linear: !1,
                flat: !1,
                scene: Q(new S.Scene()),
                controls: null,
                clock: new S.Clock(),
                pointer: f,
                mouse: f,
                frameloop: "always",
                onPointerMissed: void 0,
                performance: {
                  current: 1,
                  min: 0.5,
                  max: 1,
                  debounce: 200,
                  regress: () => {
                    const e = a();
                    s && clearTimeout(s),
                      e.performance.current !== e.performance.min &&
                        c(e.performance.min),
                      (s = setTimeout(
                        () => c(a().performance.max),
                        e.performance.debounce,
                      ));
                  },
                },
                size: {width: 0, height: 0},
                viewport: {
                  initialDpr: 0,
                  dpr: 0,
                  width: 0,
                  height: 0,
                  aspect: 0,
                  distance: 0,
                  factor: 0,
                  getCurrentViewport: u,
                },
                setEvents: (e) =>
                  n((t) =>
                    Object.assign(Object.assign({}, t), {
                      events: Object.assign(Object.assign({}, t.events), e),
                    }),
                  ),
                setSize: (e, t) => {
                  const r = a().camera,
                    l = {width: e, height: t};
                  n((e) => ({
                    size: l,
                    viewport: Object.assign(
                      Object.assign({}, e.viewport),
                      u(r, i, l),
                    ),
                  }));
                },
                setDpr: (e) =>
                  n((t) => {
                    const n = H(e);
                    return {
                      viewport: Object.assign(Object.assign({}, t.viewport), {
                        dpr: n,
                        initialDpr: t.viewport.initialDpr || n,
                      }),
                    };
                  }),
                setFrameloop: (e = "always") => {
                  const t = a().clock;
                  t.stop(),
                    (t.elapsedTime = 0),
                    "never" !== e && (t.start(), (t.elapsedTime = 0)),
                    n(() => ({frameloop: e}));
                },
                previousRoot: void 0,
                internal: {
                  active: !1,
                  priority: 0,
                  frames: 0,
                  lastEvent: r.createRef(),
                  interaction: [],
                  hovered: new Map(),
                  subscribers: [],
                  initialClick: [0, 0],
                  initialHits: [],
                  capturedMap: new Map(),
                  subscribe: (e, t, r) => (
                    n(({internal: n}) => ({
                      internal: Object.assign(Object.assign({}, n), {
                        priority: n.priority + (t > 0 ? 1 : 0),
                        subscribers: [
                          ...n.subscribers,
                          {ref: e, priority: t, store: r},
                        ].sort((e, t) => e.priority - t.priority),
                      }),
                    })),
                    () => {
                      n(({internal: n}) => ({
                        internal: Object.assign(Object.assign({}, n), {
                          priority: n.priority - (t > 0 ? 1 : 0),
                          subscribers: n.subscribers.filter((t) => t.ref !== e),
                        }),
                      }));
                    }
                  ),
                },
              };
            }),
            a = n.getState();
          let l = a.size,
            i = a.viewport.dpr;
          return (
            n.subscribe(() => {
              const {camera: e, size: t, viewport: r, gl: a} = n.getState();
              (t === l && r.dpr === i) ||
                (ee(e, t),
                a.setPixelRatio(r.dpr),
                a.setSize(t.width, t.height),
                (l = t),
                (i = r.dpr));
            }),
            n.subscribe((t) => e(t)),
            n
          );
        };
      let se,
        ce = [],
        fe = [],
        de = [];
      function pe(e, t) {
        for (se = 0; se < e.length; se++) e[se](t);
      }
      let he, me;
      function ge(e, t, n) {
        let r = t.clock.getDelta();
        for (
          "never" === t.frameloop &&
            "number" == typeof e &&
            ((r = e - t.clock.elapsedTime),
            (t.clock.oldTime = t.clock.elapsedTime),
            (t.clock.elapsedTime = e)),
            he = t.internal.subscribers,
            se = 0;
          se < he.length;
          se++
        )
          (me = he[se]), me.ref.current(me.store.getState(), r, n);
        return (
          !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera),
          (t.internal.frames = Math.max(0, t.internal.frames - 1)),
          "always" === t.frameloop ? 1 : t.internal.frames
        );
      }
      function ve() {
        const e = r.useContext(oe);
        if (!e) throw "R3F hooks can only be used within the Canvas component!";
        return e;
      }
      function be(e, t) {
        return function (n, ...r) {
          const a = new n();
          return (
            e && e(a),
            Promise.all(
              r.map(
                (e) =>
                  new Promise((n, r) =>
                    a.load(
                      e,
                      (e) => {
                        e.scene && Object.assign(e, V(e.scene)), n(e);
                      },
                      t,
                      (t) => r(`Could not load ${e}: ${t.message}`),
                    ),
                  ),
              ),
            )
          );
        };
      }
      function ye(e, t, n, r) {
        const a = Array.isArray(t) ? t : [t],
          l = ((e, t, n) => M(e, t, !1, n))(be(n, r), [e, ...a], {
            equal: B.equ,
          });
        return Array.isArray(t) ? l : l[0];
      }
      (ye.preload = function (e, t, n) {
        const r = Array.isArray(t) ? t : [t];
        return ((e, t, n) => {
          M(e, t, !0, n);
        })(be(n), [e, ...r]);
      }),
        (ye.clear = function (e, t) {
          return ((e) => {
            if (void 0 === e || 0 === e.length) T.splice(0, T.length);
            else {
              const t = T.find((t) => N(e, t.keys, t.equal));
              if (t) {
                const e = T.indexOf(t);
                -1 !== e && T.splice(e, 1);
              }
            }
          })([e, ...(Array.isArray(t) ? t : [t])]);
        });
      const Se = new Map(),
        {invalidate: we, advance: xe} = (function (e) {
          let t,
            n,
            r,
            a = !1;
          function l(i) {
            if (
              ((n = requestAnimationFrame(l)),
              (a = !0),
              (t = 0),
              ce.length && pe(ce, i),
              e.forEach((e) => {
                var n;
                (r = e.store.getState()),
                  !r.internal.active ||
                    !("always" === r.frameloop || r.internal.frames > 0) ||
                    (null != (n = r.gl.xr) && n.isPresenting) ||
                    (t += ge(i, r));
              }),
              fe.length && pe(fe, i),
              0 === t)
            )
              return de.length && pe(de, i), (a = !1), cancelAnimationFrame(n);
          }
          return {
            loop: l,
            invalidate: function t(n, r = 1) {
              var i;
              if (!n) return e.forEach((e) => t(e.store.getState()), r);
              (null != (i = n.gl.xr) && i.isPresenting) ||
                !n.internal.active ||
                "never" === n.frameloop ||
                ((n.internal.frames = Math.min(60, n.internal.frames + r)),
                a || ((a = !0), requestAnimationFrame(l)));
            },
            advance: function (t, n = !0, r, a) {
              n && pe(ce, t),
                r ? ge(t, r, a) : e.forEach((e) => ge(t, e.store.getState())),
                n && pe(fe, t);
            },
          };
        })(Se),
        {reconciler: Ee, applyProps: ke} = (function (e, t) {
          function n(e, t, n) {
            var {args: r = [], attach: a} = t,
              l = L(t, ["args", "attach"]);
            let i,
              o = `${e[0].toUpperCase()}${e.slice(1)}`;
            if (
              (void 0 === a &&
                (o.endsWith("Geometry")
                  ? (a = "geometry")
                  : o.endsWith("Material") && (a = "material")),
              "primitive" === e)
            ) {
              if (void 0 === l.object)
                throw "Primitives without 'object' are invalid!";
              i = Q(l.object, {type: e, root: n, attach: a, primitive: !0});
            } else {
              const t = ae[o];
              if (!t)
                throw `${o} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`;
              if (!Array.isArray(r)) throw "The args prop must be an array!";
              i = Q(new t(...r), {
                type: e,
                root: n,
                attach: a,
                memoizedProps: {args: r},
              });
            }
            return "inject" !== o && G(i, l), i;
          }
          function r(e, t) {
            let n = !1;
            var r, a;
            t &&
              (null != (r = t.__r3f) && r.attach
                ? q(e, t, t.__r3f.attach)
                : t.isObject3D && e.isObject3D && (e.add(t), (n = !0)),
              n || null == (a = e.__r3f) || a.objects.push(t),
              t.__r3f || Q(t, {}),
              (t.__r3f.parent = e),
              J(t),
              K(t));
          }
          function a(e, t, n) {
            let r = !1;
            if (t) {
              var a, l;
              if (null != (a = t.__r3f) && a.attach) q(e, t, t.__r3f.attach);
              else if (t.isObject3D && e.isObject3D) {
                (t.parent = e), t.dispatchEvent({type: "added"});
                const a = e.children.filter((e) => e !== t),
                  l = a.indexOf(n);
                (e.children = [...a.slice(0, l), t, ...a.slice(l)]), (r = !0);
              }
              r || null == (l = e.__r3f) || l.objects.push(t),
                t.__r3f || Q(t, {}),
                (t.__r3f.parent = e),
                J(t),
                K(t);
            }
          }
          function l(e, t, n = !1) {
            e && [...e].forEach((e) => i(t, e, n));
          }
          function i(e, t, n) {
            if (t) {
              var r, a, i;
              if (
                (t.__r3f && (t.__r3f.parent = null),
                null != (r = e.__r3f) &&
                  r.objects &&
                  (e.__r3f.objects = e.__r3f.objects.filter((e) => e !== t)),
                null != (a = t.__r3f) && a.attach)
              )
                X(e, t, t.__r3f.attach);
              else if (t.isObject3D && e.isObject3D) {
                var o;
                e.remove(t),
                  null != (o = t.__r3f) &&
                    o.root &&
                    (function (e, t) {
                      const {events: n, internal: r} = e.getState();
                      (r.interaction = r.interaction.filter((e) => e !== t)),
                        (r.initialHits = r.initialHits.filter((e) => e !== t)),
                        r.hovered.forEach((e, n) => {
                          (e.eventObject !== t && e.object !== t) ||
                            r.hovered.delete(n);
                        }),
                        r.capturedMap.forEach((e, n) => {
                          ne(r.capturedMap, t, e, n);
                        });
                    })(t.__r3f.root, t);
              }
              const s = null == (i = t.__r3f) ? void 0 : i.primitive,
                c = void 0 === n ? null !== t.dispose && !s : n;
              var u;
              if (!s)
                l(null == (u = t.__r3f) ? void 0 : u.objects, t, c),
                  l(t.children, t, c);
              t.__r3f &&
                (delete t.__r3f.root,
                delete t.__r3f.objects,
                delete t.__r3f.handlers,
                delete t.__r3f.memoizedProps,
                s || delete t.__r3f),
                c &&
                  t.dispose &&
                  "Scene" !== t.type &&
                  (0, O.unstable_scheduleCallback)(
                    O.unstable_IdlePriority,
                    () => {
                      try {
                        t.dispose();
                      } catch (e) {}
                    },
                  ),
                K(e);
            }
          }
          return {
            reconciler: z()({
              createInstance: n,
              removeChild: i,
              appendChild: r,
              appendInitialChild: r,
              insertBefore: a,
              supportsMicrotask: !0,
              warnsIfNotActing: !0,
              supportsMutation: !0,
              isPrimaryRenderer: !1,
              noTimeout: -1,
              appendChildToContainer: (e, t) => {
                const n = e.getState().scene;
                (n.__r3f.root = e), r(n, t);
              },
              removeChildFromContainer: (e, t) => i(e.getState().scene, t),
              insertInContainerBefore: (e, t, n) => a(e.getState().scene, t, n),
              getRootHostContext: () => null,
              getChildHostContext: (e) => e,
              finalizeInitialChildren(e) {
                var t;
                return !!(null != (t = null == e ? void 0 : e.__r3f) ? t : {})
                  .handlers;
              },
              prepareUpdate(e, t, n, r) {
                if (e.__r3f.primitive && r.object && r.object !== e)
                  return [!0];
                {
                  const {args: t = [], children: a} = r,
                    l = L(r, ["args", "children"]),
                    {args: i = [], children: o} = n,
                    u = L(n, ["args", "children"]);
                  if (!Array.isArray(t))
                    throw "The args prop must be an array!";
                  if (t.some((e, t) => e !== i[t])) return [!0];
                  const s = Z(e, l, u, !0);
                  return s.changes.length ? [!1, s] : null;
                }
              },
              commitUpdate(e, [t, a], l, o, u, s) {
                t
                  ? (function (e, t, a, l) {
                      var o, u;
                      const s = null == (o = e.__r3f) ? void 0 : o.parent;
                      if (!s) return;
                      const c = n(
                        t,
                        a,
                        null == (u = e.__r3f) ? void 0 : u.root,
                      );
                      "primitive" !== t &&
                        e.children &&
                        (e.children.forEach((e) => r(c, e)), (e.children = [])),
                        e.__r3f.objects.forEach((e) => r(c, e)),
                        (e.__r3f.objects = []),
                        i(s, e),
                        r(s, c),
                        c.raycast &&
                          c.__r3f.eventCount &&
                          c.__r3f.root.getState().internal.interaction.push(c);
                      [l, l.alternate].forEach((e) => {
                        null !== e &&
                          ((e.stateNode = c),
                          e.ref &&
                            ("function" == typeof e.ref
                              ? e.ref(c)
                              : (e.ref.current = c)));
                      });
                    })(e, l, u, s)
                  : G(e, a);
              },
              commitMount(e, t, n, r) {
                var a;
                const l = null != (a = null == e ? void 0 : e.__r3f) ? a : {};
                e.raycast &&
                  l.handlers &&
                  l.eventCount &&
                  e.__r3f.root.getState().internal.interaction.push(e);
              },
              getPublicInstance: (e) => e,
              shouldDeprioritizeSubtree: () => !1,
              prepareForCommit: () => null,
              preparePortalMount: (e) => Q(e.getState().scene),
              resetAfterCommit: () => {},
              shouldSetTextContent: () => !1,
              clearContainer: () => !1,
              detachDeletedInstance: () => {},
              hideInstance(e) {
                var t;
                const {attach: n, parent: r} =
                  null != (t = null == e ? void 0 : e.__r3f) ? t : {};
                n && r && X(r, e, n), e.isObject3D && (e.visible = !1), K(e);
              },
              unhideInstance(e, t) {
                var n;
                const {attach: r, parent: a} =
                  null != (n = null == e ? void 0 : e.__r3f) ? n : {};
                r && a && q(a, e, r),
                  ((e.isObject3D && null == t.visible) || t.visible) &&
                    (e.visible = !0),
                  K(e);
              },
              createTextInstance: () => {},
              hideTextInstance: () => {
                throw new Error("Text is not allowed in the R3F tree.");
              },
              unhideTextInstance: () => {},
              getCurrentEventPriority: () => (t ? t() : P.DefaultEventPriority),
              now:
                "undefined" != typeof performance && B.fun(performance.now)
                  ? performance.now
                  : B.fun(Date.now)
                    ? Date.now
                    : void 0,
              scheduleTimeout: B.fun(setTimeout) ? setTimeout : void 0,
              cancelTimeout: B.fun(clearTimeout) ? clearTimeout : void 0,
              setTimeout: B.fun(setTimeout) ? setTimeout : void 0,
              clearTimeout: B.fun(clearTimeout) ? clearTimeout : void 0,
            }),
            applyProps: G,
          };
        })(0, function () {
          var e, t;
          switch (
            null == (e = window) || null == (t = e.event) ? void 0 : t.type
          ) {
            case "click":
            case "contextmenu":
            case "dblclick":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
              return P.DiscreteEventPriority;
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerenter":
            case "pointerleave":
            case "wheel":
              return P.ContinuousEventPriority;
            default:
              return P.DefaultEventPriority;
          }
        }),
        Pe = {objects: "shallow", strict: !1},
        _e = (e, t) => {
          const n = "function" == typeof e ? e(t) : e;
          return ie(n)
            ? n
            : new S.WebGLRenderer(
                Object.assign(
                  {
                    powerPreference: "high-performance",
                    canvas: t,
                    antialias: !0,
                    alpha: !0,
                  },
                  e,
                ),
              );
        };
      function Ce(e) {
        let t = Se.get(e),
          n = null == t ? void 0 : t.fiber,
          a = null == t ? void 0 : t.store;
        t && console.warn("R3F.createRoot should only be called once!");
        const l =
            "function" == typeof reportError ? reportError : console.error,
          i = a || ue(we, xe),
          o =
            n ||
            Ee.createContainer(
              i,
              P.ConcurrentRoot,
              null,
              !1,
              null,
              "",
              l,
              null,
            );
        let u;
        t || Se.set(e, {fiber: o, store: i});
        let s = !1;
        return {
          configure(t = {}) {
            var n, r, a, l;
            let {
                gl: o,
                size: c,
                events: f,
                onCreated: d,
                shadows: p = !1,
                linear: h = !1,
                flat: m = !1,
                legacy: g = !1,
                orthographic: v = !1,
                frameloop: b = "always",
                dpr: y = [1, 2],
                performance: w,
                raycaster: x,
                camera: E,
                onPointerMissed: k,
              } = t,
              P = i.getState(),
              _ = P.gl;
            P.gl || P.set({gl: (_ = _e(o, e))});
            let C = P.raycaster;
            C || P.set({raycaster: (C = new S.Raycaster())});
            const j = x || {},
              {params: z} = j,
              O = L(j, ["params"]);
            if (
              (B.equ(O, C, Pe) || ke(C, Object.assign({}, O)),
              B.equ(z, C.params, Pe) ||
                ke(C, {params: Object.assign(Object.assign({}, C.params), z)}),
              !P.camera)
            ) {
              const e = E instanceof S.Camera,
                t = e
                  ? E
                  : v
                    ? new S.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3)
                    : new S.PerspectiveCamera(75, 0, 0.1, 1e3);
              e ||
                ((t.position.z = 5),
                E && ke(t, E),
                (null != E && E.rotation) || t.lookAt(0, 0, 0)),
                P.set({camera: t});
            }
            if (!P.xr) {
              const e = (e, t) => {
                  const n = i.getState();
                  "never" !== n.frameloop && xe(e, !0, n, t);
                },
                t = () => {
                  const t = i.getState().gl;
                  (t.xr.enabled = t.xr.isPresenting),
                    t.xr.setAnimationLoop(t.xr.isPresenting ? e : null);
                },
                n = {
                  connect() {
                    const e = i.getState().gl;
                    e.xr.addEventListener("sessionstart", t),
                      e.xr.addEventListener("sessionend", t);
                  },
                  disconnect() {
                    const e = i.getState().gl;
                    e.xr.removeEventListener("sessionstart", t),
                      e.xr.removeEventListener("sessionend", t);
                  },
                };
              _.xr && n.connect(), P.set({xr: n});
            }
            if (_.shadowMap) {
              const e = B.boo(p);
              if (
                (e && _.shadowMap.enabled !== p) ||
                !B.equ(p, _.shadowMap, Pe)
              ) {
                const t = _.shadowMap.enabled;
                (_.shadowMap.enabled = !!p),
                  e
                    ? (_.shadowMap.type = S.PCFSoftShadowMap)
                    : Object.assign(_.shadowMap, p),
                  t !== _.shadowMap.enabled && (_.shadowMap.needsUpdate = !0);
              }
            }
            S.ColorManagement && (S.ColorManagement.legacyMode = g);
            const N = h ? S.LinearEncoding : S.sRGBEncoding,
              T = m ? S.NoToneMapping : S.ACESFilmicToneMapping;
            return (
              _.outputEncoding !== N && (_.outputEncoding = N),
              _.toneMapping !== T && (_.toneMapping = T),
              P.legacy !== g && P.set(() => ({legacy: g})),
              P.linear !== h && P.set(() => ({linear: h})),
              P.flat !== m && P.set(() => ({flat: m})),
              !o || B.fun(o) || ie(o) || B.equ(o, _, Pe) || ke(_, o),
              f && !P.events.handlers && P.set({events: f(i)}),
              y && P.viewport.dpr !== H(y) && P.setDpr(y),
              (c = c || {
                width:
                  null !=
                  (n = null == (r = e.parentElement) ? void 0 : r.clientWidth)
                    ? n
                    : 0,
                height:
                  null !=
                  (a = null == (l = e.parentElement) ? void 0 : l.clientHeight)
                    ? a
                    : 0,
              }),
              B.equ(c, P.size, Pe) || P.setSize(c.width, c.height),
              P.frameloop !== b && P.setFrameloop(b),
              P.onPointerMissed || P.set({onPointerMissed: k}),
              w &&
                !B.equ(w, P.performance, Pe) &&
                P.set((e) => ({
                  performance: Object.assign(
                    Object.assign({}, e.performance),
                    w,
                  ),
                })),
              (u = d),
              (s = !0),
              this
            );
          },
          render(t) {
            return (
              s || this.configure(),
              Ee.updateContainer(
                r.createElement(je, {
                  store: i,
                  children: t,
                  onCreated: u,
                  rootElement: e,
                }),
                o,
                null,
                () => {},
              ),
              i
            );
          },
          unmount() {
            ze(e);
          },
        };
      }
      function je({store: e, children: t, onCreated: n, rootElement: a}) {
        return (
          I(() => {
            const t = e.getState();
            t.set((e) => ({
              internal: Object.assign(Object.assign({}, e.internal), {
                active: !0,
              }),
            })),
              n && n(t),
              e.getState().events.connected ||
                null == t.events.connect ||
                t.events.connect(a);
          }, []),
          r.createElement(oe.Provider, {value: e}, t)
        );
      }
      function ze(e, t) {
        const n = Se.get(e),
          r = null == n ? void 0 : n.fiber;
        if (r) {
          const a = null == n ? void 0 : n.store.getState();
          a && (a.internal.active = !1),
            Ee.updateContainer(null, r, null, () => {
              a &&
                setTimeout(() => {
                  try {
                    var n, r, l, i;
                    null == a.events.disconnect || a.events.disconnect(),
                      null == (n = a.gl) ||
                        null == (r = n.renderLists) ||
                        null == r.dispose ||
                        r.dispose(),
                      null == (l = a.gl) ||
                        null == l.forceContextLoss ||
                        l.forceContextLoss(),
                      null != (i = a.gl) && i.xr && a.xr.disconnect(),
                      (function (e) {
                        e.dispose && "Scene" !== e.type && e.dispose();
                        for (const t in e)
                          null == t.dispose || t.dispose(), delete e[t];
                      })(a),
                      Se.delete(e),
                      t && t(e);
                  } catch (o) {}
                }, 500);
            });
        }
      }
      Ee.injectIntoDevTools({
        bundleType: 0,
        rendererPackageName: "@react-three/fiber",
        version: "18.0.0",
      });
      r.unstable_act;
      function Oe(e, t) {
        return void 0 === t
          ? Oe(0, e)
          : new Array(t - e).fill(null).map((t, n) => e + n);
      }
      function Ne() {
        return (
          (Ne =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Ne.apply(this, arguments)
        );
      }
      le({OrbitControls: k});
      const Te = function (e) {
        return function (t) {
          e.forEach(function (e) {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
        };
      };
      var Me = n(953),
        Le = n.n(Me);
      function Re(e) {
        let {
          debounce: t,
          scroll: n,
          polyfill: a,
          offsetSize: l,
        } = void 0 === e ? {debounce: 0, scroll: !1, offsetSize: !1} : e;
        const i =
          a ||
          ("undefined" == typeof window ? class {} : window.ResizeObserver);
        if (!i)
          throw new Error(
            "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills",
          );
        const [o, u] = (0, r.useState)({
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            bottom: 0,
            right: 0,
            x: 0,
            y: 0,
          }),
          s = (0, r.useRef)({
            element: null,
            scrollContainers: null,
            resizeObserver: null,
            lastBounds: o,
          }),
          c = t ? ("number" == typeof t ? t : t.scroll) : null,
          f = t ? ("number" == typeof t ? t : t.resize) : null,
          d = (0, r.useRef)(!1);
        (0, r.useEffect)(
          () => (
            (d.current = !0),
            () => {
              d.current = !1;
            }
          ),
        );
        const [p, h, m] = (0, r.useMemo)(() => {
          const e = () => {
            if (!s.current.element) return;
            const {
                left: e,
                top: t,
                width: n,
                height: r,
                bottom: a,
                right: i,
                x: o,
                y: c,
              } = s.current.element.getBoundingClientRect(),
              f = {
                left: e,
                top: t,
                width: n,
                height: r,
                bottom: a,
                right: i,
                x: o,
                y: c,
              };
            s.current.element instanceof HTMLElement &&
              l &&
              ((f.height = s.current.element.offsetHeight),
              (f.width = s.current.element.offsetWidth)),
              Object.freeze(f),
              d.current &&
                !Ae(s.current.lastBounds, f) &&
                u((s.current.lastBounds = f));
          };
          return [e, f ? Le()(e, f) : e, c ? Le()(e, c) : e];
        }, [u, l, c, f]);
        function g() {
          s.current.scrollContainers &&
            (s.current.scrollContainers.forEach((e) =>
              e.removeEventListener("scroll", m, !0),
            ),
            (s.current.scrollContainers = null)),
            s.current.resizeObserver &&
              (s.current.resizeObserver.disconnect(),
              (s.current.resizeObserver = null));
        }
        function v() {
          s.current.element &&
            ((s.current.resizeObserver = new i(m)),
            s.current.resizeObserver.observe(s.current.element),
            n &&
              s.current.scrollContainers &&
              s.current.scrollContainers.forEach((e) =>
                e.addEventListener("scroll", m, {capture: !0, passive: !0}),
              ));
        }
        var b, y, S;
        return (
          (b = m),
          (y = Boolean(n)),
          (0, r.useEffect)(() => {
            if (y) {
              const e = b;
              return (
                window.addEventListener("scroll", e, {
                  capture: !0,
                  passive: !0,
                }),
                () => {
                  window.removeEventListener("scroll", e, !0);
                }
              );
            }
          }, [b, y]),
          (S = h),
          (0, r.useEffect)(() => {
            const e = S;
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, [S]),
          (0, r.useEffect)(() => {
            g(), v();
          }, [n, m, h]),
          (0, r.useEffect)(() => g, []),
          [
            (e) => {
              e &&
                e !== s.current.element &&
                (g(),
                (s.current.element = e),
                (s.current.scrollContainers = Ie(e)),
                v());
            },
            o,
            p,
          ]
        );
      }
      function Ie(e) {
        const t = [];
        if (!e || e === document.body) return t;
        const {
          overflow: n,
          overflowX: r,
          overflowY: a,
        } = window.getComputedStyle(e);
        return (
          [n, r, a].some((e) => "auto" === e || "scroll" === e) && t.push(e),
          [...t, ...Ie(e.parentElement)]
        );
      }
      const De = [
          "x",
          "y",
          "top",
          "bottom",
          "left",
          "right",
          "width",
          "height",
        ],
        Ae = (e, t) => De.every((n) => e[n] === t[n]);
      var Fe = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      };
      const Ue = {
        onClick: ["click", !1],
        onContextMenu: ["contextmenu", !1],
        onDoubleClick: ["dblclick", !1],
        onWheel: ["wheel", !0],
        onPointerDown: ["pointerdown", !0],
        onPointerUp: ["pointerup", !0],
        onPointerLeave: ["pointerleave", !0],
        onPointerMove: ["pointermove", !0],
        onPointerCancel: ["pointercancel", !0],
        onLostPointerCapture: ["lostpointercapture", !0],
      };
      function He(e) {
        const {handlePointer: t} = re(e);
        return {
          priority: 1,
          enabled: !0,
          compute(e, t, n) {
            t.pointer.set(
              (e.offsetX / t.size.width) * 2 - 1,
              (-e.offsetY / t.size.height) * 2 + 1,
            ),
              t.raycaster.setFromCamera(t.pointer, t.camera);
          },
          connected: void 0,
          handlers: Object.keys(Ue).reduce(
            (e, n) => Object.assign(Object.assign({}, e), {[n]: t(n)}),
            {},
          ),
          connect: (t) => {
            var n;
            const {set: r, events: a} = e.getState();
            null == a.disconnect || a.disconnect(),
              r((e) => ({
                events: Object.assign(Object.assign({}, e.events), {
                  connected: t,
                }),
              })),
              Object.entries(
                null != (n = null == a ? void 0 : a.handlers) ? n : [],
              ).forEach(([e, n]) => {
                const [r, a] = Ue[e];
                t.addEventListener(r, n, {passive: a});
              });
          },
          disconnect: () => {
            const {set: t, events: n} = e.getState();
            var r;
            n.connected &&
              (Object.entries(null != (r = n.handlers) ? r : []).forEach(
                ([e, t]) => {
                  if (n && n.connected instanceof HTMLElement) {
                    const [r] = Ue[e];
                    n.connected.removeEventListener(r, t);
                  }
                },
              ),
              t((e) => ({
                events: Object.assign(Object.assign({}, e.events), {
                  connected: void 0,
                }),
              })));
          },
        };
      }
      const We = r.forwardRef(function (e, t) {
          var {
              children: n,
              fallback: a,
              resize: l,
              style: i,
              gl: o,
              events: u = He,
              shadows: s,
              linear: c,
              flat: f,
              legacy: d,
              orthographic: p,
              frameloop: h,
              dpr: m,
              performance: g,
              raycaster: v,
              camera: b,
              onPointerMissed: y,
              onCreated: w,
            } = e,
            x = Fe(e, [
              "children",
              "fallback",
              "resize",
              "style",
              "gl",
              "events",
              "shadows",
              "linear",
              "flat",
              "legacy",
              "orthographic",
              "frameloop",
              "dpr",
              "performance",
              "raycaster",
              "camera",
              "onPointerMissed",
              "onCreated",
            ]);
          r.useMemo(() => le(S), []);
          const [E, {width: k, height: P}] = Re(
              Object.assign({scroll: !0, debounce: {scroll: 50, resize: 0}}, l),
            ),
            _ = r.useRef(null),
            C = r.useRef(null),
            [j, z] = r.useState(null),
            O = D(y),
            [N, T] = r.useState(!1),
            [M, L] = r.useState(!1);
          if (N) throw N;
          if (M) throw M;
          const R = r.useRef(null);
          return (
            k > 0 &&
              P > 0 &&
              j &&
              (R.current || (R.current = Ce(j)),
              R.current.configure({
                gl: o,
                events: u,
                shadows: s,
                linear: c,
                flat: f,
                legacy: d,
                orthographic: p,
                frameloop: h,
                dpr: m,
                performance: g,
                raycaster: v,
                camera: b,
                size: {width: k, height: P},
                onPointerMissed: (...e) =>
                  null == O.current ? void 0 : O.current(...e),
                onCreated: (e) => {
                  null == e.events.connect || e.events.connect(C.current),
                    null == w || w(e);
                },
              }),
              R.current.render(
                r.createElement(
                  F,
                  {set: L},
                  r.createElement(
                    r.Suspense,
                    {fallback: r.createElement(A, {set: T})},
                    n,
                  ),
                ),
              )),
            I(() => {
              z(_.current);
            }, []),
            r.useEffect(() => {
              if (j) return () => ze(j);
            }, [j]),
            r.createElement(
              "div",
              Ne(
                {
                  ref: Te([C, E]),
                  style: Object.assign(
                    {
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    },
                    i,
                  ),
                },
                x,
              ),
              r.createElement(
                "canvas",
                {ref: Te([_, t]), style: {display: "block"}},
                a,
              ),
            )
          );
        }),
        $e = `.`;
      function Ye() {
        return (0, e.jsx)(
          "div",
          Object.assign(
            {id: "visual"},
            {
              children: (0, e.jsxs)(
                We,
                Object.assign(
                  {camera: {position: [-2.58, -2.5, 3.48]}},
                  {
                    children: [
                      (0, e.jsx)("ambientLight", {args: [4210752]}),
                      (0, e.jsx)("pointLight", {
                        args: [16777215, 1, 0],
                        position: [0, 200, 0],
                      }),
                      (0, e.jsx)(Xe, {}),
                      (0, e.jsx)("axesHelper", {args: [5]}),
                      (0, e.jsx)(
                        r.Suspense,
                        Object.assign(
                          {fallback: null},
                          {children: (0, e.jsx)(qe, {})},
                        ),
                      ),
                    ],
                  },
                ),
              ),
            },
          ),
        );
      }
      function qe() {
        const t = (0, r.useRef)(),
          n = ye(
            S.TextureLoader,
            Oe(0, 6).map((e) => `${$e}/die${e + 1}.png`),
          ),
          a = [2, 3, 5, 0, 4, 1].map(
            (e) => new S.MeshBasicMaterial({map: n[e], side: S.DoubleSide}),
          );
        return (
          (0, r.useEffect)(
            () =>
              g.subscribe((e) => {
                const {
                  a: n,
                  b: r,
                  c: a,
                  d: l,
                  e: i,
                  f: o,
                  g: u,
                  h: s,
                  i: c,
                } = e;
                (t.current.matrixAutoUpdate = !1),
                  t.current.matrix.set(
                    n,
                    r,
                    a,
                    n + r + a,
                    l,
                    i,
                    o,
                    l + i + o,
                    u,
                    s,
                    c,
                    u + s + c,
                    0,
                    0,
                    0,
                    1,
                  );
              }),
            [],
          ),
          (0, e.jsx)(
            "mesh",
            Object.assign(
              {material: a, ref: t, position: [1, 1, 1]},
              {children: (0, e.jsx)("boxGeometry", {args: [2, 2, 2]})},
            ),
          )
        );
      }
      function Xe(t) {
        const n = (function (e = (e) => e, t) {
            return ve()(e, t);
          })(),
          {
            camera: a,
            gl: {domElement: l},
            scene: i,
          } = n;
        (window.scene = i), (window.$three = n), a.up.set(0, 0, 1);
        const o = (0, r.useRef)();
        return (
          (function (e, t = 0) {
            const n = ve(),
              r = n.getState().internal.subscribe,
              a = D(e);
            I(() => r(a, t, n), [t, r, n]);
          })((e) => {
            var t;
            return null === (t = o.current) || void 0 === t
              ? void 0
              : t.update();
          }),
          (0, r.useEffect)(() => {
            t.target && o.current.target.set(...t.target),
              (n.controls = o.current);
          }, []),
          (0, e.jsx)("orbitControls", {args: [a, l], ref: o})
        );
      }
      const Ze = {
        rotateXY: (e) => (
          (e *= Math.PI / 180),
          {
            a: Math.cos(e),
            b: -Math.sin(e),
            c: 0,
            d: Math.sin(e),
            e: Math.cos(e),
            f: 0,
            g: 0,
            h: 0,
            i: 1,
          }
        ),
        rotateYZ: (e) => (
          (e *= Math.PI / 180),
          {
            a: 1,
            b: 0,
            c: 0,
            d: 0,
            e: Math.cos(e),
            f: -Math.sin(e),
            g: 0,
            h: Math.sin(e),
            i: Math.cos(e),
          }
        ),
        rotateXZ: (e) => (
          (e *= Math.PI / 180),
          {
            a: Math.cos(e),
            b: 0,
            c: -Math.sin(e),
            d: 0,
            e: 1,
            f: 0,
            g: Math.sin(e),
            h: 0,
            i: Math.cos(e),
          }
        ),
      };
      function Ge() {
        const t = (0, r.useRef)();
        (0, r.useEffect)(() => {
          t.current.ready.then(v);
        }, []);
        const n = (0, r.useCallback)((e) => {
            g.setState(
              Ze[e.target.dataset.type](parseFloat(e.target.value) || 0),
            );
          }, []),
          {raw: a} = String;
        return (0, e.jsx)(
          s,
          Object.assign(
            {ref: t},
            {
              children: (0, e.jsxs)("table", {
                children: [
                  (0, e.jsx)("thead", {
                    children: (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", {children: "Transformation"}),
                        (0, e.jsx)("th", {children: "Matrix"}),
                        (0, e.jsx)("th", {children: "Try it"}),
                      ],
                    }),
                  }),
                  (0, e.jsxs)("tbody", {
                    children: [
                      (0, e.jsxs)("tr", {
                        children: [
                          (0, e.jsxs)("td", {
                            children: [
                              (0, e.jsx)(c, {children: "xy-"}),
                              "rotation by angle ",
                              (0, e.jsx)(c, {children: "\\theta"}),
                            ],
                          }),
                          (0, e.jsx)("td", {
                            children: (0, e.jsx)(c, {
                              children: a`\begin{bmatrix}\cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0\\0 & 0 & 1\end{bmatrix}`,
                            }),
                          }),
                          (0, e.jsxs)("td", {
                            children: [
                              (0, e.jsx)(c, {children: "\\theta\\!:"}),
                              (0, e.jsx)("input", {
                                className: "example",
                                onChange: n,
                                size: 22,
                                type: "text",
                                "data-type": "rotateXY",
                                placeholder: "Enter an angle (in degrees)",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsxs)("tr", {
                        children: [
                          (0, e.jsxs)("td", {
                            children: [
                              (0, e.jsx)(c, {children: "yz-"}),
                              "rotation by angle ",
                              (0, e.jsx)(c, {children: "\\theta"}),
                            ],
                          }),
                          (0, e.jsx)("td", {
                            children: (0, e.jsx)(c, {
                              children: a`\begin{bmatrix}1 & 0 & 0 \\ 0 & \cos\theta & -\sin\theta \\ 0 & \sin\theta & \cos\theta\end{bmatrix}`,
                            }),
                          }),
                          (0, e.jsxs)("td", {
                            children: [
                              (0, e.jsx)(c, {children: "\\theta\\!:"}),
                              (0, e.jsx)("input", {
                                className: "example",
                                onChange: n,
                                size: 22,
                                type: "text",
                                "data-type": "rotateYZ",
                                placeholder: "Enter an angle (in degrees)",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, e.jsxs)("tr", {
                        children: [
                          (0, e.jsxs)("td", {
                            children: [
                              (0, e.jsx)(c, {children: "xz-"}),
                              "rotation by angle ",
                              (0, e.jsx)(c, {children: "\\theta"}),
                            ],
                          }),
                          (0, e.jsx)("td", {
                            children: (0, e.jsx)(c, {
                              children: a`\begin{bmatrix}\cos\theta & 0 & -\sin\theta \\ 0 & 1 & 0 \\ \sin\theta & 0 & \cos\theta\end{bmatrix}`,
                            }),
                          }),
                          (0, e.jsxs)("td", {
                            children: [
                              (0, e.jsx)(c, {children: "\\theta\\!:"}),
                              (0, e.jsx)("input", {
                                className: "example",
                                onChange: n,
                                size: 22,
                                type: "text",
                                "data-type": "rotateXZ",
                                placeholder: "Enter an angle (in degrees)",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
          ),
        );
      }
      (0, t.s)(document.querySelector("main")).render(
        (0, e.jsx)(function () {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Ye, {}),
              (0, e.jsx)(y, {}),
              (0, e.jsx)(Ge, {}),
            ],
          });
        }, {}),
      );
    })();
})();
