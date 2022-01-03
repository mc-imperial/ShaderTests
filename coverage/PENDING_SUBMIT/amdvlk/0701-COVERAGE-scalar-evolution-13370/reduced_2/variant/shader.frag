#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

vec4 GLF_live3_GLF_color = vec4(1.0);

precision highp float;

precision highp int;

void main()
{
 vec2 pos = vec2(1.0);
 pos = gl_FragCoord.xy;
 ivec2 ipos = ivec2(1);
 ipos = ivec2(int(pos.x), 1);
 if(ipos.x == 1)
  {
   for(int GLF_dead7i = 1; (GLF_dead7i >= 1) && (_GLF_global_loop_count < _GLF_global_loop_bound); GLF_dead7i --)
    {
     _GLF_global_loop_count ++;
     for(int GLF_dead7j = 1; (GLF_dead7j >= GLF_dead7i) && (_GLF_global_loop_count < _GLF_global_loop_bound); GLF_dead7j --)
      {
       _GLF_global_loop_count ++;
       GLF_live3_GLF_color[clamp(GLF_dead7i, 0, 4 - 1)] -= 1.0;
      }
    }
  }
}
