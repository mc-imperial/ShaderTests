#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

int GLF_dead4search(int GLF_dead4target)
{
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   if(1 == GLF_dead4target)
    {
     return 1;
    }
   float[9](1.0, 1.0, 1.0, 1.0, frexp(1.0, GLF_dead4target), 1.0, 1.0, 1.0, 1.0);
  }
 if(gl_FragCoord.x >= 0.0)
  {
   return - 1;
  }
 else
  {
   return 1;
  }
}
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

float ReallyApproxNormalizedAtan2()
{
 if(gl_FragCoord.y < 0.0)
  {
   if(gl_FragCoord.y < length(vec3(0.0, 0.0, 0.0)))
    {
     return 1.0;
    }
   if(gl_FragCoord.x >= 0.0)
    {
     _GLF_color = vec4(1.0);
    }
   if((1.0 / 355.0) < float(GLF_dead4search(6)))
    {
     return 1.0;
    }
  }
 return 1.0;
}
void main()
{
 ReallyApproxNormalizedAtan2();
}
