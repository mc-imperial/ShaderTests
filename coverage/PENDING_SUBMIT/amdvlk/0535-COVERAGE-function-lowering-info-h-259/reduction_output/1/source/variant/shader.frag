#version 320 es
#define _int_0 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_4 _GLF_uniform_int_values[2]
#define _float_0_0 _GLF_uniform_float_values[0]
#define _float_1_0 _GLF_uniform_float_values[1]
#define _float_255_0 _GLF_uniform_float_values[2]
#define _float_256_0 _GLF_uniform_float_values[3]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_float_values: [0.0, 1.0, 255.0, 256.0]
layout(set = 0, binding = 0) uniform buf0 {
 float _GLF_uniform_float_values[4];
};
// Contents of _GLF_uniform_int_values: [0, 1, 4]
layout(set = 0, binding = 1) uniform buf1 {
 int _GLF_uniform_int_values[3];
};
// Contents of one: 1.0
layout(push_constant) uniform buf_push {
 float one;
};
layout(set = 0, binding = 2) uniform sampler2D tex;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 vec2 coord = vec2(_float_0_0);
 vec4 texel = texture(tex, coord);
 _GLF_color = vec4(_int_0);
 for(int i = _int_0; i < int(one); i ++)
  {
   while(texel.x < _float_1_0)
    {
     for(int i = _int_0; i < _int_1; i ++)
      {
       if(gl_FragCoord.y > _float_0_0)
        {
        }
       else
        {
         for(int i = _int_1; i > _int_0; i --)
          {
           for(int i = _int_4; i != _int_1; i ++)
            {
             for(int i = _int_0; i < int(one); i ++)
              {
               if(gl_FragCoord.y > _float_0_0)
                {
                }
               else
                {
                 coord = vec2(_float_1_0);
                }
              }
            }
          }
        }
      }
     coord = coord + _float_255_0 / _float_256_0;
     for(int i = _int_0; i < _int_1; i ++)
      {
       for(int i = _int_1; i != _int_0; i --)
        {
         texel = texture(tex, coord);
         _GLF_color = vec4(texel.x, _int_0, _int_0, _int_1);
        }
      }
     for(int i = _int_0; i < _int_1; i ++)
      {
       for(int i = _int_0; i != _int_1; i ++)
        {
        }
      }
    }
  }
}
