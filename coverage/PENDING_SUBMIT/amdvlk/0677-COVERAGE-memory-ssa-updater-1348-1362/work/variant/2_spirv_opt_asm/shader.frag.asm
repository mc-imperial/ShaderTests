; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 157
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %104
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "func("
               OpName %11 "_GLF_global_loop_count"
               OpName %17 "arr0"
               OpName %24 "buf0"
               OpMemberName %24 0 "_GLF_uniform_int_values"
               OpName %26 ""
               OpName %34 "arr1"
               OpName %104 "_GLF_color"
               OpDecorate %23 ArrayStride 16
               OpMemberDecorate %24 0 Offset 0
               OpDecorate %24 Block
               OpDecorate %26 DescriptorSet 0
               OpDecorate %26 Binding 0
               OpDecorate %104 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeFunction %6
         %10 = OpTypePointer Private %6
         %11 = OpVariable %10 Private
         %12 = OpConstant %6 0
         %13 = OpTypeInt 32 0
         %14 = OpConstant %13 10
         %15 = OpTypeArray %6 %14
         %16 = OpTypePointer Private %15
         %17 = OpVariable %16 Private
         %18 = OpConstant %6 1
         %19 = OpConstantComposite %15 %18 %18 %18 %18 %18 %18 %18 %18 %18 %18
         %20 = OpTypePointer Function %6
         %22 = OpConstant %13 2
         %23 = OpTypeArray %6 %22
         %24 = OpTypeStruct %23
         %25 = OpTypePointer Uniform %24
         %26 = OpVariable %25 Uniform
         %27 = OpTypePointer Uniform %6
         %33 = OpTypePointer Function %15
         %64 = OpTypeBool
         %67 = OpConstant %6 10
        %101 = OpTypeFloat 32
        %102 = OpTypeVector %101 4
        %103 = OpTypePointer Output %102
        %104 = OpVariable %103 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
        %125 = OpVariable %33 Function
        %126 = OpVariable %20 Function
               OpStore %11 %12
               OpStore %17 %19
        %128 = OpAccessChain %27 %26 %12 %12
        %129 = OpLoad %6 %128
        %130 = OpAccessChain %27 %26 %12 %18
        %131 = OpLoad %6 %130
        %132 = OpCompositeConstruct %15 %129 %129 %129 %129 %129 %129 %129 %129 %129 %129
               OpStore %125 %132
               OpBranch %133
        %133 = OpLabel
        %134 = OpPhi %6 %131 %5 %154 %155
        %136 = OpSGreaterThanEqual %64 %134 %131
        %137 = OpLoad %6 %11
        %138 = OpSLessThan %64 %137 %67
        %139 = OpLogicalAnd %64 %136 %138
               OpLoopMerge %156 %155 None
               OpBranchConditional %139 %140 %156
        %140 = OpLabel
        %141 = OpLoad %6 %11
        %142 = OpIAdd %6 %141 %18
               OpStore %11 %142
        %143 = OpISub %6 %134 %18
        %144 = OpAccessChain %20 %125 %134
        %145 = OpLoad %6 %144
        %146 = OpAccessChain %10 %17 %145
        %147 = OpLoad %6 %146
        %148 = OpAccessChain %10 %17 %129
               OpStore %148 %147
        %149 = OpSGreaterThan %64 %145 %131
               OpSelectionMerge %153 None
               OpBranchConditional %149 %150 %153
        %150 = OpLabel
        %151 = OpIAdd %6 %143 %18
        %152 = OpAccessChain %20 %125 %151
               OpStore %152 %145
               OpBranch %153
        %153 = OpLabel
        %154 = OpPhi %6 %143 %140 %151 %150
               OpBranch %155
        %155 = OpLabel
               OpBranch %133
        %156 = OpLabel
               OpStore %126 %134
         %95 = OpLoad %6 %126
         %96 = OpAccessChain %27 %26 %12 %18
         %97 = OpLoad %6 %96
         %98 = OpIEqual %64 %95 %97
               OpSelectionMerge %100 None
               OpBranchConditional %98 %99 %118
         %99 = OpLabel
        %105 = OpAccessChain %27 %26 %12 %12
        %106 = OpLoad %6 %105
        %107 = OpConvertSToF %101 %106
        %110 = OpConvertSToF %101 %97
        %117 = OpCompositeConstruct %102 %107 %110 %110 %107
               OpStore %104 %117
               OpBranch %100
        %118 = OpLabel
        %121 = OpConvertSToF %101 %97
        %122 = OpCompositeConstruct %102 %121 %121 %121 %121
               OpStore %104 %122
               OpBranch %100
        %100 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %34 = OpVariable %33 Function
         %28 = OpAccessChain %27 %26 %12 %12
         %29 = OpLoad %6 %28
         %31 = OpAccessChain %27 %26 %12 %18
         %32 = OpLoad %6 %31
         %55 = OpCompositeConstruct %15 %29 %29 %29 %29 %29 %29 %29 %29 %29 %29
               OpStore %34 %55
               OpBranch %56
         %56 = OpLabel
        %123 = OpPhi %6 %32 %9 %124 %59
               OpLoopMerge %58 %59 None
               OpBranch %60
         %60 = OpLabel
         %65 = OpSGreaterThanEqual %64 %123 %32
         %66 = OpLoad %6 %11
         %68 = OpSLessThan %64 %66 %67
         %69 = OpLogicalAnd %64 %65 %68
               OpBranchConditional %69 %57 %58
         %57 = OpLabel
         %70 = OpLoad %6 %11
         %71 = OpIAdd %6 %70 %18
               OpStore %11 %71
         %73 = OpISub %6 %123 %18
         %74 = OpAccessChain %20 %34 %123
         %75 = OpLoad %6 %74
         %79 = OpAccessChain %10 %17 %75
         %80 = OpLoad %6 %79
         %81 = OpAccessChain %10 %17 %29
               OpStore %81 %80
         %85 = OpSGreaterThan %64 %75 %32
               OpSelectionMerge %87 None
               OpBranchConditional %85 %86 %87
         %86 = OpLabel
         %89 = OpIAdd %6 %73 %18
         %91 = OpAccessChain %20 %34 %89
               OpStore %91 %75
               OpBranch %87
         %87 = OpLabel
        %124 = OpPhi %6 %73 %57 %89 %86
               OpBranch %59
         %59 = OpLabel
               OpBranch %56
         %58 = OpLabel
               OpReturnValue %123
               OpFunctionEnd
