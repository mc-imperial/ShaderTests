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

layout(location = 0) out vec4 _GLF_color;

mat2 m22 = mat2(1.0);

void main()
{
 float sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 for(int c = 1; (int(injectionSwitch.x) < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); c ++)
  {
   _GLF_global_loop_count ++;
   int r = 1;
   sums[0] += (true ? m22 : mat2(1.0))[c][r];
  }
 int region_x = 1;
 region_x = int(gl_FragCoord.x);
 int overall_region = 1;
 overall_region = region_x;
 _GLF_color = vec4(vec3(sums[overall_region]), 1.0);
}
