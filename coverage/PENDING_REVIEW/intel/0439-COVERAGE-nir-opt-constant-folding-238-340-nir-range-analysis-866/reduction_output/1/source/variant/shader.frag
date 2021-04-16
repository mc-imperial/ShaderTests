#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 1.0
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[1];
};
// Contents of _GLF_uniform_int_values: [1, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[2];
};
layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 2) uniform sampler2D tex;

void main()
{
 const float arr[9] = float[9](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
 vec2 coord = gl_FragCoord.xy;
 vec4 res = vec4(_int_1, _int_0, _int_0, _int_1);
 for(int i = 0; i < 3; i ++)
  {
   for(int j = 0; j < 3; j ++)
    {
     int a = clamp(i + j, 0, 9);
     float f0 = clamp(arr[a], arr[a], arr[a]);
     float f1 = clamp(arr[a], arr[a], arr[a]);
     vec4 v0 = vec4(f0);
     vec4 v1 = texture(tex, vec2(i)) * f1;
     vec4 v2 = texture(tex, coord) * arr[a];
     vec4 v3 = texture(tex, coord) * arr[a];
     vec4 v4 = texture(tex, coord + vec2(i - _int_1, j - _int_1)) * arr[a];
     vec4 v5 = min(vec4(1.0), v2);
     vec4 v6 = min(v3, v5);
     res += min(min(min(v0, v1), v6) + vec4(_float_1_0), v4);
    }
  }
 _GLF_color = res;
}
