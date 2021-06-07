#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

float h_r = 1.0;

void main()
{
 vec3 point1 = vec3(1.0);
 vec3 computePoint_inline_return_value_1 = vec3(1.0);
 vec3 result = vec3(1.0);
 for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   vec3 d = vec3(1.0);
   vec3 drawShape_inline_return_value_3 = vec3(1.0);
   vec3 computeColor_inline_return_value_0 = vec3(1.0);
   vec3 temp = vec3(1.0);
   temp = abs(6.0 * (h_r - vec3(1.0)));
   h_r = temp.x;
   computeColor_inline_return_value_0 = vec3(h_r, 1.0, 1.0);
   drawShape_inline_return_value_3 = computeColor_inline_return_value_0;
   d = drawShape_inline_return_value_3;
   result = d;
  }
 computePoint_inline_return_value_1 = result;
 point1 = computePoint_inline_return_value_1;
 vec3 mixed = vec3(1.0);
 mixed = point1;
 _GLF_color = vec4(mixed, 1.0);
}
