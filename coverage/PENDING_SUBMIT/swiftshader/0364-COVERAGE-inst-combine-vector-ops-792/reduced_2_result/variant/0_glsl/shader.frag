#version 310 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

mediump vec4 GLF_live1gl_FragCoord;

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

vec3 computeColor(float c)
{
 if(int(GLF_live1gl_FragCoord[1]) < 1)
  {
  }
 else
  {
   for(int _injected_loop_counter = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
    {
     _GLF_global_loop_count ++;
     if(dFdy(c) <= 1.0)
      {
       c += 1.0;
      }
    }
   for(int GLF_dead4k = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
    {
     _GLF_global_loop_count ++;
     if(c > 1.0)
      {
       break;
      }
    }
  }
 return vec3(1.0);
}
void main()
{
 vec3 point1;
 vec3 computePoint_inline_return_value_0;
 vec3 result;
 result = vec3(1.0);
 for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   vec3 d;
   computeColor(1.0);
   result = d;
  }
 computePoint_inline_return_value_0 = result;
 point1 = computePoint_inline_return_value_0;
 vec3 mixed;
 mixed = point1;
 _GLF_color = vec4(mixed, 1.0);
}
