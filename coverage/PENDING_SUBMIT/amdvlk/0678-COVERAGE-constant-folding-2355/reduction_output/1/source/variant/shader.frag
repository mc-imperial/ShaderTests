#version 320 es
#define _int_3 _GLF_uniform_int_values[0]
#define _int_1 _GLF_uniform_int_values[1]
#define _int_0 _GLF_uniform_int_values[2]

precision highp float;

precision highp int;

// Contents of _GLF_uniform_int_values: [3, 1, 0]
layout(set = 0, binding = 0) uniform buf0 {
 int _GLF_uniform_int_values[3];
};
// Contents of one: 1.0
layout(set = 0, binding = 1) uniform buf1 {
 float one;
};
layout(location = 0) out vec4 _GLF_color;

void main()
{
 float f = dot(vec2(0, 1), max(vec2(one, 1), vec2(2, 3)));
 if(int(f) == _int_3)
  {
   _GLF_color = vec4(_int_1, _int_0, _int_0, _int_1);
  }
 else
  {
   _GLF_color = vec4(0);
  }
}
