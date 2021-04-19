#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

float h_r = 1.0;

float b_b = 1.0;

vec3 drawShape(vec3 setting)
{
 vec3 computeColor_inline_return_value_0 = vec3(1.0);
 float c = 1.0;
 c = setting.z;
 h_r = c;
 vec3 temp = vec3(1.0);
 temp = (clamp(1.0 - max(1.0, h_r), 1.0 - 1.0, 1.0 - 1.0) * vec3(1.0));
 b_b = temp.z;
 computeColor_inline_return_value_0 = vec3(1.0, 1.0, b_b);
 return computeColor_inline_return_value_0;
}
void main()
{
 vec3 point3 = vec3(1.0);
 vec3 computePoint_inline_return_value_1 = vec3(1.0);
 vec3 result = vec3(1.0);
 for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); i --)
  {
   _GLF_global_loop_count ++;
   vec3 d = vec3(1.0);
   d = drawShape(vec3(1.0, 1.0, float(i)));
   result = d;
  }
 computePoint_inline_return_value_1 = result;
 point3 = computePoint_inline_return_value_1;
 vec3 mixed = vec3(1.0);
 mixed = point3;
 _GLF_color = vec4(mixed, 1.0);
}
