#version 320 es

precision highp float;

precision highp int;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 float sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 for(int c = 1; c < clamp(int(injectionSwitch.y), 1, 2); c ++)
  {
   sums[2] += mat2x4(1.0)[c][1];
  }
 int region_y = 1;
 region_y = int(gl_FragCoord.y);
 int overall_region = 1;
 overall_region = region_y;
 _GLF_color = vec4(vec3(sums[overall_region]), 1.0);
}
