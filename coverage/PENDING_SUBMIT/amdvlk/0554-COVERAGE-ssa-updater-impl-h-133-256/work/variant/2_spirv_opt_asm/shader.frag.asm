; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 171
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %43 %48
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "func(f1;"
               OpName %9 "x"
               OpName %14 "_GLF_global_loop_count"
               OpName %16 "f"
               OpName %33 "buf0"
               OpMemberName %33 0 "_GLF_uniform_float_values"
               OpName %35 ""
               OpName %43 "_GLF_color"
               OpName %48 "gl_FragCoord"
               OpName %87 "v"
               OpName %91 "param"
               OpDecorate %32 ArrayStride 16
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 0
               OpDecorate %43 Location 0
               OpDecorate %48 BuiltIn FragCoord
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %6 %7
         %12 = OpTypeInt 32 1
         %13 = OpTypePointer Private %12
         %14 = OpVariable %13 Private
         %15 = OpConstant %12 0
         %17 = OpConstant %6 1
         %24 = OpConstant %12 10
         %25 = OpTypeBool
         %28 = OpConstant %12 1
         %30 = OpTypeInt 32 0
         %31 = OpConstant %30 2
         %32 = OpTypeArray %6 %31
         %33 = OpTypeStruct %32
         %34 = OpTypePointer Uniform %33
         %35 = OpVariable %34 Uniform
         %36 = OpTypePointer Uniform %6
         %41 = OpTypeVector %6 4
         %42 = OpTypePointer Output %41
         %43 = OpVariable %42 Output
         %47 = OpTypePointer Input %41
         %48 = OpVariable %47 Input
         %49 = OpConstant %30 0
         %50 = OpTypePointer Input %6
         %74 = OpConstant %6 0.100000001
         %79 = OpConstant %30 1
         %86 = OpTypePointer Function %41
        %100 = OpConstant %6 0
        %112 = OpConstantFalse %25
        %113 = OpTypePointer Function %25
        %115 = OpConstantTrue %25
        %132 = OpUndef %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %134 = OpVariable %113 Function %112
        %135 = OpVariable %7 Function
        %136 = OpVariable %7 Function
        %137 = OpVariable %7 Function
         %87 = OpVariable %86 Function
         %91 = OpVariable %7 Function
               OpSelectionMerge %110 None
               OpSwitch %49 %111
        %111 = OpLabel
               OpStore %14 %15
         %72 = OpAccessChain %50 %48 %49
         %73 = OpLoad %6 %72
         %75 = OpFOrdLessThan %25 %73 %74
               OpSelectionMerge %77 None
               OpBranchConditional %75 %76 %77
         %76 = OpLabel
               OpBranch %110
         %77 = OpLabel
         %80 = OpAccessChain %50 %48 %79
         %81 = OpLoad %6 %80
         %82 = OpFOrdLessThan %25 %81 %74
               OpSelectionMerge %84 None
               OpBranchConditional %82 %83 %84
         %83 = OpLabel
               OpBranch %110
         %84 = OpLabel
         %88 = OpAccessChain %36 %35 %15 %28
         %89 = OpLoad %6 %88
         %90 = OpCompositeConstruct %41 %89 %89 %89 %89
               OpStore %87 %90
               OpStore %91 %81
               OpStore %134 %112
               OpSelectionMerge %169 None
               OpSwitch %49 %139
        %139 = OpLabel
               OpStore %136 %17
               OpBranch %140
        %140 = OpLabel
        %141 = OpPhi %6 %17 %139 %149 %163
        %142 = OpLoad %12 %14
        %143 = OpSLessThan %25 %142 %24
               OpLoopMerge %164 %163 None
               OpBranchConditional %143 %144 %164
        %144 = OpLabel
        %145 = OpLoad %12 %14
        %146 = OpIAdd %12 %145 %28
               OpStore %14 %146
        %147 = OpAccessChain %36 %35 %15 %15
        %148 = OpLoad %6 %147
        %149 = OpFAdd %6 %141 %148
               OpStore %136 %149
        %150 = OpAccessChain %36 %35 %15 %28
        %151 = OpLoad %6 %150
        %152 = OpCompositeConstruct %41 %151 %151 %151 %151
               OpStore %43 %152
        %153 = OpAccessChain %50 %48 %49
        %154 = OpLoad %6 %153
        %155 = OpFOrdGreaterThanEqual %25 %154 %151
               OpSelectionMerge %158 None
               OpBranchConditional %155 %156 %158
        %156 = OpLabel
        %157 = OpCompositeConstruct %41 %148 %148 %148 %148
               OpStore %43 %157
               OpBranch %158
        %158 = OpLabel
        %160 = OpFOrdLessThan %25 %81 %151
               OpSelectionMerge %162 None
               OpBranchConditional %160 %161 %162
        %161 = OpLabel
               OpStore %134 %115
               OpStore %135 %149
               OpBranch %164
        %162 = OpLabel
               OpBranch %163
        %163 = OpLabel
               OpBranch %140
        %164 = OpLabel
        %165 = OpPhi %6 %132 %140 %149 %161
        %166 = OpPhi %6 %141 %140 %149 %161
        %167 = OpPhi %25 %112 %140 %115 %161
               OpSelectionMerge %168 None
               OpBranchConditional %167 %169 %168
        %168 = OpLabel
               OpStore %134 %115
               OpStore %135 %166
               OpBranch %169
        %169 = OpLabel
        %170 = OpPhi %6 %165 %164 %166 %168
               OpStore %137 %170
        %107 = OpCompositeInsert %41 %170 %90 3
        %109 = OpCompositeInsert %41 %170 %107 0
               OpStore %87 %109
        %101 = OpFOrdLessThan %25 %73 %100
               OpSelectionMerge %103 None
               OpBranchConditional %101 %102 %103
        %102 = OpLabel
               OpBranch %110
        %103 = OpLabel
               OpStore %43 %109
               OpBranch %110
        %110 = OpLabel
               OpReturn
               OpFunctionEnd
         %10 = OpFunction %6 None %8
          %9 = OpFunctionParameter %7
         %11 = OpLabel
        %120 = OpVariable %113 Function %112
        %117 = OpVariable %7 Function
         %16 = OpVariable %7 Function
               OpSelectionMerge %116 None
               OpSwitch %49 %119
        %119 = OpLabel
               OpStore %16 %17
               OpBranch %18
         %18 = OpLabel
        %123 = OpPhi %6 %17 %119 %40 %21
         %23 = OpLoad %12 %14
         %26 = OpSLessThan %25 %23 %24
               OpLoopMerge %20 %21 None
               OpBranchConditional %26 %19 %20
         %19 = OpLabel
         %27 = OpLoad %12 %14
         %29 = OpIAdd %12 %27 %28
               OpStore %14 %29
         %37 = OpAccessChain %36 %35 %15 %15
         %38 = OpLoad %6 %37
         %40 = OpFAdd %6 %123 %38
               OpStore %16 %40
         %44 = OpAccessChain %36 %35 %15 %28
         %45 = OpLoad %6 %44
         %46 = OpCompositeConstruct %41 %45 %45 %45 %45
               OpStore %43 %46
         %51 = OpAccessChain %50 %48 %49
         %52 = OpLoad %6 %51
         %55 = OpFOrdGreaterThanEqual %25 %52 %45
               OpSelectionMerge %57 None
               OpBranchConditional %55 %56 %57
         %56 = OpLabel
         %60 = OpCompositeConstruct %41 %38 %38 %38 %38
               OpStore %43 %60
               OpBranch %57
         %57 = OpLabel
         %61 = OpLoad %6 %9
         %64 = OpFOrdLessThan %25 %61 %45
               OpSelectionMerge %66 None
               OpBranchConditional %64 %65 %66
         %65 = OpLabel
               OpStore %120 %115
               OpStore %117 %40
               OpBranch %20
         %66 = OpLabel
               OpBranch %21
         %21 = OpLabel
               OpBranch %18
         %20 = OpLabel
        %130 = OpPhi %6 %132 %18 %40 %65
        %128 = OpPhi %6 %123 %18 %40 %65
        %125 = OpPhi %25 %112 %18 %115 %65
               OpSelectionMerge %121 None
               OpBranchConditional %125 %116 %121
        %121 = OpLabel
               OpStore %120 %115
               OpStore %117 %128
               OpBranch %116
        %116 = OpLabel
        %129 = OpPhi %6 %130 %20 %128 %121
               OpReturnValue %129
               OpFunctionEnd
