#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
precision highp float;

precision highp int;

void main()
{
 int msb10 = 1;
 msb10 = int(injectionSwitch.x) | 1024;
 for(int j = 1; (j < findLSB(msb10)) && (_GLF_global_loop_count < _GLF_global_loop_bound); j ++)
  {
   _GLF_global_loop_count ++;
  }
}
