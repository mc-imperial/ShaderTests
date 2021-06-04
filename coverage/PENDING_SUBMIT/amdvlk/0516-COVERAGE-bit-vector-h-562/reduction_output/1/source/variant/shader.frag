#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [1, 0, 2]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of _GLF_uniform_float_values: [1.0, 0.0]
layout(set = 0, binding = 1) uniform buf1 {
 float _GLF_uniform_float_values[2];
};
const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of zero: 0
layout(push_constant) uniform buf_push {
 int zero;
};
struct S {
 float arr[10];
} ;

layout(location = 0) out vec4 _GLF_color;

int func()
{
 int m = _int_0;
 for( m = _int_1;
 _GLF_global_loop_count < _GLF_global_loop_bound; m = _int_2)
  {
   _GLF_global_loop_count ++;
   switch(zero)
    {
     case 0:
     S s0 = S(float[10](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0));
     if(s0.arr[m] > _float_0_0)
      {
       m = _int_1;
      }
     int a = _int_0;
     case 1:
     while(a > _int_0 && _GLF_global_loop_count < _GLF_global_loop_bound)
      {
       _GLF_global_loop_count ++;
      }
     S s1 = S(float[10](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0));
     if(s1.arr[m] > _float_0_0)
      {
       a = _int_1;
      }
    }
  }
 return m;
}
void main()
{
 if(func() == _int_2)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
