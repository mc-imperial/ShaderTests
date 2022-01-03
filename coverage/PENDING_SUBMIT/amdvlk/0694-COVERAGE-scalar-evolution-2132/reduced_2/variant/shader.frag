#version 320 es

precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec2 pos = vec2(1.0);
 pos = gl_FragCoord.xy;
 ivec2 ipos = ivec2(1);
 ipos = ivec2(int(pos.x), 1);
 int v = 1;
 v = ipos.x;
 ivec2 p = ivec2(1);
 p = ivec2(v, 1);
 int i = 1;
 for( 1;
 i < 100; i ++)
  {
   if(gl_FragCoord.y < 0.0)
    {
     return;
    }
  }
 if(p.x < 1)
  {
   p.x = - p.x;
  }
 while(p.x > 1)
  {
   p.x -= 16;
   if(gl_FragCoord.y < 0.0)
    {
     break;
    }
  }
 _GLF_color = vec4[16](vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0), vec4(1.0))[p.x];
}
