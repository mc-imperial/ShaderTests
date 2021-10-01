#version 320 es
#define _int_5 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]
#define _float_21_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_0_0 _GLF_uniform_float_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [21.0, 1.0, 0.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[3];
};
// Contents of _GLF_uniform_int_values: [5, 1, 0]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[3];
};
// Contents of injectionSwitch: [0.0, 1.0]
layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float arr[9] = float[9](_float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0, _float_1_0);
 for(int i = _int_0; i < _int_5; i ++)
  {
   for(int j = 0; j < 4; j ++)
    {
     if(! (injectionSwitch.x > injectionSwitch.y))
      {
       do
        {
         if(! (injectionSwitch.x > injectionSwitch.y))
          {
           if(! (gl_FragCoord.x < 0.0))
            {
             arr[_int_1] += _float_1_0;
            }
          }
        }
       while(gl_FragCoord.y < _float_0_0);
      }
    }
  }
 if(arr[int(injectionSwitch.y)] == _float_21_0)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(_int_0);
  }
}
