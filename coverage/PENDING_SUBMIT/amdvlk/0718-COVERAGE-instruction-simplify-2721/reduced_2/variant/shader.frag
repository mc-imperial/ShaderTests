#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of resolution: [256.0, 256.0]
layout(push_constant) uniform buf_push {
 vec2 resolution;
};
void main()
{
 do
  {
   _GLF_global_loop_count ++;
  }
 while((1 < clamp(1, 1.0 > resolution.y ? 1 : 0, 1)) && (_GLF_global_loop_count < _GLF_global_loop_bound));
}
