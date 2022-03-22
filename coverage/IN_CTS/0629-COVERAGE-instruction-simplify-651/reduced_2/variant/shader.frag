#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

vec4 GLF_live17_GLF_color = vec4(1.0);

precision highp int;

precision highp float;

void GLF_live15doConvert()
{
 uint GLF_live17uselessOutVariable = 1u;
 vec3 GLF_live17data[16] = vec3[16](vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0));
 GLF_live17data = vec3[16](vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), vec3(1.0), (GLF_live17_GLF_color * mat3x4(1.0)), vec3(1.0), vec3(1.0));
 int GLF_live17_looplimiter2 = 1;
 for(int GLF_live17i = 0; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); GLF_live17i ++)
  {
   _GLF_global_loop_count ++;
   if(GLF_live17_looplimiter2 >= 5)
    {
     break;
    }
   GLF_live17_looplimiter2 ++;
   int GLF_live17_looplimiter1 = 1;
   for(int GLF_live17j = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
    {
     _GLF_global_loop_count ++;
     if(GLF_live17_looplimiter1 >= 5)
      {
       break;
      }
     GLF_live17_looplimiter1 ++;
     vec3 GLF_live17mand_inline_return_value_5 = vec3(1.0);
     GLF_live17mand_inline_return_value_5 = vec3(float(GLF_live17i - 1), 1.0, 1.0);
     GLF_live17data[clamp(uaddCarry(uint(4 * GLF_live17j), uint(GLF_live17i), GLF_live17uselessOutVariable), 0u, 16u - 1u)] = GLF_live17mand_inline_return_value_5;
    }
  }
 vec3 GLF_live17sum = vec3(1.0);
 GLF_live17sum += GLF_live17data[1];
 GLF_live17_GLF_color = vec4(GLF_live17sum, 1.0);
}
precision highp float;

precision highp int;

void main()
{
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   int GLF_live9_looplimiter1 = 1;
   for(int GLF_live9j = 1; (GLF_live9j < 4) && (_GLF_global_loop_count < _GLF_global_loop_bound); GLF_live9j ++)
    {
     _GLF_global_loop_count ++;
     if(GLF_live9_looplimiter1 >= 7)
      {
       GLF_live15doConvert();
       break;
      }
     GLF_live9_looplimiter1 ++;
    }
  }
}
