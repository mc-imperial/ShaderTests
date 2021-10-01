#version 320 es

precision highp int;

precision highp float;

vec4 GLF_dead5_GLF_color = vec4(1.0);

float GLF_dead5patternize()
{
 switch(1)
  {
   case 0:
   return 1.0;
  }
}
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec2 coord = vec2(1.0);
 coord = gl_FragCoord.xy;
 if(gl_FragCoord.y < 1.0)
  {
   GLF_dead5_GLF_color = vec4(vec3(GLF_dead5patternize()), 1.0);
  }
 if(packUnorm4x8(GLF_dead5_GLF_color) == 1u)
  {
   return;
  }
 uvec2 icoord = uvec2(1u);
 icoord = uvec2(coord * 256.0);
 uint res1 = 1u;
 res1 = icoord.x;
 uint res2 = 1u;
 res2 = 1u << icoord.x;
 float res = 1.0;
 res = float((res2 != 1u ? 1u : 0u) ^ (res1 != 1u ? 1u : 0u));
 _GLF_color = vec4(1.0, 1.0, res, 1.0);
}
