#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

layout(location = 0) out vec4 _GLF_color;

// Contents of injectionSwitch: [0.0, 1.0]
layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
void main()
{
 vec2 grid = vec2(1.0);
 int count = 1;
 do
  {
   _GLF_global_loop_count ++;
   do
    {
     _GLF_global_loop_count ++;
     count ++;
    }
   while((gl_FragCoord.y < 1.0) && (_GLF_global_loop_count < _GLF_global_loop_bound));
  }
 while((count != 1) && (_GLF_global_loop_count < _GLF_global_loop_bound));
 grid += vec2(1, count + int(injectionSwitch.x));
 vec2 position = vec2(1.0);
 position = grid;
 bool puzzlelize_inline_return_value_1 = true;
 vec2 pos = vec2(1.0);
 pos = position;
 float randomize_inline_return_value_0 = 1.0;
 vec2 co = vec2(1.0);
 co = pos;
 randomize_inline_return_value_0 = dot(co, vec2(1.0));
 puzzlelize_inline_return_value_1 = randomize_inline_return_value_0 < 1.0;
 _GLF_color = vec4(puzzlelize_inline_return_value_1);
}
