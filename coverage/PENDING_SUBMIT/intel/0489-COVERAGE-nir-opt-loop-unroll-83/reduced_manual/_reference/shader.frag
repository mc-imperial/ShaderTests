#version 320 es
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec2 coord = vec2(gl_FragCoord.xy) * (1.0 / 256.0);
 if(coord.x > 0.4)
  {
   if(coord.y < 0.6)
    {
     uvec2 icoord = uvec2(((coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.4, 1.0 / 0.6)) * 256.0);
     uint res1 = uint(((icoord.x * icoord.y) >> (icoord.x & 31u)) & 0xffffffffu);
     uint res2 = uint(((icoord.x * icoord.y) << (icoord.x & 31u)) & 0xffffffffu);
     float res = float(((res2 & 0x80000000u) != 0u ? 1u : 0u) ^ ((res1 & 1u) != 0u ? 1u : 0u));
     _GLF_color = vec4(res, res, res, 1.0);
    }
   else
    {
     ivec2 icoord = ivec2(((coord - vec2(0.4, 0.6)) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
     int res3 = ((icoord.x >> 5) & 1) ^ ((icoord.y & 32) >> 5);
     int res2 = (icoord.y * icoord.y >> 10) & 1;
     int res1 = (icoord.x * icoord.y >> 9) & 1;
     _GLF_color = vec4(float(res1 ^ res2), float(res2 & res3), float(res1 | res3), 1.0);
    }
  }
 else
  {
   ivec2 icoord = ivec2(((coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.6, 1.0)) * 256.0);
   int v = (icoord.x ^ icoord.y) * icoord.y;
   bool res1 = ((v >> 10) & 1) != 0;
   bool res2 = ((v >> 11) & 4) != 0;
   bool res3 = ((v >> 12) & 8) != 0;
   _GLF_color = vec4(res1 ? 1.0 : 0.0, res2 ? 1.0 : 0.0, res3 ? 1.0 : 0.0, 1);
  }
}
