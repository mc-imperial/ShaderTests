#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of one: 1.0
layout(set = 0, binding = 0) uniform buf0 {
 float one;
};
void main()
{
 ivec2 donor_replacementGLF_dead7pos = ivec2(1);
 donor_replacementGLF_dead7pos = ivec2(1, - 25236) | int(one);
 while((donor_replacementGLF_dead7pos.y != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   donor_replacementGLF_dead7pos.y ++;
  }
}
