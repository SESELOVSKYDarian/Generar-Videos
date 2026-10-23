import React from 'react';
import {AbsoluteFill, Composition, OffthreadVideo, registerRoot, staticFile} from 'remotion';

const SpotVertical = () => <AbsoluteFill style={{backgroundColor: '#100b08'}}>
  <OffthreadVideo muted src={staticFile('spotvideo.mp4')} style={{position:'absolute',width:'100%',height:'100%',objectFit:'cover',filter:'blur(45px)',transform:'scale(1.12)',opacity:0.48}} />
  <AbsoluteFill style={{background:'linear-gradient(180deg,rgba(0,0,0,.2),transparent 40%,rgba(0,0,0,.25))'}} />
  <AbsoluteFill style={{justifyContent:'center'}}>
    <OffthreadVideo src={staticFile('spotvideo.mp4')} style={{width:'100%',height:'auto'}} />
  </AbsoluteFill>
</AbsoluteFill>;
registerRoot(() => <Composition id="SpotVertical" component={SpotVertical} durationInFrames={2250} fps={30} width={1080} height={1920} />);
