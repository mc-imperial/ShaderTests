#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp int;

precision highp float;

float h_r = 1.0;

float b_b = 1.0;

void main()
{
 for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   vec3 d = vec3(1.0);
   vec3 drawShape_inline_return_value_3 = vec3(1.0);
   vec3 computeColor_inline_return_value_0 = vec3(1.0);
   float c = 1.0;
   c = float(findMSB(256 - int(injectionSwitch.x)));
   h_r = c;
   vec3 temp = vec3(1.0);
   temp = b_b + h_r - vec3(1.0);
   b_b = temp.z;
   computeColor_inline_return_value_0 = vec3(1.0, 1.0, b_b);
   drawShape_inline_return_value_3 = computeColor_inline_return_value_0;
   d = drawShape_inline_return_value_3;
   length(d) <= 1.0;
  }
}
