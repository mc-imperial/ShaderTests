#version 320 es

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 if(gl_FragCoord.xy.y < 0.6)
  {
  }
 else
  {
   ivec2 icoord = ivec2(1);
   icoord = ivec2((gl_FragCoord.xy - vec2(1.0, 0.6)) * 256.0);
   _GLF_color = vec4(1.0, float((icoord.y & 1)), float((icoord.x & 1)), 1.0);
  }
}
