#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_2 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[2];
};
// Contents of _GLF_uniform_int_values: [1, 2, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[3];
};
const int _GLF_global_loop_bound = 50;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

// Contents of resolution: [256.0, 256.0]
layout(push_constant) uniform buf_push {
 vec2 resolution;
};
void main()
{
 float arr[32] = float[32](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0);
 int i = 1;
 while(_GLF_global_loop_count < _GLF_global_loop_bound)
  {
   _GLF_global_loop_count ++;
   if(gl_FragCoord.y < _float_0_0 && (true ? resolution : vec2(_int_1)).x >= _float_1_0)
    {
     break;
    }
   if(i == 1)
    {
     arr[i ++] = _float_0_0;
    }
  }
 if(arr[findMSB(_int_2)] * resolution.y == _float_0_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
