import{O as ye,f as V,B as Ee,F as Me,g as J,U as ve,V as B,h as pe,i as me,N as Ae,j as Re,C as ne,k as A,l as Ne,m as re,n as De,o as Ie,p as Be,q as Fe,r as Le,s as Oe,A as Pe,t as Ue,u as ze,v as Ge,G as y,w as Y,M as ke,x as Qe,b as we,y as _e,z as Ve,T as He,E as We,J as Ye,c as Xe,L as je,d as Ke,K as Ze,Q as Je,X as $e,Y as qe,Z as et,S as tt,_ as st,P as it,W as ot,R as at,a as rt,H as nt,D as Ce,$ as ae}from"./RoundedBoxGeometry-m8QcJAwa.js";import{e as lt,s as ut,f as ht,d as ct,u as ft,w as dt,o as pt,a as mt,b as gt,c as vt,r as xt,g as Mt,h as Tt,C as xe,i as wt,j as _t,k as Z,l as be,m as Ct}from"./index-Crb9uhqM.js";const ge={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class q{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const bt=new ye(-1,1,1,-1,0,1);class St extends Ee{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}}const Et=new St;class Te{constructor(e){this._mesh=new V(Et,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,bt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Pt extends q{constructor(e,r="tDiffuse"){super(),this.textureID=r,this.uniforms=null,this.material=null,e instanceof J?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ve.clone(e.uniforms),this.material=new J({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Te(this.material)}render(e,r,l){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=l.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Se extends q{constructor(e,r){super(),this.scene=e,this.camera=r,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,r,l){const h=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let u,m;this.inverse?(u=0,m=1):(u=1,m=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(h.REPLACE,h.REPLACE,h.REPLACE),o.buffers.stencil.setFunc(h.ALWAYS,u,4294967295),o.buffers.stencil.setClear(m),o.buffers.stencil.setLocked(!0),e.setRenderTarget(l),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(h.EQUAL,1,4294967295),o.buffers.stencil.setOp(h.KEEP,h.KEEP,h.KEEP),o.buffers.stencil.setLocked(!0)}}class yt extends q{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class At{constructor(e,r){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),r===void 0){const l=e.getSize(new B);this._width=l.width,this._height=l.height,r=new pe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:me}),r.texture.name="EffectComposer.rt1"}else this._width=r.width,this._height=r.height;this.renderTarget1=r,this.renderTarget2=r.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pt(ge),this.copyPass.material.blending=Ae,this.clock=new Re}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,r){this.passes.splice(r,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const r=this.passes.indexOf(e);r!==-1&&this.passes.splice(r,1)}isLastEnabledPass(e){for(let r=e+1;r<this.passes.length;r++)if(this.passes[r].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const r=this.renderer.getRenderTarget();let l=!1;for(let h=0,o=this.passes.length;h<o;h++){const u=this.passes[h];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(h),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,l),u.needsSwap){if(l){const m=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(m.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),f.setFunc(m.EQUAL,1,4294967295)}this.swapBuffers()}Se!==void 0&&(u instanceof Se?l=!0:u instanceof yt&&(l=!1))}}this.renderer.setRenderTarget(r)}reset(e){if(e===void 0){const r=this.renderer.getSize(new B);this._pixelRatio=this.renderer.getPixelRatio(),this._width=r.width,this._height=r.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,r){this._width=e,this._height=r;const l=this._width*this._pixelRatio,h=this._height*this._pixelRatio;this.renderTarget1.setSize(l,h),this.renderTarget2.setSize(l,h);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(l,h)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Rt extends q{constructor(e,r,l=null,h=null,o=null){super(),this.scene=e,this.camera=r,this.overrideMaterial=l,this.clearColor=h,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ne}render(e,r,l){const h=e.autoClear;e.autoClear=!1;let o,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:l),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=h}}const Nt={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class $ extends q{constructor(e,r=1,l,h){super(),this.strength=r,this.radius=l,this.threshold=h,this.resolution=e!==void 0?new B(e.x,e.y):new B(256,256),this.clearColor=new ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new pe(o,u,{type:me}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const c=new pe(o,u,{type:me});c.texture.name="UnrealBloomPass.h"+g,c.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(c);const b=new pe(o,u,{type:me});b.texture.name="UnrealBloomPass.v"+g,b.texture.generateMipmaps=!1,this.renderTargetsVertical.push(b),o=Math.round(o/2),u=Math.round(u/2)}const m=Nt;this.highPassUniforms=ve.clone(m.uniforms),this.highPassUniforms.luminosityThreshold.value=h,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new J({uniforms:this.highPassUniforms,vertexShader:m.vertexShader,fragmentShader:m.fragmentShader}),this.separableBlurMaterials=[];const f=[3,5,7,9,11];o=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(f[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new B(1/o,1/u),o=Math.round(o/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1;const N=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=N,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ve.clone(ge.uniforms),this.blendMaterial=new J({uniforms:this.copyUniforms,vertexShader:ge.vertexShader,fragmentShader:ge.fragmentShader,blending:Ne,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ne,this._oldClearAlpha=1,this._basic=new re,this._fsQuad=new Te(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,r){let l=Math.round(e/2),h=Math.round(r/2);this.renderTargetBright.setSize(l,h);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(l,h),this.renderTargetsVertical[o].setSize(l,h),this.separableBlurMaterials[o].uniforms.invSize.value=new B(1/l,1/h),l=Math.round(l/2),h=Math.round(h/2)}render(e,r,l,h,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=l.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=l.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let m=this.renderTargetBright;for(let f=0;f<this.nMips;f++)this._fsQuad.material=this.separableBlurMaterials[f],this.separableBlurMaterials[f].uniforms.colorTexture.value=m.texture,this.separableBlurMaterials[f].uniforms.direction.value=$.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[f]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[f].uniforms.colorTexture.value=this.renderTargetsHorizontal[f].texture,this.separableBlurMaterials[f].uniforms.direction.value=$.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[f]),e.clear(),this._fsQuad.render(e),m=this.renderTargetsVertical[f];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(l),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const r=[];for(let l=0;l<e;l++)r.push(.39894*Math.exp(-.5*l*l/(e*e))/e);return new J({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new B(.5,.5)},direction:{value:new B(.5,.5)},gaussianCoefficients:{value:r}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new J({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}$.BlurDirectionX=new B(1,0);$.BlurDirectionY=new B(0,1);const de={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Dt extends q{constructor(){super(),this.uniforms=ve.clone(de.uniforms),this.material=new De({name:de.name,uniforms:this.uniforms,vertexShader:de.vertexShader,fragmentShader:de.fragmentShader}),this._fsQuad=new Te(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,r,l){this.uniforms.tDiffuse.value=l.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ie.getTransfer(this._outputColorSpace)===Be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fe?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Le?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oe?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pe?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ue?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ze?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ge&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function It(){const v=new y,e=[],r=[],l=[],h=[],o=[],u=[],m=[],f=[],N=[],g=new Y({color:2242627,roughness:.32,metalness:.8}),c=new Y({color:528923,roughness:.42,metalness:.65}),b=new Y({color:7967133,roughness:.3,metalness:.55}),E=new re({color:3725823,toneMapped:!1}),U=new re({color:16754268,toneMapped:!1}),ee=new ke({color:1728630,metalness:.5,roughness:.15,transparent:!0,opacity:.2,depthWrite:!1}),X=new Qe(1,1,1),j=new we(1,1,1,1,.06),H=new Map,C=(s,t,i)=>{const a=H.get(s)??[];a.push({p:t,s:i}),H.set(s,a)},d=(s,t,i,a,M=!1)=>{const n=new V(M?j:X,t);return n.position.set(i[0],i[1],i[2]),n.scale.set(a[0],a[1],a[2]),s.add(n),n},D=[],S=(...s)=>{for(let t=0;t<s.length-1;t++)D.push(...s[t],...s[t+1])};function P(s,t,i,a,M=2.5,n=.68){const T=document.createElement("canvas");T.width=768,T.height=192;const p=T.getContext("2d");p.fillStyle="#07151f",p.fillRect(0,0,768,192),p.fillStyle="#40d8ff",p.fillRect(0,0,5,192),p.font="500 32px monospace",p.fillText(t.toUpperCase().slice(0,34),30,73),p.fillStyle="#8ba4b2",p.font="25px monospace",p.fillText(i.slice(0,44),30,135);const Q=new Ze(T);Q.colorSpace=Je,N.push(Q);const oe=new V(new $e(M,n),new re({map:Q,side:qe}));return oe.position.set(a[0],a[1],a[2]),s.add(oe),oe}for(let s=2;s>-119;s-=4){C(c,[0,-1.75,s],[10,.38,3.94]),C(g,[-4.8,-1.42,s],[.16,.28,3.88]),C(g,[4.8,-1.42,s],[.16,.28,3.88]),S([-4.5,-1.535,s+1.9],[-4.5,-1.535,s-1.9]),S([4.5,-1.535,s+1.9],[4.5,-1.535,s-1.9]);for(const t of[-3.9,3.9])C(b,[t,-1.52,s+1.3],[.16,.05,.16])}C(g,[0,-1.25,0],[7.1,.55,7.1]),C(b,[0,-.92,0],[5.7,.15,5.7]),C(c,[0,-.69,0],[3.1,.3,3.1]),C(E,[0,-.51,0],[2.75,.025,2.75]),C(c,[0,-.48,0],[2.5,.08,2.5]);const te=P(v,"FURQON","SOFTWARE / INTELLIGENCE",[0,-.425,0],2.35,.7);te.rotation.x=-Math.PI/2;for(const s of[-1,1])for(const t of[-1,1]){const i=new y;i.position.set(s*1.88,.1,t*1.88),i.userData.direction=[s,t],d(i,g,[0,0,0],[3.42,.44,3.42],!0),d(i,c,[0,.235,0],[2.83,.035,2.83]),d(i,b,[-.87,.29,0],[.18,.07,2.3]);for(let a=0;a<6;a++)d(i,c,[.1+a*.19,.29,0],[.09,.08,2.15]);d(i,E,[0,.24,t*1.48],[2.3,.035,.025]),v.add(i),e.push(i)}for(let s=0;s<22;s++){const t=-2.8+s*.267;for(const i of[-1,1])C(b,[i*3.6,-.99,t],[.52,.13,.105]),C(b,[t,-.99,i*3.6],[.105,.13,.52]),S([i*3.6,-1.53,t],[i*4.3,-1.53,t],[i*4.3,-1.53,-6])}const R=new y;R.position.set(-2.65,0,-16),v.add(R);const z=new Y({color:9283763,metalness:.85,roughness:.26}),G=new Y({color:1319209,metalness:.65,roughness:.34}),le=new Y({color:800061,metalness:.45,roughness:.38}),W=new Y({color:12157263,metalness:.8,roughness:.3});function w(s,t,i,a,M=.045){const n=new V(new we(a[0],a[1],a[2],3,Math.min(M,Math.min(...a)/3)),t);return n.position.fromArray(i),s.add(n),n}w(R,G,[0,-1.23,0],[3.45,.52,3.9],.12),w(R,z,[0,-.94,0],[3.25,.09,3.65]),w(R,E,[0,-1.18,1.958],[2.45,.025,.018]),P(R,"MEIWA / SYSTEMS","INVENTORY · LEAVE · INTERNAL PORTAL",[0,-1.3,1.965],2.85,.32);for(const s of[-1.48,1.48])for(const t of[-1.65,1.65]){w(R,z,[s,.26,t],[.065,2.35,.065],.015);const i=new V(new _e(.13,.13,.1,20),G);i.position.set(s,-1.52,t),R.add(i)}const ue=["PERSISTENCE","APPLICATION SERVICES","INTERFACE"],he=["RECORDS / DATA INTEGRITY","BUSINESS LOGIC / WORKFLOWS","INVENTORY / LEAVE / PORTAL"];for(let s=0;s<3;s++){const t=new y;t.position.y=-.67+s*.64,t.userData.restY=t.position.y,t.userData.restZ=0,R.add(t),m.push(t),w(t,G,[0,0,0],[3.08,.16,3.38]),w(t,le,[0,.105,0],[2.87,.055,3.15]),w(t,z,[-.25,.21,-.15],[.95,.16,1.05]);for(let i=0;i<9;i++)w(t,G,[-.65+i*.1,.34,-.15],[.045,.17,.88],.01);for(let i=0;i<3;i++){w(t,c,[.85,.22,-.85+i*.66],[.35,.16,.48]);for(let a=0;a<5;a++)w(t,W,[.64,.17,-1.02+i*.66+a*.08],[.075,.025,.032],.005)}for(let i=0;i<6;i++){const a=-1.23+i*.43;w(t,W,[-1.05,.142,a],[.45,.008,.014],.002),w(t,W,[-.83,.142,a+.08],[.014,.008,.17],.002)}for(const i of[-1.33,1.33])for(const a of[-1.42,1.42]){const M=new V(new _e(.052,.052,.035,12),z);M.position.set(i,.16,a),t.add(M)}w(t,z,[0,.05,1.72],[3.12,.29,.08]),P(t,ue[s],he[s],[-.25,.06,1.767],2.24,.23);for(let i=0;i<3;i++)w(t,i===2?U:E,[1.02+i*.12,.07,1.77],[.035,.045,.012],.003)}const F=new y;F.position.y=1.23,R.add(F),w(F,G,[0,0,0],[3.45,.18,3.9],.065),w(F,z,[0,.11,0],[3.17,.04,3.61]),w(F,c,[0,.145,0],[2.9,.035,3.3]);for(let s=0;s<13;s++)w(F,G,[-1.15+s*.19,.17,-.4],[.065,.03,1.8],.008);const ce=P(F,"ENGINEERED TO WORK","01 / SOFTWARE SYSTEMS",[0,.17,1.05],2.55,.45);ce.rotation.x=-Math.PI/2;const x=new y;x.position.set(3.2,-.5,-17.5),v.add(x),w(x,G,[0,0,0],[1.45,1.85,2.2],.09),w(x,z,[0,0,1.12],[1.26,1.62,.06]);for(let s=0;s<4;s++)w(x,c,[0,-.47+s*.31,1.17],[.82,.17,.07]),w(x,E,[.46,-.47+s*.31,1.215],[.045,.045,.02]);P(x,"NETWORK","CONNECTED / ONLINE",[0,1.16,0],1.6,.4);for(const s of[-15,-17])S([-1,-1.5,s],[0,-1.5,s],[3.2,-1.5,s],[3.2,-1.5,-17.5]);for(const s of[-1,1]){const t=new y;t.position.set(s*3.1,.2,-31),d(t,g,[0,0,0],[2,2.9,.22],!0),d(t,c,[0,0,.13],[1.82,2.68,.03]);for(let i=0;i<9;i++)d(t,i%3===0?E:b,[0,-1+i*.235,.16],[1.45-Math.sin(i*.8)*.35,.04,.025]);P(t,"INPUT","IMAGE DATA",[0,1.78,0],2.1,.52),v.add(t),r.push(t),S([s*3.1,-1.5,-31],[s*1.8,-1.5,-33],[s*1.8,-1.5,-41])}for(let s=0;s<5;s++){const t=new y;t.position.z=-34-s*1.65,d(t,g,[-1.8,.45,0],[.06,3.8,.12]),d(t,g,[1.8,.45,0],[.06,3.8,.12]),d(t,E,[0,2.35,0],[3.65,.018,.12]);for(const i of[-1,1])for(let a=0;a<5;a++)d(t,a%2?b:E,[i*1.4,-.8+a*.57,0],[.13,.13,.13]),s<4&&S([i*1.4,-.8+a*.57,t.position.z],[i*1.4,-.8+(a+2)%5*.57,t.position.z-1.65]);v.add(t),l.push(t)}P(v,"DENSENET → LSTM","FEATURES BECOME LANGUAGE",[0,3,-38],3.8,.95);for(let s=0;s<32;s++){const t=new V(new Ve(.075,0),s%4===0?U:E);v.add(t),f.push(t)}const L=[{x:-3.2,z:-53,title:"INDONESIA",sub:"FOUNDATIONS"},{x:-3.2,z:-58,title:"JAPAN",sub:"ENGINEERING"},{x:3.2,z:-53,title:"TAIWAN",sub:"SECURITY"}];for(const s of L){const t=new y;t.position.set(s.x,-.9,s.z),d(t,g,[0,0,0],[1.7,.6,1.7],!0),d(t,E,[0,.33,0],[1.5,.035,1.5]),d(t,c,[0,.4,0],[1.3,.1,1.3]),d(t,b,[0,1,0],[.06,1.1,.06]),P(t,s.title,s.sub,[0,1.7,0],2.25,.58),v.add(t),h.push(t),S([s.x,-1.5,s.z],[0,-1.5,-55])}S([-3.2,-1.51,-53],[-3.2,-1.51,-58],[3.2,-1.51,-53]),lt.forEach((s,t)=>{const i=t%2?1:-1,a=new y;a.position.set(i*3.35,.25,-69-Math.floor(t/2)*2.25),a.userData.restX=a.position.x,d(a,g,[0,0,0],[1.75,2.9,1.7],!0),d(a,c,[0,0,.88],[1.6,2.7,.045]),d(a,E,[-.67,0,.92],[.025,2.42,.02]),P(a,`${String(t+1).padStart(2,"0")} / ${s.company}`,s.period,[0,.75,.925],1.46,.42);for(let M=0;M<6;M++)d(a,b,[.1,.15-M*.18,.93],[1.03,.055,.02]);v.add(a),o.push(a)}),ut.forEach((s,t)=>{const i=t%2?3.1:-3.1,a=-91-Math.floor(t/2)*3.1,M=new y;M.position.set(i,.1,a),M.userData.restX=i,M.userData.restZ=a,d(M,g,[0,0,0],[2.15,2.45,.65],!0),d(M,ee,[0,0,.38],[1.95,2.2,.035]);for(let n=0;n<9;n++)d(M,n===t?U:b,[(n%3-1)*.5,(Math.floor(n/3)-1)*.45,.39],[.27,.2,.1]);P(M,s.name,s.items.slice(0,2).join(" / "),[0,1.7,0],2.4,.6),v.add(M),u.push(M),S([i,-1.5,a],[0,-1.5,a])});const _=new y;_.position.set(0,0,-112),d(_,g,[0,-.9,0],[3.6,1.2,2.3],!0),d(_,b,[0,-.27,.1],[3.8,.13,2.5],!0),d(_,g,[0,.9,-.55],[3.9,2.3,.28],!0),d(_,E,[0,.9,-.39],[3.64,2.07,.025]),d(_,c,[0,.9,-.36],[3.5,1.94,.025]),P(_,"CONNECTION OPEN","LET’S BUILD SOMETHING THAT WORKS.",[0,1.05,-.33],3.3,.95),d(_,U,[1.5,-.17,.9],[.18,.035,.18]);for(let s=0;s<3;s++)for(let t=0;t<10;t++)C(b,[-1.1+t*.23,-.16,-111.9+s*.23],[.18,.075,.17]);v.add(_);class I extends et{constructor(){super()}getPoint(t,i=new A){return i.fromArray(ht(t))}}const O=new I,se=new V(new He(O,350,.027,5,!1),E);v.add(se);const k=new y;d(k,new re({color:15531007,toneMapped:!1}),[0,.15,0],[.28,.28,.65],!0);const ie=new We(3596287,4,5,2);k.add(ie),v.add(k);const K=new Ye;H.forEach((s,t)=>{const i=new Xe(t===g||t===b?j:X,t,s.length);s.forEach((a,M)=>{K.position.set(a.p[0],a.p[1],a.p[2]),K.scale.set(a.s[0],a.s[1],a.s[2]),K.updateMatrix(),i.setMatrixAt(M,K.matrix)}),v.add(i)}),v.add(new je(new Ee().setAttribute("position",new Me(D,3)),new Ke({color:2917022,transparent:!0,opacity:.5})));function fe(){const s=new Set,t=new Set;v.traverse(i=>{const a=i;a.geometry&&s.add(a.geometry),a.material&&(Array.isArray(a.material)?a.material:[a.material]).forEach(M=>t.add(M))}),s.forEach(i=>i.dispose()),t.forEach(i=>i.dispose()),N.forEach(i=>i.dispose())}return{group:v,shellPanels:e,signalPath:O,signal:k,inputFrames:r,neuralLayers:l,mapNodes:h,archiveCards:o,skillRings:u,computeBlades:m,engineeringLid:F,dataPackets:f,terminal:_,dispose:fe}}const Lt=ct({__name:"CyberWorldCanvas",emits:["ready","unavailable"],setup(v,{emit:e}){const r=e,l=xt(null),h=ft();let o=null,u=null,m=null,f=null,N=null,g=null,c=null,b=0,E=0,U=0,ee=0,X=0,j=0,H=0,C=1,d=1;const D=new A,S=new A,P=new A,te=new A,R=new A,z=new A,G=new A(0,2.6,5.5);function le(){if(!u||!o)return;const x=h.isDark?330257:15265778;u.background.setHex(x),u.fog.color.setHex(x),o.toneMappingExposure=h.isDark?1.05:.92,u.environmentIntensity=h.isDark?.85:1.1,N&&(N.strength=h.isDark?.32:.12)}dt(()=>h.isDark,le);function W(){!l.value||!o||!m||(C=l.value.clientWidth,d=Math.max(1,l.value.clientHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,C<800?1.15:1.5)),o.setSize(C,d),m.aspect=C/d,m.updateProjectionMatrix(),f==null||f.setPixelRatio(o.getPixelRatio()),f==null||f.setSize(C,d),N&&(N.enabled=C>=800))}function w(x){x.pointerType!=="touch"&&(ee=x.clientX/C*2-1,X=x.clientY/d*2-1)}function ue(){ee=0,X=0}function he(x){x.preventDefault(),cancelAnimationFrame(b),r("unavailable")}function F(){if(!l.value)return;u=new tt,u.background=new ne(330257),u.fog=new st(330257,.023),m=new it(44,1,.08,85),o=new ot({antialias:!0,powerPreference:"high-performance"}),o.toneMapping=Pe,o.toneMappingExposure=1.05,l.value.appendChild(o.domElement),o.domElement.addEventListener("webglcontextlost",he);const x=new at,L=new rt(o);g=L.fromScene(x,.04),u.environment=g.texture,u.environmentIntensity=.85,x.dispose(),L.dispose(),u.add(new nt(9815780,1052702,2.1));const _=new Ce(13953791,3.5);_.position.set(4,9,6),u.add(_);const I=new Ce(2402042,2);I.position.set(-5,3,-8),u.add(I),c=It(),u.add(c.group),f=new At(o),f.addPass(new Rt(u,m)),N=new $(new B(1,1),.32,.45,.82),f.addPass(N),f.addPass(new Dt),le(),W(),ce(performance.now()),r("ready")}function ce(x){if(!c||!m||!o||!u)return;const L=Math.min(.035,Math.max(0,(x-(E||x))/1e3));E=x,U+=L;const _=Mt.position,{index:I,travel:O}=Tt(_),se=xe[I],k=xe[Math.min(I+1,xe.length-1)],ie=Ct(O),K=ae.lerp(se.z,k.z,O);c.signalPath.getPointAt(wt(-K/112),c.signal.position),te.copy(c.signal.position).y+=.15,P.copy(te).add(G),D.fromArray(se.position).lerp(R.fromArray(k.position),O),S.fromArray(se.target).lerp(z.fromArray(k.target),O),D.z=_t(_,C<800),P.z=D.z,D.lerp(P,ie),S.lerp(te,ie);const fe=1-Math.exp(-4*L);j+=(ee-j)*fe,H+=(X-H)*fe;const s=1-ie;if(D.x+=j*.16*s,D.y-=H*.1*s,C<800){D.y+=3.4*s,S.x=S.x*(1-s);const n=ae.lerp(I===1?-2.65:0,I+1===1?-2.65:0,O);S.x+=n*s,S.y+=2.5*s}m.position.copy(D),m.lookAt(S);const t=[44,48,55,48,42,48,44],i=ae.lerp(t[I],t[Math.min(I+1,6)],O)+Math.sin(Math.PI*O)*4+(C<800?9:0);Math.abs(m.fov-i)>.005&&(m.fov=i,m.updateProjectionMatrix());const a=Z((_-.17)/.55);for(const n of c.shellPanels){const[T,p]=n.userData.direction;n.position.set(T*(1.88+a*2.05),.1+a*1.6,p*(1.88+a*.6)),n.rotation.z=-T*a*.68,n.rotation.x=p*a*.2}c.signal.rotation.y=U*.25;const M=1+Math.sin(U*2.4)*.1;c.signal.scale.setScalar(M),c.inputFrames.forEach((n,T)=>{n.rotation.y=(T?-1:1)*Z((_-1.6)/.7)*.18}),c.neuralLayers.forEach((n,T)=>{const p=Z((_-1.85-T*.055)/.16);n.scale.y=.15+p*.85,n.rotation.z=(1-p)*(T%2?-.65:.65)}),c.computeBlades.forEach((n,T)=>{const p=be(_,T).layer;n.position.z=n.userData.restZ+p*.25,n.position.y=n.userData.restY+p*(.15+T*.55)}),c.engineeringLid.position.y=1.23+be(_,0).lid*2.15,c.mapNodes.forEach((n,T)=>{n.position.y=-.9+Z((_-2.7-T*.08)/.4)*1.7}),c.dataPackets.forEach((n,T)=>{const p=(U*.23+T/c.dataPackets.length)%1;n.position.set(Math.sin(p*Math.PI*4+T)*(1-p)*2.6,.6+Math.sin(p*Math.PI*3+T)*.7,-31-p*11),n.scale.setScalar(.55+Math.sin(p*Math.PI)*.45)}),c.archiveCards.forEach((n,T)=>{const p=n.userData.restX-Math.sign(n.userData.restX)*(T===h.activeNodeIndex?.55:0);n.position.x+=(p-n.position.x)*(1-Math.exp(-5*L))}),c.skillRings.forEach((n,T)=>{const p=Z((_-4.72)/.4)*(1-Z((_-5.48)/.35)),Q=T/c.skillRings.length*Math.PI*2;n.position.x=ae.lerp(n.userData.restX,Math.cos(Q)*3.6,p),n.position.z=ae.lerp(n.userData.restZ,-94+Math.sin(Q)*2.3,p),n.rotation.z=Math.sin(Q)*p*.14;const oe=.1+p*(2+Math.sin(Q)*1.1)+(T===h.activeSkillIndex?.8:0);n.position.y+=(oe-n.position.y)*(1-Math.exp(-5*L))}),document.hidden||(f?f.render():o.render(u,m)),b=requestAnimationFrame(ce)}return pt(()=>{try{F()}catch(x){console.warn("Interactive world unavailable.",x),r("unavailable")}window.addEventListener("resize",W,{passive:!0}),window.addEventListener("pointermove",w,{passive:!0}),document.addEventListener("pointerleave",ue)}),mt(()=>{cancelAnimationFrame(b),window.removeEventListener("resize",W),window.removeEventListener("pointermove",w),document.removeEventListener("pointerleave",ue),o==null||o.domElement.removeEventListener("webglcontextlost",he),c==null||c.dispose(),g==null||g.dispose(),f==null||f.passes.forEach(x=>x.dispose()),f==null||f.dispose(),o==null||o.dispose(),o==null||o.domElement.remove()}),(x,L)=>(gt(),vt("div",{ref_key:"host",ref:l,class:"cyber-world-canvas","aria-hidden":"true"},null,512))}});export{Lt as default};
