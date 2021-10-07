#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp int;

precision highp float;

void main()
{
 mat4 matrix_a = mat4(1.0);
 matrix_a = mat4(1.0);
 vec4 matrix_u = vec4(1.0);
 for(int k = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); k ++)
  {
   _GLF_global_loop_count ++;
   for(int x = 1; (1 >= k) && (_GLF_global_loop_count < _GLF_global_loop_bound); x --)
    {
     _GLF_global_loop_count ++;
     matrix_u[x] = matrix_a[x][k];
     if(injectionSwitch.x > 1.0)
      {
       discard;
      }
    }
  }
}
