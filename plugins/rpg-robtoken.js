const _0x2b33ec=_0x5602;(function(_0x3d99c8,_0x36eda3){const _0x16ac13=_0x5602,_0x485ae8=_0x3d99c8();while(!![]){try{const _0x41463b=-parseInt(_0x16ac13(0x118))/0x1*(parseInt(_0x16ac13(0x117))/0x2)+parseInt(_0x16ac13(0x119))/0x3*(parseInt(_0x16ac13(0x127))/0x4)+parseInt(_0x16ac13(0x129))/0x5*(parseInt(_0x16ac13(0x122))/0x6)+parseInt(_0x16ac13(0x12c))/0x7*(-parseInt(_0x16ac13(0x124))/0x8)+parseInt(_0x16ac13(0x123))/0x9+parseInt(_0x16ac13(0x11a))/0xa*(parseInt(_0x16ac13(0x130))/0xb)+-parseInt(_0x16ac13(0x134))/0xc;if(_0x41463b===_0x36eda3)break;else _0x485ae8['push'](_0x485ae8['shift']());}catch(_0x5c72db){_0x485ae8['push'](_0x485ae8['shift']());}}}(_0x16d6,0x5c6a8));function _0x16d6(){const _0x3efec3=['robartoken','44CdoAUF','\x20💰token*\x0aNo\x20robes\x20a\x20un\x20pobre\x20v\x22:','*[❗]\x20Etiqueta\x20a\x20alguien\x20para\x20robar.*','floor','14965332kNHPnZ','command','\x20💰token\x20a\x20@','mentionedJid','robtoken','195782zblkmx','1vHkHYS','1035vXBliH','1126490WYZDfb','help','\x20Hora(s)\x20','😔\x20@','split','tags','data','users','490830rDTfec','3177171lPoflY','98408gikFwP','reply','joincount','8348LCNfnw','\x20Minuto(s)','25EXGgwJ','quoted','random','119hjZWbM','sender','lastrobtok'];_0x16d6=function(){return _0x3efec3;};return _0x16d6();}let ki=0x28,handler=async(_0x411c0c,{conn:_0x14668d,usedPrefix:_0x2ba533,command:_0x127373})=>{const _0x383ae5=_0x5602;let _0x43c3bc=global['db'][_0x383ae5(0x120)]['users'][_0x411c0c['sender']][_0x383ae5(0x12e)]+0x6ddd00;if(new Date()-global['db'][_0x383ae5(0x120)][_0x383ae5(0x121)][_0x411c0c[_0x383ae5(0x12d)]][_0x383ae5(0x12e)]<0x6ddd00)throw'*⏱️¡Hey!\x20Espera\x20'+msToTime(_0x43c3bc-new Date())+'\x20para\x20volver\x20a\x20robar*';let _0x50eaf0;if(_0x411c0c['isGroup'])_0x50eaf0=_0x411c0c[_0x383ae5(0x115)][0x0]?_0x411c0c['mentionedJid'][0x0]:_0x411c0c[_0x383ae5(0x12a)]?_0x411c0c[_0x383ae5(0x12a)]['sender']:![];else _0x50eaf0=_0x411c0c['chat'];if(!_0x50eaf0)throw _0x383ae5(0x132);if(!(_0x50eaf0 in global['db'][_0x383ae5(0x120)]['users']))throw'*[❗]\x20El\x20usuario\x20no\x20se\x20encuentra\x20en\x20mi\x20base\x20de\x20datos.*';let _0x450868=global['db'][_0x383ae5(0x120)][_0x383ae5(0x121)][_0x50eaf0],_0x14e144=Math[_0x383ae5(0x133)](Math[_0x383ae5(0x12b)]()*ki);if(_0x450868[_0x383ae5(0x126)]<_0x14e144)return _0x411c0c[_0x383ae5(0x125)](_0x383ae5(0x11d)+_0x50eaf0['split']`@`[0x0]+'\x20tiene\x20menos\x20de\x20*'+ki+_0x383ae5(0x131),null,{'mentions':[_0x50eaf0]});global['db'][_0x383ae5(0x120)][_0x383ae5(0x121)][_0x411c0c['sender']][_0x383ae5(0x126)]+=_0x14e144,global['db']['data'][_0x383ae5(0x121)][_0x50eaf0][_0x383ae5(0x126)]-=_0x14e144,_0x411c0c[_0x383ae5(0x125)]('*‣\x20Robaste\x20'+_0x14e144+_0x383ae5(0x136)+_0x50eaf0[_0x383ae5(0x11e)]`@`[0x0]+'*',null,{'mentions':[_0x50eaf0]}),global['db'][_0x383ae5(0x120)][_0x383ae5(0x121)][_0x411c0c['sender']]['lastrobtok']=new Date()*0x1;};function _0x5602(_0x42480d,_0xaef414){const _0x16d6bc=_0x16d6();return _0x5602=function(_0x560221,_0x5a7e8f){_0x560221=_0x560221-0x115;let _0x52e18d=_0x16d6bc[_0x560221];return _0x52e18d;},_0x5602(_0x42480d,_0xaef414);}handler[_0x2b33ec(0x11b)]=['robtok'],handler[_0x2b33ec(0x11f)]=['econ'],handler[_0x2b33ec(0x135)]=[_0x2b33ec(0x12f),_0x2b33ec(0x116)];export default handler;function msToTime(_0x4c0adc){const _0x42dd57=_0x2b33ec;var _0xf69683=parseInt(_0x4c0adc%0x3e8/0x64),_0x1a60f8=Math[_0x42dd57(0x133)](_0x4c0adc/0x3e8%0x3c),_0x372f93=Math['floor'](_0x4c0adc/(0x3e8*0x3c)%0x3c),_0x22f137=Math[_0x42dd57(0x133)](_0x4c0adc/(0x3e8*0x3c*0x3c)%0x18);return _0x22f137=_0x22f137<0xa?'0'+_0x22f137:_0x22f137,_0x372f93=_0x372f93<0xa?'0'+_0x372f93:_0x372f93,_0x1a60f8=_0x1a60f8<0xa?'0'+_0x1a60f8:_0x1a60f8,_0x22f137+_0x42dd57(0x11c)+_0x372f93+_0x42dd57(0x128);}