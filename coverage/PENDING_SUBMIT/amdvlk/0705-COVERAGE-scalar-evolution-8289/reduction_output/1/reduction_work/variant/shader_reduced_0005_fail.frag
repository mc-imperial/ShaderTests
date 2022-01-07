#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_120 _GLF_uniform_int_values[1]
#define _int_1 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: 1.0
uniform float _GLF_uniform_float_values[1];

// Contents of _GLF_uniform_int_values: [0, 120, 1]
uniform int _GLF_uniform_int_values[3];

layout(location = 0) out vec4 _GLF_color;

// Contents of one: 1
uniform int one;

void main()
{
 float f = _float_1_0;
 if(one > _int_0)
  {
   int a = 1;
   for(int i = 0; i < _int_120; i ++)
    {
     a *= one;
    }
   f = float(a);
  }
 f = max(f, _float_1_0);
 if(f == _float_1_0)
  _GLF_color = vec4(_int_1, 0, 0, 1);
 else
  _GLF_color = vec4(0);
}
