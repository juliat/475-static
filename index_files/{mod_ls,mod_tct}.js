__gjsload_maps2__('ls', 'GAddMessages({13645:"English",13646:"Show English labels",14047:"Switch between labels in the local language and transliterated text."});\'use strict\';function BX(a,b,c,d){this.K=a;this.G=a.U();this.I=c;this.H=!1;this.j=b;this.F=!1;this.Na=new lj(null);this.Na.Sh();this.Na.j="layer";this.j?this.Na.show():this.Na.initialize();this.Na.sc(!1);this.Na.Zb(Y(13645));this.Na.Rg(Y(14047));this.Na.Ge=100;this.Na.Ra="langswitch";L(this.Na,Ka,v(this.C,this,!0));L(this.Na,La,v(this.C,this,!1));L(this.Na,Oa,v(this.L,this));d.Vg(this.Na);I(this.G,vb,this,this.o);I(Ca.ga(),Ga,this,this.J);I(this.G,Ab,this,this.o);I(this.G,zb,this,this.o);this.o()} var Vqa=function(a,b){a.H!=b?(a.Na.sc(b),a.H=b,Uqa(a,b,a.j)):a.F||Uqa(a,b,a.j)}; BX.prototype.J=function(a){"langswitch"==a&&this.o()}; BX.prototype.o=function(a){this.G.Bb&&Gl(this.G.la())?Vqa(this,!1):Ca.ga().Gg("langswitch",this.G.Ia(),v(function(a){Vqa(this,a)}, this),a,this.G.fa())}; BX.prototype.L=function(){this.C(1<this.Na.tb())}; BX.prototype.C=function(a,b){if(this.j!=a&&this.Na.Jb()){this.j=a;var c=this.G;c.L=this.j?hl(el):"x-local";A(c,vc);kq(this.I,b).D[28]=a;c={ct:"ls"};c.cd=a?"1":"0";this.K.Hc(null,c)}}; var Uqa=function(a,b,c){var d=[];d.push("ls");d.push(a.F?"i:0":"i:1");d.push(b?"v:1":"v:0");d.push(c?"t:1":"t:0");a.F=!0;a.K.lc(d.join(","))};X(Hd,Id,function(a,b,c,d){new BX(a,b,c,d)}); X(Hd);', '', []);
__gjsload_maps2__('tct', 'GAddMessages({});\'use strict\';function W$(a){this.o=null;var b=this;Cv([a.C,a.J],function(a,d){b.o=d;var e={arrowClick:v(b.C,b),textClick:v(b.F,b)};a.ra("tt",null,e)}); this.j=document.getElementById("tactile-promo")} var hMa=function(a,b){b?(Hm(a.j,"tactile-promo"),Q(a.j,"tactile-promo-collapsed")):(Hm(a.j,"tactile-promo-collapsed"),Q(a.j,"tactile-promo"));a.o&&(kq(a.o).D[41]=b)}, iMa=function(a){return 0<=Gm(a.j).search("tactile-promo-collapsed")}; W$.prototype.C=function(){this.j&&hMa(this,!iMa(this))}; W$.prototype.F=function(){this.j&&iMa(this)&&hMa(this,!1)};X("tct",Kd,function(a){var b=new W$(a);a.Ca.set(b)}); X("tct");', '', []);