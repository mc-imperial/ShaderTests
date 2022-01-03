#version 320 es

precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 int a = int(gl_FragCoord.x);
 for(int i = 1; i < 3; i ++)
  {
   if(gl_FragCoord.y < 0.0)
    {
     return;
    }
  }
 if(a < 0)
  {
   a = - a;
  }
 while(a > 2)
  {
   a -= 2;
   if(gl_FragCoord.y < 0.0)
    {
     break;
    }
  }
 _GLF_color = vec4[5](vec4(1, 0, 0, 1), vec4(1, 0, 0, 1), vec4(1, 0, 0, 1), vec4(0), vec4(0))[a];
}
