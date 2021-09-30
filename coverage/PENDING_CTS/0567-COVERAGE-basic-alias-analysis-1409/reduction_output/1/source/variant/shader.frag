#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [0, 1]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[2];
};
// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[2];
};
const int _GLF_global_loop_bound = 10;

int _GLF_global_loop_count = 0;

// Contents of zero: 0.0
layout(set = 0, binding = 2) uniform buf2 {
 float zero;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 mat2 m22 = mat2(_float_0_0);
 float f = _float_0_0;
 for(int c = 1; zero < _float_1_0 && _GLF_global_loop_count < _GLF_global_loop_bound; c ++)
  {
   _GLF_global_loop_count ++;
   int r = 1;
   if(gl_FragCoord.x < _float_0_0)
    {
     f += (true ? m22 : mat2(_float_1_0))[c][r];
    }
  }
 if(f == _float_0_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
