#version 320 es
precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform buf0 {
 vec2 resolution;
};
const vec4 pal[16] = vec4[16](vec4(0.0, 0.0, 0.0, 1.0), vec4(0.5, 0.0, 0.0, 1.0), vec4(0.0, 0.5, 0.0, 1.0), vec4(0.5, 0.5, 0.0, 1.0), vec4(0.0, 0.0, 0.5, 1.0), vec4(0.5, 0.0, 0.5, 1.0), vec4(0.0, 0.5, 0.5, 1.0), vec4(0.5, 0.5, 0.5, 1.0), vec4(0.0, 0.0, 0.0, 1.0), vec4(1.0, 0.0, 0.0, 1.0), vec4(0.0, 1.0, 0.0, 1.0), vec4(1.0, 1.0, 0.0, 1.0), vec4(0.0, 0.0, 1.0, 1.0), vec4(1.0, 0.0, 1.0, 1.0), vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0));

int collatz(int v)
{
 int count = 0;
 while(v > 1)
  {
   if((v & 1) == 1)
    {
     v = 3 * v + 1;
    }
   else
    {
     v /= 2;
    }
   count ++;
  }
 return count;
}
void main()
{
 vec2 lin = gl_FragCoord.xy / resolution;
 lin = floor(lin * 8.0);
 int v = int(lin.x) * 8 + int(lin.y);
 _GLF_color = pal[collatz(v) % 16];
}
