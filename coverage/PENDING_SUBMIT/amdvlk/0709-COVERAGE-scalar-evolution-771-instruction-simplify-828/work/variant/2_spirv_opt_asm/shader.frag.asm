; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 214
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %145
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "data0"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %50 "data1"
               OpName %145 "_GLF_color"
               OpName %159 "ref"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %145 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 10
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 20
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpConstant %6 2
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %6 1
         %25 = OpConstant %6 3
         %28 = OpConstant %6 4
         %31 = OpConstant %6 5
         %34 = OpConstant %6 6
         %37 = OpConstant %6 7
         %40 = OpConstant %6 8
         %43 = OpConstant %6 9
         %46 = OpConstant %6 10
         %53 = OpConstant %6 11
         %56 = OpConstant %6 12
         %59 = OpConstant %6 13
         %62 = OpConstant %6 14
         %65 = OpConstant %6 15
         %68 = OpConstant %6 16
         %71 = OpConstant %6 17
         %74 = OpConstant %6 18
         %77 = OpConstant %6 19
         %85 = OpTypePointer Function %6
        %100 = OpTypeBool
        %142 = OpTypeFloat 32
        %143 = OpTypeVector %142 4
        %144 = OpTypePointer Output %143
        %145 = OpVariable %144 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %50 = OpVariable %10 Function
        %159 = OpVariable %10 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %6 %20
         %23 = OpAccessChain %19 %16 %17 %22
         %24 = OpLoad %6 %23
         %26 = OpAccessChain %19 %16 %17 %25
         %27 = OpLoad %6 %26
         %29 = OpAccessChain %19 %16 %17 %28
         %30 = OpLoad %6 %29
         %32 = OpAccessChain %19 %16 %17 %31
         %33 = OpLoad %6 %32
         %35 = OpAccessChain %19 %16 %17 %34
         %36 = OpLoad %6 %35
         %38 = OpAccessChain %19 %16 %17 %37
         %39 = OpLoad %6 %38
         %41 = OpAccessChain %19 %16 %17 %40
         %42 = OpLoad %6 %41
         %44 = OpAccessChain %19 %16 %17 %43
         %45 = OpLoad %6 %44
         %47 = OpAccessChain %19 %16 %17 %46
         %48 = OpLoad %6 %47
         %49 = OpCompositeConstruct %9 %21 %24 %27 %30 %33 %36 %39 %42 %45 %48
               OpStore %11 %49
         %51 = OpAccessChain %19 %16 %17 %17
         %52 = OpLoad %6 %51
         %54 = OpAccessChain %19 %16 %17 %53
         %55 = OpLoad %6 %54
         %57 = OpAccessChain %19 %16 %17 %56
         %58 = OpLoad %6 %57
         %60 = OpAccessChain %19 %16 %17 %59
         %61 = OpLoad %6 %60
         %63 = OpAccessChain %19 %16 %17 %62
         %64 = OpLoad %6 %63
         %66 = OpAccessChain %19 %16 %17 %65
         %67 = OpLoad %6 %66
         %69 = OpAccessChain %19 %16 %17 %68
         %70 = OpLoad %6 %69
         %72 = OpAccessChain %19 %16 %17 %71
         %73 = OpLoad %6 %72
         %75 = OpAccessChain %19 %16 %17 %74
         %76 = OpLoad %6 %75
         %78 = OpAccessChain %19 %16 %17 %77
         %79 = OpLoad %6 %78
         %80 = OpCompositeConstruct %9 %52 %55 %58 %61 %64 %67 %70 %73 %76 %79
               OpStore %50 %80
         %86 = OpAccessChain %85 %11 %24
         %87 = OpLoad %6 %86
         %88 = OpAccessChain %85 %50 %24
               OpStore %88 %87
               OpBranch %92
         %92 = OpLabel
        %208 = OpPhi %6 %27 %5 %141 %95
        %101 = OpSLessThan %100 %208 %52
               OpLoopMerge %94 %95 None
               OpBranchConditional %101 %93 %94
         %93 = OpLabel
               OpBranch %105
        %105 = OpLabel
        %211 = OpPhi %6 %24 %93 %137 %108
        %113 = OpSLessThan %100 %211 %52
               OpLoopMerge %107 %108 None
               OpBranchConditional %113 %106 %107
        %106 = OpLabel
               OpBranch %116
        %116 = OpLabel
        %213 = OpPhi %6 %211 %106 %131 %117
        %123 = OpExtInst %6 %1 SMin %211 %31
        %124 = OpSLessThanEqual %100 %213 %123
               OpLoopMerge %118 %117 None
               OpBranchConditional %124 %117 %118
        %117 = OpLabel
        %127 = OpAccessChain %85 %50 %213
        %128 = OpLoad %6 %127
        %129 = OpAccessChain %85 %11 %213
               OpStore %129 %128
        %131 = OpIAdd %6 %213 %22
               OpBranch %116
        %118 = OpLabel
               OpBranch %108
        %108 = OpLabel
        %135 = OpSDiv %6 %208 %27
        %137 = OpIAdd %6 %211 %135
               OpBranch %105
        %107 = OpLabel
               OpBranch %95
         %95 = OpLabel
        %141 = OpIAdd %6 %208 %27
               OpBranch %92
         %94 = OpLabel
        %148 = OpConvertSToF %142 %24
        %151 = OpConvertSToF %142 %21
        %158 = OpCompositeConstruct %143 %148 %151 %151 %148
               OpStore %145 %158
        %180 = OpCompositeConstruct %9 %21 %24 %58 %61 %64 %67 %39 %42 %45 %48
               OpStore %159 %180
               OpBranch %184
        %184 = OpLabel
        %209 = OpPhi %6 %21 %94 %207 %187
        %192 = OpSLessThan %100 %209 %52
               OpLoopMerge %186 %187 None
               OpBranchConditional %192 %185 %186
        %185 = OpLabel
        %194 = OpAccessChain %85 %11 %209
        %195 = OpLoad %6 %194
        %197 = OpAccessChain %85 %159 %209
        %198 = OpLoad %6 %197
        %199 = OpINotEqual %100 %195 %198
               OpSelectionMerge %201 None
               OpBranchConditional %199 %200 %201
        %200 = OpLabel
        %205 = OpCompositeConstruct %143 %151 %151 %151 %151
               OpStore %145 %205
               OpBranch %201
        %201 = OpLabel
               OpBranch %187
        %187 = OpLabel
        %207 = OpIAdd %6 %209 %22
               OpBranch %184
        %186 = OpLabel
               OpReturn
               OpFunctionEnd
