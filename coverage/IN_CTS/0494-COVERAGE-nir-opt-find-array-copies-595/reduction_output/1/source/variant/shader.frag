#version 320 es
#define _int_2 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _int_3 _GLF_uniform_int_values[3]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_int_values: [2, 0, 1, 3]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[4];
};
// Contents of one: 1
layout(set = 0, binding = 1) uniform buf1 {
 int one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float f;
 mat2 m = mat2(f);
 for(int i = _int_0; i < _int_2; i ++)
  {
   for(int j = _int_0; j < _int_2; j ++)
    {
     m[i][j] = float(i * _int_2 + j);
    }
  }
 if(m == mat2(_int_0, _int_1, _int_2, _int_3))
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
