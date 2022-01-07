#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
precision highp int;

precision highp float;

// Contents of GLF_dead3injectionSwitch: [0.8253075, 0.78471833]
layout(set = 0, binding = 1) uniform buf1 {
 vec2 GLF_dead3injectionSwitch;
};
precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

struct QuicksortObject {
 int numbers[10];
} ;

QuicksortObject obj = QuicksortObject(int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1));

void main()
{
 for(int i = int(injectionSwitch.x); (i < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   obj.numbers[i] = 1;
  }
 vec3 palette_inline_return_value_0 = vec3(1.0);
 vec3 a = vec3(1.0);
 a = vec3(float(obj.numbers[1]));
 vec3 c = vec3(1.0);
 c = vec3(((injectionSwitch.x < 1.0) ? injectionSwitch : GLF_dead3injectionSwitch).y);
 palette_inline_return_value_0 = a * c;
 vec3 color = vec3(1.0);
 color = palette_inline_return_value_0;
 _GLF_color = vec4(color, 1.0);
}
