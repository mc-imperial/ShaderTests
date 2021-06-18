#version 320 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER
precision highp float;

precision highp int;

struct _GLF_struct_11 {
 ivec3 _f0;
 mat3 _f1;
 int directions;
 mat2x3 _f2;
 uvec4 _f3;
 uvec2 _f4;
 bool _f5;
} ;

struct _GLF_struct_10 {
 uint _f0;
} ;

struct _GLF_struct_9 {
 mat4 _f0;
 bool _f1;
 mat3x2 _f2;
} ;

struct _GLF_struct_12 {
 _GLF_struct_9 _f0;
 int _f1;
 _GLF_struct_10 _f2;
 _GLF_struct_11 _f3;
 bvec4 _f4;
} ;

struct _GLF_struct_13 {
 _GLF_struct_12 _f0;
 mat3x2 _f1;
} ;

struct _GLF_struct_7 {
 uvec2 _f0;
} ;

struct _GLF_struct_5 {
 vec4 _f0;
 mat4x3 _f1;
 float _f2;
} ;

struct _GLF_struct_6 {
 _GLF_struct_5 _f0;
 bool canwalk;
} ;

struct _GLF_struct_3 {
 mat4x3 _f0;
} ;

struct _GLF_struct_4 {
 _GLF_struct_3 _f0;
} ;

struct _GLF_struct_1 {
 mat2x4 _f0;
 float _f1;
 uvec2 _f2;
 float _f3;
 uvec2 _f4;
} ;

struct _GLF_struct_0 {
 mat4x3 _f0;
 bvec4 _f1;
 uvec4 _f2;
 ivec2 _f3;
 uvec3 _f4;
 vec3 _f5;
 mat3x2 _f6;
} ;

struct _GLF_struct_2 {
 _GLF_struct_0 _f0;
 _GLF_struct_1 _f1;
} ;

struct _GLF_struct_8 {
 _GLF_struct_2 _f0;
 _GLF_struct_4 _f1;
 _GLF_struct_6 _f2;
 mat2x4 _f3;
 uvec4 _f4;
 _GLF_struct_7 _f5;
} ;

layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
int map[16 * 16];

int _GLF_outlined_0()
{
 return 0;
}
int _GLF_outlined_1()
{
 return 0;
}
vec4 _GLF_outlined_2()
{
 return vec4(1.0, 1.0, 1.0, 1.0);
}
int _GLF_outlined_3()
{
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    return 1;
   if(_GLF_DEAD(false))
    return 1;
   return 1;
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return 1;
 return _GLF_outlined_1();
}
vec4 _GLF_outlined_4()
{
 return _GLF_outlined_2();
}
vec4 _GLF_outlined_5()
{
 return vec4(_GLF_IDENTITY(0.0, 0.0 + (0.0)), 0.0, 0.0, 1.0);
 if(_GLF_DEAD(false))
  {
   if(_GLF_IDENTITY(_GLF_DEAD(false), (_GLF_DEAD(false)) && true))
    return vec4(1.0);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    return vec4(1.0);
   return vec4(1.0);
   if(_GLF_DEAD(false))
    return vec4(1.0);
  }
}
void main()
{
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      return;
     return;
    }
   return;
  }
 if(_GLF_DEAD(false))
  return;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  return;
 vec2 pos = _GLF_IDENTITY(gl_FragCoord.xy, max(gl_FragCoord.xy, gl_FragCoord.xy)) / _GLF_IDENTITY(resolution, (_GLF_IDENTITY(resolution, vec2(resolution[0], _GLF_IDENTITY(resolution[1], (true ? resolution[1] : _GLF_FUZZED(-4.2)))))) - vec2(0.0, 0.0));
 if(_GLF_DEAD(false))
  return;
 ivec2 ipos = ivec2(int(_GLF_IDENTITY(_GLF_IDENTITY(pos, vec2(pos[0], pos[1])), (pos) + vec2(0.0, 0.0)).x * 16.0), int(pos.y * 16.0));
 int i;
 if(_GLF_DEAD(false))
  return;
 if(_GLF_DEAD(false))
  return;
 for( i = 0;
 i < _GLF_IDENTITY(16, ~ (~ (16))) * 16; _GLF_IDENTITY(i ++, ~ (~ (i ++))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    discard;
   do
    {
     _GLF_IDENTITY(map[i] = 0, (_GLF_TRUE(true, (gl_FragCoord.x >= 0.0)) ? map[i] = 0 : _GLF_FUZZED(i)));
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(log(_GLF_IDENTITY(abs(1.0), (abs(1.0)) / 1.0)), (log(abs(1.0))) - tan(0.0))))));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < determinant(mat4(0.0, _GLF_ONE(1.0, injectionSwitch.y), 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, sqrt(0.0), 0.0))))))
    return;
  }
 if(_GLF_DEAD(false))
  return;
 if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch, vec2(injectionSwitch[0], _GLF_IDENTITY(injectionSwitch, vec2(injectionSwitch[0], injectionSwitch[1]))[1])).x > injectionSwitch.y))))
  {
   for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      return;
    }
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     return;
    }
   else
    {
    }
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    return;
   for(int _injected_loop_counter = _GLF_IDENTITY(int(_GLF_ONE(1.0, injectionSwitch.y)), max(_GLF_IDENTITY(int(_GLF_ONE(1.0, injectionSwitch.y)), (int(_GLF_ONE(1.0, injectionSwitch.y))) >> 0), int(_GLF_ONE(1.0, injectionSwitch.y)))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
    {
     return;
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   if(_GLF_DEAD(false))
    return;
   return;
  }
 if(_GLF_DEAD(_GLF_IDENTITY(false, bool(bvec4(false, true, _GLF_IDENTITY(true, (true) || false), _GLF_FALSE(false, (gl_FragCoord.x < 0.0)))))))
  return;
 ivec2 p = ivec2(0, 0);
 _GLF_struct_8 _GLF_struct_replacement_8 = _GLF_struct_8(_GLF_struct_2(_GLF_struct_0(mat4x3(1.0), bvec4(true), uvec4(1u), ivec2(1), uvec3(1u), vec3(_GLF_IDENTITY(_GLF_IDENTITY(1.0, max(1.0, 1.0)), clamp(_GLF_IDENTITY(1.0, max(1.0, 1.0)), _GLF_IDENTITY(_GLF_IDENTITY(1.0, max(1.0, _GLF_IDENTITY(1.0, (false ? _GLF_FUZZED(-4505.1380) : 1.0)))), max(1.0, 1.0)), _GLF_IDENTITY(1.0, max(1.0, 1.0))))), mat3x2(_GLF_IDENTITY(1.0, min(_GLF_IDENTITY(1.0, min(1.0, 1.0)), 1.0)))), _GLF_struct_1(mat2x4(1.0), 1.0, uvec2(_GLF_IDENTITY(1u, (1u) << (0u & 1170u))), 1.0, uvec2(1u))), _GLF_struct_4(_GLF_struct_3(mat4x3(1.0))), _GLF_struct_6(_GLF_struct_5(vec4(1.0), mat4x3(1.0), _GLF_IDENTITY(1.0, max(1.0, _GLF_IDENTITY(1.0, _GLF_IDENTITY(float(_GLF_IDENTITY(vec4(1.0, 0.0, 0.0, 1.0), (true ? vec4(1.0, _GLF_IDENTITY(0.0, _GLF_IDENTITY(float(_GLF_IDENTITY(mat2(_GLF_IDENTITY(0.0, float(mat4(0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, cos(0.0), 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0))), 0.0, 0.0, 1.0), transpose(transpose(mat2(_GLF_IDENTITY(0.0, float(mat4(0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, cos(0.0), 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0))), 0.0, 0.0, 1.0))))), (float(_GLF_IDENTITY(mat2(_GLF_IDENTITY(0.0, float(mat4(0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, cos(0.0), 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0))), 0.0, 0.0, 1.0), transpose(transpose(mat2(_GLF_IDENTITY(0.0, float(mat4(0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, cos(0.0), 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0))), 0.0, 0.0, 1.0)))))) / 1.0)), 0.0, 1.0) : _GLF_FUZZED(vec4(-3.5, -599.561, 8269.2570, -5.0))))), (float(vec4(1.0, 0.0, 0.0, 1.0))) * 1.0))))), _GLF_IDENTITY(true, (true) && true)), mat2x4(_GLF_IDENTITY(1.0, (1.0) - 0.0)), uvec4(1u), _GLF_struct_7(uvec2(1u)));
 if(_GLF_DEAD(false))
  return;
 do
  {
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_IDENTITY(_GLF_IDENTITY(false, bool(bvec3(false, true, false))), (false) && _GLF_IDENTITY(true, (_GLF_IDENTITY(true, (true) && true)) && true))))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        return;
       return;
      }
     if(_GLF_DEAD(false))
      continue;
     return;
    }
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return;
 int v = 0;
 if(_GLF_DEAD(false))
  {
   for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
    {
     return;
     if(_GLF_DEAD(false))
      discard;
    }
  }
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   if(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))), bool(bool(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0))))))))
    {
     if(_GLF_DEAD(false))
      return;
     return;
    }
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     do
      {
       if(_GLF_IDENTITY(_GLF_DEAD(false), (_GLF_DEAD(false)) && true))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          return;
         return;
        }
       if(_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (_GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, injectionSwitch, injectionSwitch)).x < injectionSwitch.y, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)) || (_GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, injectionSwitch, injectionSwitch)).x < injectionSwitch.y, true && (_GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, injectionSwitch, injectionSwitch)).x < injectionSwitch.y))))))), bool(bvec2(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < _GLF_IDENTITY(injectionSwitch, (injectionSwitch) + vec2(0.0, 0.0)).y))), true))))
        {
         v ++;
         if(_GLF_DEAD(false))
          continue;
        }
       else
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          discard;
         if(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))), ! (! (_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))), bool(bvec4(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))), ! (! (_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)))))), true, false, true)))))))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord, max(gl_FragCoord, gl_FragCoord)).y < 0.0))))
            return;
           discard;
          }
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        return;
       if(_GLF_DEAD(false))
        discard;
       _GLF_struct_13 _GLF_struct_replacement_13 = _GLF_struct_13(_GLF_struct_12(_GLF_struct_9(mat4(1.0), true, mat3x2(1.0)), 1, _GLF_struct_10(1u), _GLF_struct_11(ivec3(1), mat3(1.0), 0, mat2x3(1.0), _GLF_IDENTITY(uvec4(_GLF_IDENTITY(1u, uint(uvec4(_GLF_IDENTITY(1u, (1u) * 1u), 1u, 0u, 0u)))), (_GLF_IDENTITY(uvec4(1u), clamp(uvec4(1u), uvec4(1u), uvec4(1u)))) | (uvec4(1u))), uvec2(1u), true), bvec4(true)), mat3x2(1.0));
       if(_GLF_DEAD(false))
        break;
       if(_GLF_DEAD(false))
        continue;
       if(_GLF_IDENTITY(p.x > 0, bool(bvec2(p.x > 0, true))) && _GLF_IDENTITY(map[(p.x - 2) + (p.y) * 16] == 0, ! _GLF_IDENTITY((_GLF_IDENTITY(! (map[_GLF_IDENTITY((p.x - 2), max((p.x - 2), (p.x - 2))) + _GLF_IDENTITY((p.y) * 16, ((p.y) * 16) | ((p.y) * 16))] == 0), (! (map[(p.x - 2) + _GLF_IDENTITY((p.y) * 16, ((p.y) * 16) / 1)] == 0)) && true)), _GLF_IDENTITY((_GLF_IDENTITY((_GLF_IDENTITY(! (map[_GLF_IDENTITY((p.x - 2), max((p.x - 2), (p.x - 2))) + _GLF_IDENTITY((p.y) * 16, ((p.y) * 16) | ((p.y) * 16))] == 0), (! (map[(p.x - 2) + _GLF_IDENTITY(_GLF_IDENTITY((p.y), ~ (~ ((p.y)))) * 16, ((p.y) * 16) / 1)] == _GLF_IDENTITY(0, (false ? _GLF_FUZZED(-62236) : 0)))) && true)), _GLF_TRUE(true, (injectionSwitch.x < _GLF_IDENTITY(injectionSwitch.y, (false ? _GLF_FUZZED(-2480.0584) : injectionSwitch.y)))) && ((_GLF_IDENTITY(! (map[_GLF_IDENTITY((p.x - 2), max((p.x - 2), (p.x - 2))) + _GLF_IDENTITY(_GLF_IDENTITY((p.y) * 16, int(ivec4((p.y) * 16, (0 >> _GLF_IDENTITY(int(2), int(2))), 1, 1))), ((p.y) * 16) | (_GLF_IDENTITY((p.y), ((p.y)) * 1) * 16))] == 0), _GLF_IDENTITY((! (map[(_GLF_IDENTITY(p, (true ? p : _GLF_FUZZED(ipos))).x - 2) + _GLF_IDENTITY((p.y) * 16, (_GLF_IDENTITY((p.y) * 16, ((p.y) * 16) / 1)) / 1)] == 0)), bool(_GLF_IDENTITY(bvec2((! (map[(_GLF_IDENTITY(p, (true ? p : _GLF_FUZZED(ipos))).x - 2) + _GLF_IDENTITY((p.y) * 16, (_GLF_IDENTITY((p.y) * 16, ((p.y) * 16) / 1)) / 1)] == 0)), false), bvec2(bvec4(bvec2((! (map[(_GLF_IDENTITY(p, (true ? p : _GLF_FUZZED(ipos))).x - 2) + _GLF_IDENTITY((p.y) * 16, (_GLF_IDENTITY((p.y) * 16, ((p.y) * 16) / 1)) / 1)] == 0)), false), false, true))))) && true))))) && true, ((_GLF_IDENTITY((_GLF_IDENTITY(! (_GLF_IDENTITY(map[_GLF_IDENTITY((p.x - 2), max((p.x - 2), (p.x - 2))) + _GLF_IDENTITY((p.y) * 16, ((p.y) * 16) | ((p.y) * 16))] == _GLF_IDENTITY(0, max(0, 0)), bool(_GLF_IDENTITY(bool(map[_GLF_IDENTITY((p.x - 2), max((p.x - 2), (p.x - 2))) + _GLF_IDENTITY((p.y) * 16, ((p.y) * 16) | ((p.y) * 16))] == 0), ! (! (bool(map[_GLF_IDENTITY((p.x - 2), _GLF_IDENTITY(max((p.x - 2), (p.x - 2)), (_GLF_IDENTITY(max((p.x - 2), (p.x - 2)), (true ? max((p.x - 2), (p.x - 2)) : _GLF_FUZZED(i)))) >> (0 >> _GLF_IDENTITY(int(3), int(3))))) + _GLF_IDENTITY((p.y) * 16, ((p.y) * 16) | ((p.y) * 16))] == 0))))))), (! (map[(p.x - 2) + _GLF_IDENTITY((p.y) * 16, ((p.y) * 16) / 1)] == 0)) && _GLF_IDENTITY(true, (true) && true))), _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) && ((_GLF_IDENTITY(! (map[_GLF_IDENTITY((p.x - 2), max((p.x - 2), (p.x - 2))) + _GLF_IDENTITY((p.y) * 16, (_GLF_IDENTITY((p.y), (_GLF_IDENTITY((p.y), ((p.y)) ^ int(_GLF_ZERO(0.0, injectionSwitch.x)))) | 0) * 16) | (_GLF_IDENTITY((p.y), ~ (~ ((p.y)))) * 16))] == 0), (! (map[(p.x - 2) + _GLF_IDENTITY((p.y) * 16, (_GLF_IDENTITY((p.y) * 16, 0 | ((p.y) * 16))) / 1)] == 0)) && true))))) && _GLF_IDENTITY(true, _GLF_IDENTITY(bool(bvec3(_GLF_IDENTITY(true, ! (! (true))), false, false)), ! (! (bool(bvec3(_GLF_IDENTITY(true, ! (! (true))), false, false))))))) || false))))
        {
         do
          {
           _GLF_struct_replacement_13._f0._f3.directions += _GLF_IDENTITY(1, (1) - 0);
          }
         while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           if(_GLF_DEAD(false))
            break;
           continue;
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            discard;
          }
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
          }
         else
          {
           if(_GLF_DEAD(false))
            {
             if(_GLF_DEAD(false))
              continue;
             for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                return;
               discard;
              }
            }
          }
         if(_GLF_DEAD(false))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            discard;
           if(_GLF_DEAD(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), ! (_GLF_IDENTITY(! (! (false)), (! (! (false))) || false)))))))
            break;
           if(_GLF_DEAD(false))
            continue;
           discard;
          }
         if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
          continue;
        }
       if(_GLF_IDENTITY(_GLF_IDENTITY(p.y, clamp(p.y, p.y, p.y)), (p.y) << 0) > 0 && map[_GLF_IDENTITY((p.x) + (p.y - 2) * _GLF_IDENTITY(16, clamp(16, 16, _GLF_IDENTITY(16, clamp(_GLF_IDENTITY(16, _GLF_IDENTITY(0, (_GLF_IDENTITY(0, (0) - 0)) / _GLF_IDENTITY(((((1 << _GLF_IDENTITY(int(5), int(5))) >> _GLF_IDENTITY(int(5), int(5))) << _GLF_IDENTITY(int(0), int(0))) >> _GLF_IDENTITY(int(0), int(0))), (((((1 << _GLF_IDENTITY(int(5), int(5))) >> _GLF_IDENTITY(int(5), int(5))) << _GLF_IDENTITY(int(0), int(0))) >> _GLF_IDENTITY(int(0), int(0)))) | 0)) + (16)), _GLF_IDENTITY(16, (true ? 16 : _GLF_FUZZED(v))), 16)))), ((p.x) + (p.y - 2) * _GLF_IDENTITY(16, clamp(16, 16, _GLF_IDENTITY(16, clamp(_GLF_IDENTITY(16, _GLF_IDENTITY(0, (_GLF_IDENTITY(0, (0) - 0)) / _GLF_IDENTITY(((((1 << _GLF_IDENTITY(int(5), int(5))) >> _GLF_IDENTITY(int(5), int(5))) << _GLF_IDENTITY(int(0), int(0))) >> _GLF_IDENTITY(int(0), int(0))), (((((1 << _GLF_IDENTITY(_GLF_IDENTITY(int(5), int(5)), min(_GLF_IDENTITY(int(5), int(5)), _GLF_IDENTITY(int(5), int(5))))) >> _GLF_IDENTITY(int(5), int(5))) << _GLF_IDENTITY(int(0), _GLF_IDENTITY(int(0), (int(0)) | (int(0))))) >> _GLF_IDENTITY(int(0), int(0)))) | 0)) + (16)), _GLF_IDENTITY(16, (true ? 16 : _GLF_FUZZED(v))), 16))))) * 1)] == 0)
        {
         if(_GLF_DEAD(false))
          {
           if(_GLF_DEAD(false))
            break;
           discard;
           if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
            break;
          }
         if(_GLF_DEAD(false))
          continue;
         _GLF_struct_replacement_13._f0._f3.directions += 1;
        }
       if(_GLF_DEAD(false))
        break;
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        continue;
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x, mix(float(_GLF_FUZZED(4216.4491)), float(gl_FragCoord.x), bool(true))) < 0.0))))
        {
        }
       else
        {
         for(int _injected_loop_counter = int(_GLF_ZERO(0.0, _GLF_IDENTITY(injectionSwitch.x, (injectionSwitch.x) - tan(0.0)))); _GLF_WRAPPED_LOOP(_GLF_IDENTITY(_injected_loop_counter, 0 + (_injected_loop_counter)) != 1); _injected_loop_counter ++)
          {
           if(_GLF_DEAD(false))
            continue;
           for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < _GLF_IDENTITY((1 & 1), min((1 & 1), _GLF_IDENTITY((1 & 1), int(_GLF_IDENTITY(ivec2((1 & 1), 1), max(ivec2((1 & 1), 1), ivec2((1 & 1), 1)))))))); _injected_loop_counter ++)
            {
             do
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                discard;
               if(p.x < 14 && map[(p.x + 2) + _GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY((p.y), (_GLF_IDENTITY((p.y), max((p.y), (p.y)))) - (0 >> _GLF_IDENTITY(int(5), int(5)))), ~ (_GLF_IDENTITY(~ _GLF_IDENTITY(((p.y)), (true ? ((p.y)) : _GLF_FUZZED(27766))), (~ ((p.y))) / (1 | 1)))) * 16, _GLF_IDENTITY(((p.y) * 16), (((p.y) * 16)) - 0) - _GLF_IDENTITY(0, _GLF_IDENTITY(int(ivec4(0, int(_GLF_ONE(1.0, injectionSwitch.y)), 0, 0)), (_GLF_IDENTITY(int(ivec4(0, int(_GLF_ONE(1.0, injectionSwitch.y)), 0, 0)), int(int(int(ivec4(0, int(_GLF_ONE(1.0, injectionSwitch.y)), 0, 0)))))) - 0)))] == 0)
                {
                 if(_GLF_WRAPPED_IF_TRUE(true))
                  {
                   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x > injectionSwitch.y, (_GLF_IDENTITY(injectionSwitch, sqrt(vec2(1.0, 1.0)) * (_GLF_IDENTITY(injectionSwitch, max(injectionSwitch, _GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)), vec2(_GLF_IDENTITY(0.0, (false ? _GLF_FUZZED(-3442.7232) : _GLF_IDENTITY(0.0, (true ? 0.0 : _GLF_FUZZED(9.2))))), 0.0) + (injectionSwitch)))))).x > injectionSwitch.y) || false)))))
                    {
                    }
                   else
                    {
                     _GLF_struct_replacement_13._f0._f3.directions += 1;
                     if(_GLF_DEAD(false))
                      break;
                    }
                   if(_GLF_DEAD(false))
                    continue;
                  }
                 else
                  {
                   if(_GLF_DEAD(false))
                    return;
                  }
                 if(_GLF_IDENTITY(_GLF_DEAD(false), bool(_GLF_IDENTITY(bvec2(_GLF_DEAD(false), false), bvec2(bvec2(bvec2(_GLF_DEAD(false), false)))))))
                  return;
                }
              }
             while(_GLF_WRAPPED_LOOP(false));
            }
           if(_GLF_DEAD(false))
            return;
           if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord, (true ? gl_FragCoord : _GLF_FUZZED(vec4(5.3, 425.743, 0.2, 3.9)))).y < 0.0))))
            discard;
          }
         if(_GLF_DEAD(false))
          break;
         if(_GLF_DEAD(false))
          break;
         if(_GLF_DEAD(false))
          {
           do
            {
             return;
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
          }
        }
       if(_GLF_DEAD(false))
        return;
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         if(_GLF_DEAD(false))
          return;
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord, (gl_FragCoord) - vec4(_GLF_IDENTITY(0.0, (0.0) / round(length(normalize(vec4(1.0, 1.0, 1.0, 1.0))))), 0.0, 0.0, 0.0)).y < 0.0))))
          {
          }
         else
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
            discard;
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            discard;
          }
         if(_GLF_IDENTITY(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x, (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(68.45) : _GLF_IDENTITY(gl_FragCoord.x, min(gl_FragCoord.x, gl_FragCoord.x)))) < 0.0))), (_GLF_IDENTITY(_GLF_IDENTITY(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x, mix(float(_GLF_FUZZED(27.84)), float(gl_FragCoord.x), bool(_GLF_IDENTITY(true, false || (true))))) < 0.0))), ! (! (_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)))))), _GLF_IDENTITY(false || (_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(_GLF_FALSE(false, _GLF_IDENTITY((gl_FragCoord.x < 0.0), bool(bvec3((gl_FragCoord.x < 0.0), true, true)))), ! (! (_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), ! (! (_GLF_FALSE(false, (gl_FragCoord.x < 0.0)))))))))), ! (! (_GLF_IDENTITY(false || (_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(_GLF_FALSE(false, _GLF_IDENTITY(_GLF_IDENTITY((gl_FragCoord.x < 0.0), ! (! ((gl_FragCoord.x < 0.0)))), bool(bvec3((gl_FragCoord.x < 0.0), true, true)))), ! (! (_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), ! (! (_GLF_FALSE(false, (gl_FragCoord.x < 0.0)))))))))), bool(bvec2(_GLF_IDENTITY(false || (_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(_GLF_FALSE(false, _GLF_IDENTITY((gl_FragCoord.x < 0.0), bool(bvec3((gl_FragCoord.x < 0.0), true, true)))), ! (! (_GLF_IDENTITY(_GLF_FALSE(_GLF_IDENTITY(false, _GLF_IDENTITY(bool(bvec2(false, true)), (bool(bvec2(false, true))) && true)), (gl_FragCoord.x < 0.0)), ! (! (_GLF_FALSE(false, (gl_FragCoord.x < 0.0)))))))))), (false || (_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(_GLF_FALSE(false, _GLF_IDENTITY(_GLF_IDENTITY((gl_FragCoord.x < 0.0), bool(bvec3((gl_FragCoord.x < 0.0), true, true))), ! (! (_GLF_IDENTITY((gl_FragCoord.x < 0.0), bool(bvec3((gl_FragCoord.x < 0.0), true, true))))))), ! (! (_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), ! (! (_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))))))))) && true), false)))))))) || false))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            return;
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             if(_GLF_DEAD(false))
              continue;
             do
              {
               if(_GLF_DEAD(false))
                {
                 if(_GLF_WRAPPED_IF_FALSE(false))
                  {
                   if(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))), (_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))), true && (_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)))))) || false))
                    return;
                  }
                 else
                  {
                   if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, _GLF_IDENTITY((_GLF_IDENTITY(true, _GLF_TRUE(true, (gl_FragCoord.x >= 0.0)) && (true))) || false, ((_GLF_IDENTITY(true, _GLF_TRUE(true, (_GLF_IDENTITY(gl_FragCoord, vec4(gl_FragCoord[0], gl_FragCoord[1], gl_FragCoord[2], gl_FragCoord[3])).x >= 0.0)) && (true))) || false) && true))))
                    {
                     discard;
                    }
                   else
                    {
                    }
                  }
                }
               if(_GLF_DEAD(_GLF_FALSE(_GLF_IDENTITY(_GLF_IDENTITY(false, true && (false)), _GLF_IDENTITY(bool(bool(_GLF_IDENTITY(false, true && (false)))), bool(_GLF_IDENTITY(bool(bool(bool(_GLF_IDENTITY(false, true && (false))))), (bool(bool(bool(_GLF_IDENTITY(false, true && (false)))))) && true)))), (gl_FragCoord.x < 0.0))))
                continue;
              }
             while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch, vec2(0.0, 0.0) + (injectionSwitch)).x > injectionSwitch.y))));
            }
           else
            {
             if(_GLF_DEAD(false))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                return;
               discard;
              }
            }
           if(_GLF_DEAD(false))
            continue;
          }
         else
          {
           if(_GLF_DEAD(false))
            return;
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y, mix(float(gl_FragCoord.y), float(_GLF_FUZZED(-309.332)), bool(false))) < _GLF_IDENTITY(dot(vec2(0.0, 1.0), vec2(1.0, 0.0)), _GLF_IDENTITY(dot(vec2(0.0, 1.0), vec2(1.0, 0.0)), clamp(dot(vec2(0.0, 1.0), vec2(1.0, 0.0)), dot(vec2(0.0, 1.0), vec2(1.0, 0.0)), dot(vec2(0.0, 1.0), vec2(1.0, 0.0)))))))))
              break;
             if(_GLF_DEAD(false))
              discard;
             discard;
            }
           if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(_GLF_IDENTITY(! (false), false || (! (false))), (_GLF_IDENTITY(! (false), false || (! (false)))) && _GLF_TRUE(true, _GLF_IDENTITY((gl_FragCoord.x >= 0.0), _GLF_IDENTITY(bool(_GLF_IDENTITY(bool((gl_FragCoord.x >= 0.0)), bool(bvec3(bool((gl_FragCoord.x >= 0.0)), true, true)))), false || (bool(_GLF_IDENTITY(bool((gl_FragCoord.x >= 0.0)), bool(bvec3(bool((gl_FragCoord.x >= 0.0)), true, true))))))))))), (injectionSwitch.x > injectionSwitch.y))))
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              continue;
             if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x < _GLF_IDENTITY(0.0, max(0.0, 0.0)), bool(bvec4(gl_FragCoord.x < _GLF_IDENTITY(0.0, max(0.0, 0.0)), true, false, true)))))))
              {
               if(_GLF_IDENTITY(_GLF_DEAD(false), (_GLF_DEAD(false)) && true))
                continue;
               break;
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x, clamp(gl_FragCoord.x, gl_FragCoord.x, gl_FragCoord.x)) < _GLF_IDENTITY(determinant(mat3(0.0, 0.0, tan(0.0), 1.0, 0.0, 0.0, determinant(mat3(1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0)), 1.0, 0.0)), clamp(determinant(mat3(0.0, 0.0, tan(0.0), 1.0, 0.0, 0.0, determinant(mat3(_GLF_IDENTITY(1.0, clamp(1.0, 1.0, _GLF_IDENTITY(1.0, (1.0) - 0.0))), _GLF_IDENTITY(1.0, max(_GLF_IDENTITY(1.0, mix(float(_GLF_FUZZED(-4716.0242)), float(1.0), bool(true))), 1.0)), 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0)), 1.0, 0.0)), determinant(mat3(0.0, 0.0, tan(0.0), 1.0, 0.0, 0.0, determinant(mat3(1.0, 1.0, 1.0, 0.0, 1.0, _GLF_IDENTITY(1.0, clamp(1.0, 1.0, _GLF_IDENTITY(1.0, float(vec3(1.0, length(vec3(0.0, 0.0, 0.0)), 1.0))))), 0.0, 0.0, 1.0)), 1.0, 0.0)), _GLF_IDENTITY(determinant(mat3(0.0, 0.0, tan(0.0), 1.0, 0.0, 0.0, determinant(mat3(1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0)), 1.0, 0.0)), float(vec2(determinant(mat3(0.0, 0.0, tan(0.0), 1.0, 0.0, 0.0, determinant(mat3(1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0)), 1.0, 0.0)), 1.0)))))))))
                {
                 do
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(0.0)))))
                    {
                     if(_GLF_DEAD(false))
                      return;
                     break;
                    }
                   return;
                  }
                 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  break;
                }
               discard;
              }
            }
           else
            {
             if(_GLF_DEAD(_GLF_IDENTITY(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), false || (_GLF_IDENTITY(! (false), bool(bvec2(! (false), false))))))), (false) && true)))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                continue;
               if(_GLF_DEAD(false))
                return;
               return;
              }
             if(_GLF_DEAD(false))
              continue;
             if(p.y < _GLF_IDENTITY(_GLF_IDENTITY(14, (_GLF_IDENTITY(14, _GLF_IDENTITY(int(ivec2(14, 1)), clamp(int(ivec2(14, 1)), _GLF_IDENTITY(int(ivec2(14, 1)), int(int(int(ivec2(14, 1))))), _GLF_IDENTITY(int(ivec2(14, 1)), clamp(int(ivec2(14, 1)), _GLF_IDENTITY(int(ivec2(14, 1)), (false ? _GLF_FUZZED(-45788) : int(ivec2(14, 1)))), int(ivec2(14, 1)))))))) - 0), max(14, _GLF_IDENTITY(14, _GLF_IDENTITY(~ (~ (14)), (~ (~ (14))) ^ 0)))) && _GLF_IDENTITY(_GLF_IDENTITY(map[_GLF_IDENTITY((p.x) + (p.y + 2) * 16, clamp((p.x) + (p.y + 2) * 16, (p.x) + (p.y + 2) * 16, (p.x) + (p.y + 2) * 16))], (_GLF_IDENTITY(_GLF_IDENTITY(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)), false || (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)))) ? map[(p.x) + (p.y + 2) * 16] : _GLF_FUZZED(i), min(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? map[(p.x) + (p.y + 2) * 16] : _GLF_FUZZED(i), _GLF_IDENTITY(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? map[_GLF_IDENTITY((p.x) + _GLF_IDENTITY((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2), ((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2)) + 0) * 16, clamp(_GLF_IDENTITY((p.x) + _GLF_IDENTITY((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2), ((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2)) + 0) * 16, clamp((p.x) + _GLF_IDENTITY((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2), ((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2)) + 0) * 16, (p.x) + _GLF_IDENTITY((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2), ((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2)) + 0) * 16, (p.x) + _GLF_IDENTITY((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2), ((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2)) + 0) * 16)), _GLF_IDENTITY((p.x) + _GLF_IDENTITY((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2), ((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2)) + 0) * 16, ((p.x) + _GLF_IDENTITY((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2), ((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2)) + 0) * 16) ^ 0), (p.x) + _GLF_IDENTITY((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2), ((_GLF_IDENTITY(p, (ivec2(1, 1) | ivec2(1, 1)) * (p)).y + 2)) + 0) * 16))] : _GLF_FUZZED(i), (false ? _GLF_FUZZED(min(v, i)) : _GLF_TRUE(true, (_GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)).x < injectionSwitch.y)) ? _GLF_IDENTITY(map[(p.x) + (p.y + 2) * 16], (map[(p.x) + (p.y + 2) * 16]) >> 0) : _GLF_FUZZED(i))))))), (map[_GLF_IDENTITY((p.x), (false ? _GLF_FUZZED(ivec2(-67089, 51587).y) : (p.x))) + (_GLF_IDENTITY(p.y, min(p.y, p.y)) + 2) * 16]) >> 0) == 0)
              {
               if(_GLF_DEAD(false))
                discard;
               if(_GLF_DEAD(false))
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  continue;
                 break;
                }
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 if(_GLF_DEAD(false))
                  continue;
                 if(_GLF_DEAD(false))
                  return;
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  continue;
                 _GLF_struct_replacement_13._f0._f3.directions += 1;
                }
               else
                {
                }
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                return;
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(sqrt(_GLF_ZERO(0.0, injectionSwitch.x)), float(mat4x3(sqrt(_GLF_ZERO(0.0, injectionSwitch.x)), 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 1.0)))))))
                break;
               if(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))), (_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)))) && true))
                break;
              }
             do
              {
               if(_GLF_DEAD(_GLF_IDENTITY(false, (false) || _GLF_FALSE(false, (gl_FragCoord.x < 0.0)))))
                continue;
               if(_GLF_IDENTITY(_GLF_DEAD(false), true && (_GLF_DEAD(false))))
                {
                 do
                  {
                   discard;
                  }
                 while(_GLF_WRAPPED_LOOP(false));
                 if(_GLF_DEAD(false))
                  discard;
                }
              }
             while(_GLF_WRAPPED_LOOP(_GLF_FALSE(_GLF_IDENTITY(false, _GLF_IDENTITY(! (! (false)), false || (! (! (false))))), (_GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch.x > injectionSwitch.y, bool(bvec4(injectionSwitch.x > injectionSwitch.y, false, true, false))), (injectionSwitch.x > injectionSwitch.y) || false)))));
            }
          }
         if(_GLF_DEAD(false))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(0.0, (true ? 0.0 : _GLF_FUZZED(17.07)))))))
            discard;
           break;
          }
        }
       else
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          discard;
        }
       if(_GLF_struct_replacement_13._f0._f3.directions == 0)
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x, mix(float(gl_FragCoord.x), float(_GLF_FUZZED(2.7)), bool(false))) < 0.0))))
          break;
         _GLF_IDENTITY(_GLF_struct_replacement_8._f2.canwalk = false, (_GLF_struct_replacement_8._f2.canwalk = false) && true);
         if(_GLF_DEAD(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), true && (! (false)))))))
          return;
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, injectionSwitch, injectionSwitch)), mat2(1.0) * (_GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, injectionSwitch, injectionSwitch)))).y, max(_GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, injectionSwitch, injectionSwitch)), mat2(1.0) * (_GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, injectionSwitch, injectionSwitch)))).y, _GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, injectionSwitch, injectionSwitch)), mat2(1.0) * (_GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, injectionSwitch, injectionSwitch)))).y))))))
          {
           if(_GLF_DEAD(false))
            continue;
           if(_GLF_DEAD(false))
            break;
           break;
          }
         if(_GLF_DEAD(false))
          continue;
         if(_GLF_DEAD(_GLF_FALSE(_GLF_IDENTITY(false, bool(bvec3(false, true, false))), (gl_FragCoord.x < 0.0))))
          continue;
         int j;
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
            return;
           if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
            discard;
           if(_GLF_DEAD(false))
            {
             if(_GLF_DEAD(false))
              break;
             break;
            }
           if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), (_GLF_FALSE(false, (gl_FragCoord.y < 0.0))) || false)))
            {
             if(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))), bool(bvec3(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))), (_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((gl_FragCoord.x < 0.0), _GLF_IDENTITY(false || (_GLF_IDENTITY((gl_FragCoord.x < 0.0), true && ((gl_FragCoord.x < 0.0)))), false || (false || (_GLF_IDENTITY((gl_FragCoord.x < 0.0), true && ((gl_FragCoord.x < 0.0)))))))))) && _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))), _GLF_FALSE(false, (gl_FragCoord.x < 0.0)), _GLF_TRUE(true, _GLF_IDENTITY((gl_FragCoord.y >= log(1.0)), _GLF_IDENTITY(((gl_FragCoord.y >= log(1.0))) && true, (((gl_FragCoord.y >= log(1.0))) && true) || _GLF_FALSE(false, (gl_FragCoord.x < 0.0)))))))))
              continue;
             continue;
            }
           for(           _GLF_IDENTITY(i = _GLF_outlined_0(), ~ (~ (_GLF_IDENTITY(i = _GLF_outlined_0(), _GLF_IDENTITY((i = _GLF_IDENTITY(_GLF_outlined_0(), (_GLF_outlined_0()) / 1)), ((i = _GLF_IDENTITY(_GLF_outlined_0(), (_GLF_outlined_0()) / 1))) / 1) / ((_GLF_IDENTITY(1 << _GLF_IDENTITY(int(2), int(2)), min(1 << _GLF_IDENTITY(int(2), int(2)), 1 << _GLF_IDENTITY(int(2), int(2))))) >> _GLF_IDENTITY(int(2), _GLF_IDENTITY(int(2), (int(2)) | (int(2)))))))));
 i < 8; _GLF_IDENTITY(i ++, _GLF_IDENTITY((i ++), ((_GLF_IDENTITY(i ++, 0 | (_GLF_IDENTITY(i ++, (i ++) * 1))))) | 0) ^ 0))
            {
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               for(               j = _GLF_outlined_3();
 j < 8; j ++)
                {
                 if(_GLF_DEAD(false))
                  continue;
                 if(_GLF_DEAD(false))
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x < 0.0, ! (_GLF_IDENTITY(! (gl_FragCoord.x < 0.0), ! (! (! (gl_FragCoord.x < 0.0))))))))))
                      {
                       if(_GLF_DEAD(false))
                        break;
                       continue;
                      }
                     if(_GLF_DEAD(false))
                      return;
                     continue;
                    }
                   discard;
                  }
                 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                  {
                   if(_GLF_DEAD(false))
                    continue;
                   break;
                  }
                 if(map[j * 2 + i * 2 * 16] == 0)
                  {
                   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                    continue;
                   if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x))), ! (! (_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x))), (_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x), (gl_FragCoord.y < _GLF_ZERO(_GLF_IDENTITY(0.0, min(_GLF_IDENTITY(0.0, 1.0 * (0.0)), 0.0)), injectionSwitch.x)) && true)))) && _GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))))))
                    break;
                   for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_GLF_IDENTITY(_GLF_IDENTITY(_injected_loop_counter, (_GLF_IDENTITY(_injected_loop_counter, (_GLF_IDENTITY(_injected_loop_counter, (_injected_loop_counter) + 0)) | _GLF_IDENTITY((_injected_loop_counter), 0 ^ (_GLF_IDENTITY((_injected_loop_counter), ((_injected_loop_counter)) + 0))))) | (_injected_loop_counter)), _GLF_IDENTITY((_injected_loop_counter) ^ 0, (_GLF_IDENTITY(_GLF_IDENTITY((_injected_loop_counter) ^ 0, 0 + ((_injected_loop_counter) ^ 0)), ~ (~ (_GLF_IDENTITY(_GLF_IDENTITY((_injected_loop_counter) ^ 0, 0 + ((_injected_loop_counter) ^ 0)), (_GLF_IDENTITY((_injected_loop_counter) ^ 0, 0 + ((_injected_loop_counter) ^ 0))) + 0))))) ^ (0 << _GLF_IDENTITY(int(6), int(6))))) != ((_GLF_IDENTITY(1 << _GLF_IDENTITY(int(_GLF_IDENTITY(4, clamp(4, _GLF_IDENTITY(4, ~ (~ (4))), 4))), int(4)), 0 ^ (_GLF_IDENTITY(1 << _GLF_IDENTITY(int(_GLF_IDENTITY(4, clamp(4, 4, 4))), int(4)), clamp(1 << _GLF_IDENTITY(int(_GLF_IDENTITY(4, _GLF_IDENTITY(clamp(4, 4, 4), ~ (~ (clamp(4, 4, 4)))))), int(4)), 1 << _GLF_IDENTITY(int(_GLF_IDENTITY(4, clamp(4, 4, 4))), int(4)), 1 << _GLF_IDENTITY(int(_GLF_IDENTITY(4, clamp(4, 4, 4))), int(4))))))) >> _GLF_IDENTITY(int(4), _GLF_IDENTITY(_GLF_IDENTITY(int(_GLF_IDENTITY(4, (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4))), (int(_GLF_IDENTITY(4, (_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4, clamp(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4, _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4, _GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4, _GLF_IDENTITY(_GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4, (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4) - 0), ~ (~ (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4))), 1)), (int(ivec2(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4, ~ (~ (_GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, clamp(injectionSwitch.y, injectionSwitch.y, injectionSwitch.y)))) ? _GLF_FUZZED(i) : 4))), 1))) | 0), (_GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4, (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4) - 0), ~ (~ (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4))), 1)), (int(ivec2(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4, ~ (~ (_GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, clamp(injectionSwitch.y, injectionSwitch.y, injectionSwitch.y)))) ? _GLF_FUZZED(i) : 4))), 1))) | 0)) | (_GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4, (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4) - 0), ~ (~ (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4))), 1)), (int(ivec2(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(i) : 4, ~ (~ (_GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, clamp(injectionSwitch.y, injectionSwitch.y, injectionSwitch.y)))) ? _GLF_FUZZED(i) : 4))), 1))) | 0)))))))))) + 0), ~ (~ (int(4))))))); _injected_loop_counter ++)
                    {
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                      discard;
                     for(int _injected_loop_counter = (1 & 1); _GLF_WRAPPED_LOOP(_injected_loop_counter > 0); _injected_loop_counter --)
                      {
                       for(int _injected_loop_counter = (1 | 1); _GLF_WRAPPED_LOOP(_injected_loop_counter > (0 | 0)); _injected_loop_counter --)
                        {
                         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                          return;
                         p.x = _GLF_IDENTITY(j, 0 + (j)) * 2;
                        }
                       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                        discard;
                      }
                     if(_GLF_DEAD(false))
                      {
                       for(int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y)); _GLF_WRAPPED_LOOP(_GLF_IDENTITY(_injected_loop_counter > 0, true && (_GLF_IDENTITY(_injected_loop_counter > 0, bool(bvec2(_injected_loop_counter > 0, true)))))); _injected_loop_counter --)
                        {
                         if(_GLF_WRAPPED_IF_FALSE(false))
                          {
                          }
                         else
                          {
                           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                            discard;
                          }
                         if(_GLF_DEAD(false))
                          break;
                        }
                       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                        {
                        }
                       else
                        {
                         if(_GLF_DEAD(false))
                          discard;
                         return;
                         if(_GLF_DEAD(false))
                          return;
                        }
                      }
                    }
                   if(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_WRAPPED_IF_FALSE(false), _GLF_TRUE(true, (_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, mat4(1.0) * (gl_FragCoord)).y, clamp(_GLF_IDENTITY(gl_FragCoord, mat4(1.0) * (gl_FragCoord)).y, _GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, mat4(1.0) * (gl_FragCoord)).y, min(_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, mat4(1.0) * (gl_FragCoord)).y, max(_GLF_IDENTITY(gl_FragCoord, mat4(1.0) * (gl_FragCoord)).y, _GLF_IDENTITY(gl_FragCoord, mat4(1.0) * (gl_FragCoord)).y)), _GLF_IDENTITY(gl_FragCoord, mat4(1.0) * (gl_FragCoord)).y)), _GLF_IDENTITY(gl_FragCoord, mat4(1.0) * (gl_FragCoord)).y)) >= 0.0)) && _GLF_IDENTITY(_GLF_IDENTITY((_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, ! (! (_GLF_IDENTITY(false, ! (! (false)))))))), _GLF_TRUE(true, (gl_FragCoord.y >= 0.0)) && (_GLF_IDENTITY((_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, ! (! (_GLF_IDENTITY(false, ! (! (false)))))))), ! (_GLF_IDENTITY(! ((_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, ! (! (_GLF_IDENTITY(false, ! (! (false))))))))), true && (! ((_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, ! (! (_GLF_IDENTITY(false, ! (! (false))))))))))))))), true && ((_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, ! (! (false)))))))), bool(bool(_GLF_WRAPPED_IF_FALSE(false)))))
                    {
                    }
                   else
                    {
                     if(_GLF_DEAD(false))
                      continue;
                     p.y = i * 2;
                     if(_GLF_DEAD(false))
                      return;
                    }
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                    continue;
                   if(_GLF_DEAD(false))
                    continue;
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                    {
                     for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
                      {
                       discard;
                      }
                    }
                   if(_GLF_DEAD(false))
                    continue;
                   do
                    {
                     do
                      {
                       _GLF_struct_replacement_8._f2.canwalk = true;
                      }
                     while(_GLF_WRAPPED_LOOP(false));
                    }
                   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
                  }
                }
              }
            }
          }
         else
          {
          }
         map[(p.x) + (p.y) * 16] = 1;
        }
       else
        {
         int d = v % _GLF_struct_replacement_13._f0._f3.directions;
         if(_GLF_DEAD(false))
          break;
         for(int _injected_loop_counter = _GLF_IDENTITY(0, 0 | (0)); _GLF_IDENTITY(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(_injected_loop_counter < 1, bool(bvec2(_GLF_IDENTITY(_GLF_IDENTITY(_injected_loop_counter < 1, (_injected_loop_counter < 1) || false), bool(bvec3(_GLF_IDENTITY(_injected_loop_counter < 1, (_injected_loop_counter < 1) || false), true, _GLF_IDENTITY(false, ! (! (false)))))), false)))), (_GLF_WRAPPED_LOOP(_GLF_IDENTITY(_injected_loop_counter < 1, bool(bvec2(_GLF_IDENTITY(_GLF_IDENTITY(_injected_loop_counter < 1, _GLF_IDENTITY((_injected_loop_counter < 1), bool(bvec4(_GLF_IDENTITY((_injected_loop_counter < 1), ((_injected_loop_counter < 1)) && true), _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), _GLF_FALSE(false, (gl_FragCoord.x < 0.0)), true))) || false), bool(bvec3(_GLF_IDENTITY(_GLF_IDENTITY(_injected_loop_counter < 1, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) && (_GLF_IDENTITY(_injected_loop_counter < 1, (_injected_loop_counter < 1) || false))), (_injected_loop_counter < 1) || false), true, _GLF_IDENTITY(_GLF_IDENTITY(false, ! (! (_GLF_IDENTITY(false, bool(bvec4(false, false, false, false)))))), ! (_GLF_IDENTITY(! (false), bool(bvec4(! (false), false, true, false)))))))), false))))) || false); _injected_loop_counter ++)
          {
           for(int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x)); _GLF_WRAPPED_LOOP(_injected_loop_counter < _GLF_IDENTITY(1, (1) - (0 >> _GLF_IDENTITY(int(8), int(8))))); _GLF_IDENTITY(_injected_loop_counter ++, (_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0))) ? _GLF_FUZZED(-64003) : _injected_loop_counter ++)))
            {
             if(_GLF_IDENTITY(_GLF_DEAD(false), true && (_GLF_DEAD(false))))
              discard;
             if(_GLF_DEAD(false))
              {
               do
                {
                 return;
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
             v += _GLF_struct_replacement_13._f0._f3.directions;
             if(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))), _GLF_IDENTITY(bool(bvec3(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))), false, true)), (bool(bvec3(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))), false, true))) || false)))
              discard;
            }
          }
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           if(_GLF_DEAD(false))
            return;
          }
         else
          {
          }
         if(_GLF_DEAD(false))
          discard;
         if(d >= 0 && p.x > _GLF_IDENTITY(0, clamp(_GLF_IDENTITY(0, (0) << 0), _GLF_IDENTITY(_GLF_IDENTITY(0, min(0, 0)), (_GLF_IDENTITY(0, min(0, 0))) >> 0), _GLF_IDENTITY(0, (_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(v)))) >> _GLF_IDENTITY(0, (0) - 0)))) && map[(p.x - 2) + (p.y) * 16] == 0)
          {
           if(_GLF_IDENTITY(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), false || (! (false))))), (gl_FragCoord.x < 0.0))), ! (! (_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), false || (! (false))))), (gl_FragCoord.x < 0.0)))))))
            {
             if(_GLF_DEAD(false))
              discard;
            }
           else
            {
             d --;
            }
           if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, ! (! (true)))))
            {
             if(_GLF_DEAD(false))
              return;
             if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
              {
              }
             else
              {
               map[(p.x) + (p.y) * 16] = _GLF_IDENTITY(1, ~ (~ (1)));
              }
            }
           else
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
              continue;
             if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), (_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), (_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x, float(mat4(injectionSwitch.x, 1.0, 0.0, 1.0, 0.0, sqrt(0.0), 0.0, sqrt(0.0), tan(0.0), 1.0, 0.0, 1.0, _GLF_IDENTITY(1.0, 0.0 + (1.0)), 1.0, determinant(mat2(0.0, 0.0, 1.0, sqrt(0.0))), 1.0))) > injectionSwitch.y))) || false)) && _GLF_TRUE(true, (gl_FragCoord.x >= determinant(mat2(0.0, 0.0, 1.0, 0.0)))))))
              discard;
            }
           map[(p.x - 1) + (p.y) * 16] = 1;
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            break;
           if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, _GLF_IDENTITY((_GLF_IDENTITY(false, ! (! (false)))) || false, ! (! (_GLF_IDENTITY((_GLF_IDENTITY(false, ! (! (false)))) || false, ! (! ((_GLF_IDENTITY(false, ! (! (false)))) || false)))))))))
            {
            }
           else
            {
             _GLF_IDENTITY(map[(p.x - 2) + (p.y) * 16] = 1, ~ (~ (map[(p.x - 2) + (p.y) * 16] = 1)));
            }
           for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
              return;
             p.x -= 2;
             if(_GLF_DEAD(false))
              return;
            }
           if(_GLF_DEAD(false))
            break;
           if(_GLF_DEAD(false))
            return;
           if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x, (gl_FragCoord.x) / 1.0) < _GLF_IDENTITY(determinant(mat4(sqrt(0.0), 0.0, 1.0, _GLF_IDENTITY(0.0, max(0.0, 0.0)), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0)), clamp(_GLF_IDENTITY(determinant(mat4(sqrt(0.0), 0.0, 1.0, _GLF_IDENTITY(0.0, max(0.0, 0.0)), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0)), (determinant(mat4(sqrt(0.0), 0.0, 1.0, _GLF_IDENTITY(0.0, max(0.0, 0.0)), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0))) - _GLF_ZERO(0.0, injectionSwitch.x)), determinant(mat4(sqrt(0.0), 0.0, 1.0, _GLF_IDENTITY(0.0, max(0.0, 0.0)), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0)), determinant(mat4(sqrt(0.0), 0.0, 1.0, _GLF_IDENTITY(0.0, max(0.0, 0.0)), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0))))))))
            return;
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            continue;
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          continue;
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          return;
         if(_GLF_IDENTITY(d, 0 ^ (d)) >= 0 && p.y > _GLF_IDENTITY(0, max(_GLF_IDENTITY(_GLF_IDENTITY(0, (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)) ? _GLF_IDENTITY(0, ~ (~ (0))) : _GLF_FUZZED(int(-1.4)))), (_GLF_IDENTITY(0, (false ? _GLF_FUZZED(i) : _GLF_IDENTITY(0, (0) | (0))))) >> 0), _GLF_IDENTITY(_GLF_IDENTITY(0, 0 | (0)), ~ (~ (_GLF_IDENTITY(0, 0 | _GLF_IDENTITY((0), min(_GLF_IDENTITY((0), ~ (_GLF_IDENTITY(~ ((0)), (~ ((0))) ^ 0))), (0))))))))) && map[(p.x) + _GLF_IDENTITY((p.y - 2), ((p.y - 2)) ^ 0) * 16] == 0)
          {
           do
            {
             if(_GLF_DEAD(false))
              break;
             d --;
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
           if(_GLF_DEAD(false))
            break;
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            discard;
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            break;
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
            {
             map[(p.x) + (p.y) * 16] = 1;
            }
           else
            {
             if(_GLF_DEAD(false))
              {
               if(_GLF_DEAD(false))
                return;
               break;
              }
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  {
                   if(_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(true), bool(bvec4(_GLF_WRAPPED_IF_TRUE(true), _GLF_TRUE(true, (gl_FragCoord.y >= tan(0.0))), true, _GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))))
                    {
                     for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                      {
                       discard;
                      }
                    }
                   else
                    {
                    }
                  }
                }
               else
                {
                }
              }
            }
           do
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              continue;
             map[(p.x) + (p.y - 1) * 16] = 1;
             if(_GLF_DEAD(false))
              continue;
             if(_GLF_DEAD(false))
              {
               if(_GLF_DEAD(false))
                discard;
               return;
              }
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
           map[(p.x) + (p.y - 2) * 16] = 1;
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            return;
           if(_GLF_DEAD(false))
            continue;
           p.y -= 2;
           if(_GLF_DEAD(false))
            break;
          }
         if(_GLF_IDENTITY(d >= 0 && p.x < _GLF_IDENTITY(14, ~ (~ (_GLF_IDENTITY(14, _GLF_IDENTITY((14) << 0, ((14) << 0) ^ int(_GLF_ZERO(_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(4.0)), float(0.0), bool(true))), _GLF_IDENTITY(injectionSwitch.x, clamp(injectionSwitch.x, injectionSwitch.x, injectionSwitch.x))))))))), ! (_GLF_IDENTITY(_GLF_IDENTITY(! (d >= 0 && p.x < _GLF_IDENTITY(14, ~ (~ (_GLF_IDENTITY(14, (14) << 0))))), (! (_GLF_IDENTITY(d >= _GLF_IDENTITY(0, max(_GLF_IDENTITY(0, 1 * (0)), 0)), (_GLF_IDENTITY(d >= _GLF_IDENTITY(0, max(_GLF_IDENTITY(0, 1 * (0)), 0)), ! (! (d >= _GLF_IDENTITY(0, max(_GLF_IDENTITY(0, 1 * (0)), 0)))))) && true) && _GLF_IDENTITY(p.x, (p.x) - 0) < _GLF_IDENTITY(14, ~ (~ _GLF_IDENTITY((_GLF_IDENTITY(14, (14) << 0)), ((_GLF_IDENTITY(14, (14) << 0))) | ((_GLF_IDENTITY(14, (14) << 0)))))))) && true), (_GLF_IDENTITY(! (d >= 0 && _GLF_IDENTITY(p.x, min(p.x, p.x)) < _GLF_IDENTITY(14, ~ (~ (_GLF_IDENTITY(14, (14) << 0))))), ! (! (! (d >= 0 && p.x < _GLF_IDENTITY(14, ~ (~ (_GLF_IDENTITY(14, _GLF_IDENTITY((14), ~ (_GLF_IDENTITY(_GLF_IDENTITY(~ ((14)), 0 ^ (~ ((14)))), (false ? _GLF_FUZZED((i & d)) : _GLF_IDENTITY(~ ((14)), 0 ^ (~ ((14)))))))) << 0))))))))) || false))) && map[(p.x + 2) + (p.y) * 16] == 0)
          {
           for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
            {
             _GLF_IDENTITY(_GLF_IDENTITY(d --, (true ? _GLF_IDENTITY(d --, (d --) | 0) : _GLF_FUZZED(d))), int(_GLF_ONE(1.0, injectionSwitch.y)) * (d --));
            }
           map[(p.x) + (p.y) * 16] = 1;
           if(_GLF_DEAD(false))
            discard;
           if(_GLF_DEAD(false))
            continue;
           if(_GLF_DEAD(false))
            break;
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               if(_GLF_DEAD(false))
                return;
               map[(p.x + 1) + (p.y) * 16] = 1;
               if(_GLF_DEAD(false))
                break;
               if(_GLF_IDENTITY(_GLF_DEAD(false), (_GLF_DEAD(false)) && true))
                break;
              }
             else
              {
              }
            }
           else
            {
             for(int _injected_loop_counter = _GLF_IDENTITY(0, (0) | _GLF_IDENTITY(0, (0) / int(_GLF_ONE(1.0, _GLF_IDENTITY(injectionSwitch, clamp(_GLF_IDENTITY(injectionSwitch, clamp(_GLF_IDENTITY(injectionSwitch, (injectionSwitch) / vec2(1.0, 1.0)), injectionSwitch, injectionSwitch)), injectionSwitch, injectionSwitch)).y)))); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                return;
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                discard;
              }
             if(_GLF_DEAD(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (_GLF_IDENTITY(false, true && (false))), false || (! (_GLF_IDENTITY(false, true && (false)))))))))
              return;
            }
           for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))))
              break;
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              {
               if(_GLF_DEAD(false))
                return;
               break;
              }
             for(int _injected_loop_counter = int(_GLF_IDENTITY(_GLF_ONE(1.0, injectionSwitch.y), mix(float(_GLF_FUZZED(5091.7782)), float(_GLF_IDENTITY(_GLF_ONE(1.0, injectionSwitch.y), float(_GLF_IDENTITY(mat2(_GLF_IDENTITY(_GLF_ONE(1.0, injectionSwitch.y), mix(float(_GLF_ONE(1.0, injectionSwitch.y)), float(_GLF_FUZZED(-750.658)), bool(false))), 1.0, 0.0, 1.0), mat2(mat3(mat2(_GLF_IDENTITY(_GLF_ONE(1.0, injectionSwitch.y), mix(float(_GLF_ONE(1.0, injectionSwitch.y)), float(_GLF_FUZZED(-750.658)), bool(false))), 1.0, 0.0, 1.0))))))), bool(true)))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
              {
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 if(_GLF_IDENTITY(_GLF_DEAD(false), (_GLF_IDENTITY(_GLF_DEAD(false), (_GLF_IDENTITY(_GLF_DEAD(false), bool(bool(_GLF_DEAD(false))))) && _GLF_TRUE(true, (gl_FragCoord.x >= _GLF_IDENTITY(0.0, (true ? 0.0 : _GLF_FUZZED(-939.636))))))) || false))
                  {
                   if(_GLF_DEAD(false))
                    {
                     if(_GLF_DEAD(false))
                      return;
                     return;
                    }
                   do
                    {
                     discard;
                    }
                   while(_GLF_WRAPPED_LOOP(false));
                  }
                 if(_GLF_DEAD(false))
                  discard;
                 map[(p.x + 2) + (p.y) * 16] = 1;
                }
               else
                {
                }
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                return;
               if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, (gl_FragCoord) * abs(vec4(1.0, 1.0, 1.0, 1.0))), vec4(gl_FragCoord[0], gl_FragCoord[1], gl_FragCoord[2], gl_FragCoord[3])).y < 0.0))))
                discard;
              }
            }
           p.x += 2;
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(dot(vec4(1.0, 0.0, _GLF_IDENTITY(1.0, min(1.0, 1.0)), 0.0), vec4(0.0, abs(1.0), 0.0, 1.0)), dot(vec4(1.0, 0.0, 1.0, 0.0), vec4(0.0, abs(1.0), 0.0, 1.0)))))))
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < determinant(mat2(0.0, 1.0, 0.0, 0.0))))))
              discard;
             discard;
            }
          }
         do
          {
           for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
            {
             if(_GLF_DEAD(false))
              return;
             if(_GLF_IDENTITY(_GLF_IDENTITY(d >= 0 && p.y < 14, true && (d >= 0 && p.y < 14)) && _GLF_IDENTITY(map[_GLF_IDENTITY((p.x) + (p.y + 2) * 16, max(_GLF_IDENTITY((p.x) + (p.y + 2) * 16, ((p.x) + (p.y + 2) * 16) - 0), (p.x) + (p.y + 2) * _GLF_IDENTITY(16, 0 ^ (16))))], (map[(p.x) + (p.y + 2) * 16]) << (0 >> _GLF_IDENTITY(int(5), _GLF_IDENTITY(int(5), (_GLF_IDENTITY(int(5), max(int(5), int(5)))) * 1)))) == 0, bool(_GLF_IDENTITY(bool(_GLF_IDENTITY(d >= 0 && _GLF_IDENTITY(p, min(p, p)).y < _GLF_IDENTITY(14, (0 << _GLF_IDENTITY(int(8), _GLF_IDENTITY(_GLF_IDENTITY(int(8), (int(8)) >> 0), ~ (~ (int(8)))))) ^ (14)) && map[_GLF_IDENTITY((p.x) + (_GLF_IDENTITY(p.y + 2, min(p.y + 2, p.y + 2))) * 16, max((p.x) + (_GLF_IDENTITY(p.y + 2, min(p.y + 2, p.y + 2))) * 16, (p.x) + (_GLF_IDENTITY(p.y + 2, min(p.y + 2, p.y + 2))) * 16))] == 0, true && (_GLF_IDENTITY(d >= 0 && p.y < 14 && map[(p.x) + (p.y + 2) * 16] == _GLF_IDENTITY(0, max(_GLF_IDENTITY(0, ~ (_GLF_IDENTITY(~ (0), (~ (0)) << 0))), 0)), false || (d >= 0 && p.y < 14 && map[(p.x) + (p.y + 2) * 16] == _GLF_IDENTITY(0, max(_GLF_IDENTITY(0, ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(0, ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(52651)))), int(ivec4(_GLF_IDENTITY(~ (_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(52651)))), _GLF_IDENTITY(0 ^ (~ (_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(52651))))), max(_GLF_IDENTITY(0 ^ (~ (_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(52651))))), (0 ^ (~ (_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(52651)))))) << 0), 0 ^ (~ (_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(52651)))))))), 1, 1, 1)))))), (~ (0)) << 0))), 0))))))), ! (! (bool(_GLF_IDENTITY(d >= 0 && _GLF_IDENTITY(p, min(p, p)).y < _GLF_IDENTITY(14, (0 << _GLF_IDENTITY(int(8), _GLF_IDENTITY(_GLF_IDENTITY(int(8), (int(8)) >> 0), ~ (~ (int(8)))))) ^ (14)) && map[_GLF_IDENTITY((p.x) + (_GLF_IDENTITY(p.y + 2, min(p.y + 2, p.y + 2))) * 16, max((p.x) + (_GLF_IDENTITY(p.y + 2, min(p.y + 2, p.y + 2))) * 16, (p.x) + (_GLF_IDENTITY(p.y + 2, min(p.y + 2, p.y + 2))) * 16))] == 0, true && (_GLF_IDENTITY(d >= 0 && p.y < 14 && map[(p.x) + (p.y + 2) * 16] == _GLF_IDENTITY(0, max(_GLF_IDENTITY(0, ~ (_GLF_IDENTITY(~ (0), (~ (0)) << 0))), 0)), false || (d >= 0 && p.y < 14 && map[(p.x) + (p.y + 2) * 16] == _GLF_IDENTITY(0, max(_GLF_IDENTITY(0, ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(0, ~ (_GLF_IDENTITY(~ (_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(52651)))), int(ivec4(_GLF_IDENTITY(~ (_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(52651)))), _GLF_IDENTITY(0 ^ (~ (_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(52651))))), max(_GLF_IDENTITY(0 ^ (~ (_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(52651))))), (0 ^ (~ (_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(52651)))))) << 0), 0 ^ (~ (_GLF_IDENTITY(0, (true ? 0 : _GLF_FUZZED(52651)))))))), 1, 1, 1)))))), (~ (0)) << 0))), 0)))))))))))))
              {
               d --;
               if(_GLF_WRAPPED_IF_TRUE(true))
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord, mat4(1.0) * (gl_FragCoord)).y < 0.0))))
                  discard;
                 map[(p.x) + (p.y) * 16] = 1;
                }
               else
                {
                }
               if(_GLF_DEAD(false))
                discard;
               if(_GLF_DEAD(false))
                return;
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                {
                }
               else
                {
                 map[(p.x) + (p.y + 1) * 16] = 1;
                 if(_GLF_DEAD(false))
                  continue;
                }
               if(_GLF_DEAD(false))
                {
                 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                  continue;
                 return;
                 if(_GLF_DEAD(false))
                  continue;
                }
               map[(p.x) + (p.y + 2) * 16] = 1;
               if(_GLF_DEAD(false))
                discard;
               if(_GLF_DEAD(false))
                break;
               do
                {
                 for(int _injected_loop_counter = _GLF_IDENTITY(0, ~ (~ (0))); _GLF_WRAPPED_LOOP(_injected_loop_counter != ((1 << _GLF_IDENTITY(int(_GLF_IDENTITY(_GLF_IDENTITY(1, (_GLF_IDENTITY(1, int(ivec2(1, 1)))) >> 0), (1) - _GLF_IDENTITY((0 << _GLF_IDENTITY(int(3), int(3))), ((0 << _GLF_IDENTITY(int(3), int(3)))) >> 0))), _GLF_IDENTITY(int(_GLF_IDENTITY(1, _GLF_IDENTITY(int(ivec2(1, 0)), _GLF_IDENTITY((_GLF_IDENTITY(false, ! (! (false))) ? _GLF_FUZZED(-59209) : _GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(1, _GLF_IDENTITY(int(_GLF_IDENTITY(ivec3(1, 0, 1), ~ (~ (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) - ivec3(0, 0, 0)))))), 0 | (int(_GLF_IDENTITY(ivec3(1, 0, 1), ~ (~ (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, _GLF_IDENTITY(0, (0) | (0)), 1)) - ivec3(_GLF_IDENTITY(0, max(0, 0)), 0, 0))))))))), 0)), max(int(ivec2(1, 0)), int(ivec2(1, 0))))), ((false ? _GLF_FUZZED(-59209) : _GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(1, _GLF_IDENTITY(int(_GLF_IDENTITY(ivec3(1, 0, 1), ~ (~ (_GLF_IDENTITY(ivec3(1, 0, 1), _GLF_IDENTITY((_GLF_IDENTITY(ivec3(1, 0, 1), min(ivec3(1, 0, 1), _GLF_IDENTITY(ivec3(1, 0, 1), (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) | (ivec3(1, 0, 1)))) | (ivec3(1, 0, 1)))))), (_GLF_IDENTITY((_GLF_IDENTITY(ivec3(1, 0, 1), min(ivec3(1, 0, 1), _GLF_IDENTITY(ivec3(1, 0, 1), (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) | (ivec3(1, 0, 1)))) | (ivec3(1, 0, 1)))))), (_GLF_IDENTITY((_GLF_IDENTITY(ivec3(1, 0, 1), min(ivec3(1, 0, 1), _GLF_IDENTITY(ivec3(1, 0, 1), (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) | (ivec3(1, 0, 1)))) | (ivec3(1, 0, 1)))))), ~ (~ ((_GLF_IDENTITY(ivec3(1, 0, 1), min(ivec3(1, 0, 1), _GLF_IDENTITY(ivec3(1, 0, 1), (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) | (ivec3(1, 0, 1)))) | (ivec3(1, 0, 1)))))))))) | ivec3(0, 0, 0))) / ivec3(1, 1, 1)) - ivec3(0, 0, 0)))))), 0 | (int(_GLF_IDENTITY(ivec3(1, 0, 1), ~ (~ (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) - ivec3(0, 0, 0))))))))), 0)), max(int(ivec2(1, 0)), int(_GLF_IDENTITY(ivec2(1, 0), (ivec2(1, 0)) << ivec2(0, 0))))))) ^ 0)))), ~ (~ (_GLF_IDENTITY(int(_GLF_IDENTITY(1, _GLF_IDENTITY(int(ivec2(1, 0)), _GLF_IDENTITY((_GLF_IDENTITY(false, ! (! (false))) ? _GLF_FUZZED(-59209) : _GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(1, _GLF_IDENTITY(int(_GLF_IDENTITY(ivec3(1, 0, 1), ~ (~ (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) - ivec3(0, 0, 0)))))), 0 | (int(_GLF_IDENTITY(ivec3(1, 0, 1), ~ (~ (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, _GLF_IDENTITY(0, (0) | (0)), 1)) - ivec3(_GLF_IDENTITY(0, max(0, 0)), 0, 0))))))))), 0)), max(int(ivec2(1, 0)), int(ivec2(1, 0))))), ((false ? _GLF_FUZZED(-59209) : _GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(1, _GLF_IDENTITY(int(_GLF_IDENTITY(ivec3(1, 0, 1), ~ (~ (_GLF_IDENTITY(ivec3(1, 0, 1), _GLF_IDENTITY((_GLF_IDENTITY(ivec3(1, 0, 1), min(ivec3(1, 0, 1), _GLF_IDENTITY(ivec3(1, 0, 1), (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) | (ivec3(1, 0, 1)))) | (ivec3(1, 0, 1)))))), (_GLF_IDENTITY((_GLF_IDENTITY(ivec3(1, 0, 1), min(ivec3(1, 0, 1), _GLF_IDENTITY(ivec3(1, 0, 1), (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) | (ivec3(1, 0, 1)))) | (ivec3(1, 0, 1)))))), (_GLF_IDENTITY((_GLF_IDENTITY(ivec3(1, 0, 1), min(ivec3(1, 0, 1), _GLF_IDENTITY(ivec3(1, 0, 1), (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) | (ivec3(1, 0, 1)))) | (ivec3(1, 0, 1)))))), ~ (~ ((_GLF_IDENTITY(ivec3(1, 0, 1), min(ivec3(1, 0, 1), _GLF_IDENTITY(ivec3(1, 0, 1), (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) | (ivec3(1, 0, 1)))) | (ivec3(1, 0, 1)))))))))) | ivec3(0, 0, 0))) / ivec3(1, 1, 1)) - ivec3(0, 0, 0)))))), 0 | (int(_GLF_IDENTITY(ivec3(1, 0, 1), ~ (~ (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) - ivec3(0, 0, 0))))))))), 0)), max(int(ivec2(1, 0)), int(_GLF_IDENTITY(ivec2(1, 0), (ivec2(1, 0)) << ivec2(0, 0))))))) ^ 0)))), 0 ^ (int(_GLF_IDENTITY(1, _GLF_IDENTITY(int(ivec2(1, 0)), _GLF_IDENTITY((_GLF_IDENTITY(false, ! (! (false))) ? _GLF_FUZZED(-59209) : _GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(1, _GLF_IDENTITY(int(_GLF_IDENTITY(ivec3(1, 0, 1), ~ (~ (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) - ivec3(0, 0, 0)))))), 0 | (int(_GLF_IDENTITY(ivec3(1, 0, 1), ~ (~ (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, _GLF_IDENTITY(0, (0) | (0)), 1)) - ivec3(_GLF_IDENTITY(0, max(0, 0)), 0, 0))))))))), 0)), max(int(ivec2(1, 0)), int(ivec2(1, 0))))), ((false ? _GLF_FUZZED(-59209) : _GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(1, _GLF_IDENTITY(int(_GLF_IDENTITY(ivec3(1, 0, 1), ~ (~ (_GLF_IDENTITY(ivec3(1, 0, 1), _GLF_IDENTITY((_GLF_IDENTITY(ivec3(1, 0, 1), min(ivec3(1, 0, 1), _GLF_IDENTITY(ivec3(1, 0, 1), (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) | (ivec3(1, 0, 1)))) | (ivec3(1, 0, 1)))))), (_GLF_IDENTITY((_GLF_IDENTITY(ivec3(1, 0, 1), min(ivec3(1, 0, 1), _GLF_IDENTITY(ivec3(1, 0, 1), (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) | (ivec3(1, 0, 1)))) | (ivec3(1, 0, 1)))))), (_GLF_IDENTITY((_GLF_IDENTITY(ivec3(1, 0, 1), min(ivec3(1, 0, 1), _GLF_IDENTITY(ivec3(1, 0, 1), (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) | (ivec3(1, 0, 1)))) | (ivec3(1, 0, 1)))))), ~ (~ ((_GLF_IDENTITY(ivec3(1, 0, 1), min(ivec3(1, 0, 1), _GLF_IDENTITY(ivec3(1, 0, 1), (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) | (ivec3(1, 0, 1)))) | (ivec3(1, 0, 1)))))))))) | ivec3(0, 0, 0))) / ivec3(1, 1, 1)) - ivec3(0, 0, 0)))))), 0 | (int(_GLF_IDENTITY(ivec3(1, 0, 1), ~ (~ (_GLF_IDENTITY(ivec3(1, 0, 1), (ivec3(1, 0, 1)) - ivec3(0, 0, 0))))))))), 0)), max(int(ivec2(1, 0)), int(_GLF_IDENTITY(ivec2(1, 0), (ivec2(1, 0)) << ivec2(0, 0))))))) ^ 0))))))))))) >> _GLF_IDENTITY(_GLF_IDENTITY(int(1), _GLF_IDENTITY(int(1), clamp(int(1), int(1), int(1)))), ~ (~ (_GLF_IDENTITY(int(1), _GLF_IDENTITY(int(1), clamp(int(1), int(1), int(1))))))))); _injected_loop_counter ++)
                  {
                   p.y += 2;
                   if(_GLF_DEAD(false))
                    return;
                  }
                }
               while(_GLF_WRAPPED_LOOP(false));
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              continue;
            }
           for(int _injected_loop_counter = (1 & 1); _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
            {
             do
              {
               if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), true && (_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), (_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), false || (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))) || false)))))
                return;
               if(_GLF_DEAD(false))
                {
                 do
                  {
                   discard;
                  }
                 while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), false || (_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))));
                }
               if(_GLF_DEAD(false))
                return;
              }
             while(_GLF_WRAPPED_LOOP(false));
            }
           if(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))), ! (! (_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)))))))
            continue;
           if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), (_GLF_FALSE(false, (gl_FragCoord.y < 0.0))) || false)))
            continue;
           for(int _injected_loop_counter = 0; _GLF_IDENTITY(_GLF_WRAPPED_LOOP(_injected_loop_counter < 1), ! (! (_GLF_WRAPPED_LOOP(_injected_loop_counter < 1)))); _injected_loop_counter ++)
            {
             if(_GLF_DEAD(_GLF_FALSE(_GLF_IDENTITY(false, (false) && true), _GLF_IDENTITY((gl_FragCoord.x < 0.0), true && (_GLF_IDENTITY((gl_FragCoord.x < 0.0), false || ((gl_FragCoord.x < 0.0))))))))
              discard;
            }
          }
         while(_GLF_WRAPPED_LOOP(false));
        }
       if(_GLF_DEAD(false))
        break;
       if(map[ipos.y * 16 + ipos.x] == 1)
        {
         for(int _injected_loop_counter = _GLF_IDENTITY(_GLF_IDENTITY(0, ~ (~ (0))), max(_GLF_IDENTITY(_GLF_IDENTITY(0, ~ (~ (0))), (_GLF_IDENTITY(0, ~ (~ (0)))) | (_GLF_IDENTITY(0, ~ (~ _GLF_IDENTITY((0), ~ (_GLF_IDENTITY(~ ((0)), 0 ^ (~ ((0)))))))))), _GLF_IDENTITY(0, ~ (~ (0))))); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
          {
           _GLF_color = _GLF_outlined_4();
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            continue;
          }
         do
          {
           if(_GLF_DEAD(_GLF_IDENTITY(false, _GLF_TRUE(true, (gl_FragCoord.x >= 0.0)) && (false))))
            discard;
          }
         while(_GLF_WRAPPED_LOOP(false));
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(dot(vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 0.0, 0.0, 0.0)), dot(_GLF_IDENTITY(vec4(0.0, 1.0, 1.0, 1.0), (_GLF_IDENTITY(vec4(0.0, 1.0, 1.0, 1.0), min(_GLF_IDENTITY(vec4(0.0, 1.0, 1.0, 1.0), max(vec4(0.0, 1.0, 1.0, 1.0), vec4(0.0, 1.0, 1.0, 1.0))), vec4(0.0, 1.0, 1.0, 1.0)))) - vec4(0.0, 0.0, 0.0, 0.0)), vec4(1.0, 0.0, 0.0, 0.0)))))))
          break;
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          continue;
         if(_GLF_DEAD(false))
          break;
         if(_GLF_DEAD(false))
          continue;
         do
          {
           if(_GLF_DEAD(false))
            break;
           if(_GLF_DEAD(false))
            break;
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
            continue;
           for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < (1 | 1)); _injected_loop_counter ++)
            {
             return;
            }
          }
         while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, bool(_GLF_IDENTITY(bool(_GLF_IDENTITY(false, ! (! (false)))), (bool(_GLF_IDENTITY(_GLF_IDENTITY(false, (false) && true), ! (! (false))))) || false)))));
        }
       if(_GLF_DEAD(false))
        continue;
       if(_GLF_DEAD(false))
        continue;
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, min(_GLF_IDENTITY(injectionSwitch.y, clamp(injectionSwitch.y, injectionSwitch.y, injectionSwitch.y)), injectionSwitch.y))))))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          discard;
         break;
        }
      }
     while(_GLF_struct_replacement_8._f2.canwalk);
    }
   else
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(271.851)), float(0.0), bool(true)))))))
      return;
     if(_GLF_DEAD(false))
      return;
    }
  }
 else
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return;
  }
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
  }
 else
  {
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     do
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch, (injectionSwitch) + vec2(0.0, 0.0)).x > _GLF_IDENTITY(injectionSwitch.y, mix(float(injectionSwitch.y), float(_GLF_FUZZED(-62.39)), bool(false)))))))
        return;
      }
     while(_GLF_IDENTITY(_GLF_WRAPPED_LOOP(false), (_GLF_WRAPPED_LOOP(false)) || false));
     if(_GLF_DEAD(false))
      return;
    }
   else
    {
    }
  }
 for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
  {
   if(_GLF_DEAD(false))
    {
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       return;
      }
     else
      {
       if(_GLF_DEAD(false))
        return;
       if(_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > injectionSwitch.y), (_GLF_IDENTITY((injectionSwitch.x > injectionSwitch.y), ((injectionSwitch.x > injectionSwitch.y)) || false)) || false))))
        break;
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      return;
    }
   if(_GLF_DEAD(false))
    discard;
  }
 _GLF_color = _GLF_outlined_5();
 if(_GLF_DEAD(false))
  return;
}
