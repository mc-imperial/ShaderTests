#version 320 es
#define _int_1 _GLF_uniform_int_values[0]
#define _int_0 _GLF_uniform_int_values[1]
#define _int_2 _GLF_uniform_int_values[2]
#define _int_10 _GLF_uniform_int_values[3]
#define _float_1_0 _GLF_uniform_float_values[0]
#define _float_0_0 _GLF_uniform_float_values[1]
#define _float_28_0 _GLF_uniform_float_values[2]

precision highp int;

precision highp float;

// Contents of _GLF_uniform_float_values: [1.0, 0.0, 28.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[3];
};
// Contents of _GLF_uniform_int_values: [1, 0, 2, 10]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[4];
};
const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 float f = _float_0_0;
 for(int i = _int_0; i < _int_1; i ++)
  {
   for(int i = _int_0; i < _int_1; i ++)
    {
     for(int i = _int_0; i < _int_1; i ++)
      {
       for(int i = _int_0; i < _int_1; i ++)
        {
         for(int i = _int_0; i < _int_1; i ++)
          {
           for(int i = _int_0; i < _int_1; i ++)
            {
             for(int i = _int_0; i < _int_1; i ++)
              {
               for(int i = _int_0; i < _int_1; i ++)
                {
                 for(int i = _int_0; i < _int_1; i ++)
                  {
                   for(int i = _int_0; i < _int_1; i ++)
                    {
                     for(int i = _int_0; i < _int_1; i ++)
                      {
                       for(int i = _int_0; i < _int_2; i ++)
                        {
                         for(int i = _int_0; i < _int_1; i ++)
                          {
                           for(int i = _int_0; i < _int_1; i ++)
                            {
                             for(int i = _int_0; i < _int_2; i ++)
                              {
                               do
                                {
                                 _GLF_global_loop_count ++;
                                }
                               while(_GLF_global_loop_count < _GLF_global_loop_bound - _int_10);
                               f += _float_1_0;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
 float sum = _float_0_0;
 for(int r = _int_0; _GLF_global_loop_count < _GLF_global_loop_bound; r ++)
  {
   _GLF_global_loop_count ++;
   sum += f;
  }
 if(sum == _float_28_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
