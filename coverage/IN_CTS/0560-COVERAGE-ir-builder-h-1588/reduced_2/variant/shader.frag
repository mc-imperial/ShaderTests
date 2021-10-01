#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
precision highp int;

precision highp float;

void main()
{
 if(1.0 < determinant(mat4(1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, injectionSwitch.x, 1.0, 1.0, injectionSwitch.x, 1.0, 1.0, 1.0)))
  {
   for(int GLF_dead8i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
    {
     _GLF_global_loop_count ++;
    }
  }
}
