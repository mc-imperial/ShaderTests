; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 123
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
               OpName %21 "a"
               OpName %24 "buf0"
               OpMemberName %24 0 "_GLF_uniform_int_values"
               OpName %26 ""
               OpName %30 "b"
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
               OpStore %11 %12
               OpStore %17 %19
         %95 = OpFunctionCall %6 %8
         %96 = OpAccessChain %27 %26 %12 %18
         %97 = OpLoad %6 %96
         %98 = OpIEqual %64 %95 %97
               OpSelectionMerge %100 None
               OpBranchConditional %98 %99 %118
         %99 = OpLabel
        %105 = OpAccessChain %27 %26 %12 %12
        %106 = OpLoad %6 %105
        %107 = OpConvertSToF %101 %106
        %108 = OpAccessChain %27 %26 %12 %18
        %109 = OpLoad %6 %108
        %110 = OpConvertSToF %101 %109
        %111 = OpAccessChain %27 %26 %12 %18
        %112 = OpLoad %6 %111
        %113 = OpConvertSToF %101 %112
        %114 = OpAccessChain %27 %26 %12 %12
        %115 = OpLoad %6 %114
        %116 = OpConvertSToF %101 %115
        %117 = OpCompositeConstruct %102 %107 %110 %113 %116
               OpStore %104 %117
               OpBranch %100
        %118 = OpLabel
        %119 = OpAccessChain %27 %26 %12 %18
        %120 = OpLoad %6 %119
        %121 = OpConvertSToF %101 %120
        %122 = OpCompositeConstruct %102 %121 %121 %121 %121
               OpStore %104 %122
               OpBranch %100
        %100 = OpLabel
               OpReturn
               OpFunctionEnd
          %8 = OpFunction %6 None %7
          %9 = OpLabel
         %21 = OpVariable %20 Function
         %30 = OpVariable %20 Function
         %34 = OpVariable %33 Function
         %28 = OpAccessChain %27 %26 %12 %12
         %29 = OpLoad %6 %28
               OpStore %21 %29
         %31 = OpAccessChain %27 %26 %12 %18
         %32 = OpLoad %6 %31
               OpStore %30 %32
         %35 = OpAccessChain %27 %26 %12 %12
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %27 %26 %12 %12
         %38 = OpLoad %6 %37
         %39 = OpAccessChain %27 %26 %12 %12
         %40 = OpLoad %6 %39
         %41 = OpAccessChain %27 %26 %12 %12
         %42 = OpLoad %6 %41
         %43 = OpAccessChain %27 %26 %12 %12
         %44 = OpLoad %6 %43
         %45 = OpAccessChain %27 %26 %12 %12
         %46 = OpLoad %6 %45
         %47 = OpAccessChain %27 %26 %12 %12
         %48 = OpLoad %6 %47
         %49 = OpAccessChain %27 %26 %12 %12
         %50 = OpLoad %6 %49
         %51 = OpAccessChain %27 %26 %12 %12
         %52 = OpLoad %6 %51
         %53 = OpAccessChain %27 %26 %12 %12
         %54 = OpLoad %6 %53
         %55 = OpCompositeConstruct %15 %36 %38 %40 %42 %44 %46 %48 %50 %52 %54
               OpStore %34 %55
               OpBranch %56
         %56 = OpLabel
               OpLoopMerge %58 %59 None
               OpBranch %60
         %60 = OpLabel
         %61 = OpLoad %6 %30
         %62 = OpAccessChain %27 %26 %12 %18
         %63 = OpLoad %6 %62
         %65 = OpSGreaterThanEqual %64 %61 %63
         %66 = OpLoad %6 %11
         %68 = OpSLessThan %64 %66 %67
         %69 = OpLogicalAnd %64 %65 %68
               OpBranchConditional %69 %57 %58
         %57 = OpLabel
         %70 = OpLoad %6 %11
         %71 = OpIAdd %6 %70 %18
               OpStore %11 %71
         %72 = OpLoad %6 %30
         %73 = OpISub %6 %72 %18
               OpStore %30 %73
         %74 = OpAccessChain %20 %34 %72
         %75 = OpLoad %6 %74
               OpStore %21 %75
         %76 = OpAccessChain %27 %26 %12 %12
         %77 = OpLoad %6 %76
         %78 = OpLoad %6 %21
         %79 = OpAccessChain %10 %17 %78
         %80 = OpLoad %6 %79
         %81 = OpAccessChain %10 %17 %77
               OpStore %81 %80
         %82 = OpLoad %6 %21
         %83 = OpAccessChain %27 %26 %12 %18
         %84 = OpLoad %6 %83
         %85 = OpSGreaterThan %64 %82 %84
               OpSelectionMerge %87 None
               OpBranchConditional %85 %86 %87
         %86 = OpLabel
         %88 = OpLoad %6 %30
         %89 = OpIAdd %6 %88 %18
               OpStore %30 %89
         %90 = OpLoad %6 %21
         %91 = OpAccessChain %20 %34 %89
               OpStore %91 %90
               OpBranch %87
         %87 = OpLabel
               OpBranch %59
         %59 = OpLabel
               OpBranch %56
         %58 = OpLabel
         %92 = OpLoad %6 %30
               OpReturnValue %92
               OpFunctionEnd
