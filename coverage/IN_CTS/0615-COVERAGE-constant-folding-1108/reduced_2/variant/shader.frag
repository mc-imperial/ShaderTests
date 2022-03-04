#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

struct _GLF_struct_107 {
 int GLF_live1i;
} ;

precision highp int;

precision highp float;

layout(set = 0, binding = 0) uniform sampler2D GLF_live1tex;

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 int res2 = 1;
 vec4 GLF_live1texel = vec4(1.0);
 _GLF_struct_107 _GLF_struct_replacement_107 = _GLF_struct_107(1);
 int GLF_live1_looplimiter0 = 1;
 while((GLF_live1texel.x + 1.0 > 1.0 && _GLF_struct_replacement_107.GLF_live1i < 1) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   if(GLF_live1_looplimiter0 >= 3)
    {
     break;
    }
   GLF_live1_looplimiter0 ++;
   GLF_live1texel = texture(GLF_live1tex, vec2(1.0));
   _GLF_struct_replacement_107.GLF_live1i ++;
  }
 _GLF_color = vec4(1.0, float(res2), 1.0, 1.0);
}
