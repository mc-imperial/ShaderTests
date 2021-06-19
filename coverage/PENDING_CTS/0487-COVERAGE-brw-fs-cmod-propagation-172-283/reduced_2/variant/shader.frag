#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec3 c = vec3(1.0);
 float compute_value_inline_return_value_0 = 1.0;
 float result = 1.0;
 for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   if((~ i) == 0)
    {
    }
   else
    {
     result += 1.0;
    }
  }
 compute_value_inline_return_value_0 = result;
 c.y = compute_value_inline_return_value_0;
 _GLF_color = vec4(c, 1.0);
}
