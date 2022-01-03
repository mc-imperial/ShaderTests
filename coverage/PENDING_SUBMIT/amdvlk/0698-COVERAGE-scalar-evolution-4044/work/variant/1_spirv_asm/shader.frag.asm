; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 101
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %82
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "func("
               OpName %12 "v"
               OpName %13 "buf1"
               OpMemberName %13 0 "zero"
               OpName %15 ""
               OpName %23 "i"
               OpName %39 "buf0"
               OpMemberName %39 0 "_GLF_uniform_int_values"
               OpName %41 ""
               OpName %82 "_GLF_color"
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 1
               OpDecorate %38 ArrayStride 16
               OpMemberDecorate %39 0 Offset 0
               OpDecorate %39 Block
               OpDecorate %41 DescriptorSet 0
               OpDecorate %41 Binding 0
               OpDecorate %82 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeVector %6 2
          %8 = OpTypeFunction %7
         %11 = OpTypePointer Function %7
         %13 = OpTypeStruct %6
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpConstant %6 0
         %17 = OpTypePointer Uniform %6
         %20 = OpConstant %6 2
         %22 = OpTypePointer Function %6
         %30 = OpConstant %6 3
         %31 = OpTypeBool
         %33 = OpTypeInt 32 0
         %34 = OpConstant %33 0
         %37 = OpConstant %33 2
         %38 = OpTypeArray %6 %37
         %39 = OpTypeStruct %38
         %40 = OpTypePointer Uniform %39
         %41 = OpVariable %40 Uniform
         %47 = OpConstant %33 1
         %50 = OpConstant %6 1
         %73 = OpConstantComposite %7 %50 %16
         %74 = OpTypeVector %31 2
         %79 = OpTypeFloat 32
         %80 = OpTypeVector %79 4
         %81 = OpTypePointer Output %80
         %82 = OpVariable %81 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %72 = OpFunctionCall %7 %9
         %75 = OpIEqual %74 %72 %73
         %76 = OpAll %31 %75
               OpSelectionMerge %78 None
               OpBranchConditional %76 %77 %96
         %77 = OpLabel
         %83 = OpAccessChain %17 %41 %16 %50
         %84 = OpLoad %6 %83
         %85 = OpConvertSToF %79 %84
         %86 = OpAccessChain %17 %41 %16 %16
         %87 = OpLoad %6 %86
         %88 = OpConvertSToF %79 %87
         %89 = OpAccessChain %17 %41 %16 %16
         %90 = OpLoad %6 %89
         %91 = OpConvertSToF %79 %90
         %92 = OpAccessChain %17 %41 %16 %50
         %93 = OpLoad %6 %92
         %94 = OpConvertSToF %79 %93
         %95 = OpCompositeConstruct %80 %85 %88 %91 %94
               OpStore %82 %95
               OpBranch %78
         %96 = OpLabel
         %97 = OpAccessChain %17 %41 %16 %16
         %98 = OpLoad %6 %97
         %99 = OpConvertSToF %79 %98
        %100 = OpCompositeConstruct %80 %99 %99 %99 %99
               OpStore %82 %100
               OpBranch %78
         %78 = OpLabel
               OpReturn
               OpFunctionEnd
          %9 = OpFunction %7 None %8
         %10 = OpLabel
         %12 = OpVariable %11 Function
         %23 = OpVariable %22 Function
         %18 = OpAccessChain %17 %15 %16
         %19 = OpLoad %6 %18
         %21 = OpCompositeConstruct %7 %19 %20
               OpStore %12 %21
               OpStore %23 %16
               OpBranch %24
         %24 = OpLabel
               OpLoopMerge %26 %27 None
               OpBranch %28
         %28 = OpLabel
         %29 = OpLoad %6 %23
         %32 = OpSLessThan %31 %29 %30
               OpBranchConditional %32 %25 %26
         %25 = OpLabel
         %35 = OpAccessChain %22 %12 %34
         %36 = OpLoad %6 %35
         %42 = OpAccessChain %17 %41 %16 %16
         %43 = OpLoad %6 %42
         %44 = OpSGreaterThan %31 %36 %43
               OpSelectionMerge %46 None
               OpBranchConditional %44 %45 %46
         %45 = OpLabel
         %48 = OpAccessChain %22 %12 %47
         %49 = OpLoad %6 %48
         %51 = OpISub %6 %49 %50
               OpStore %48 %51
               OpBranch %46
         %46 = OpLabel
         %52 = OpAccessChain %22 %12 %47
         %53 = OpLoad %6 %52
         %54 = OpSDiv %6 %53 %20
         %55 = OpAccessChain %22 %12 %34
         %56 = OpLoad %6 %55
         %57 = OpIAdd %6 %56 %54
         %58 = OpAccessChain %22 %12 %34
               OpStore %58 %57
               OpBranch %27
         %27 = OpLabel
         %59 = OpLoad %6 %23
         %60 = OpIAdd %6 %59 %50
               OpStore %23 %60
               OpBranch %24
         %26 = OpLabel
               OpBranch %61
         %61 = OpLabel
               OpLoopMerge %63 %64 None
               OpBranch %65
         %65 = OpLabel
         %66 = OpAccessChain %22 %12 %34
         %67 = OpLoad %6 %66
         %68 = OpSGreaterThan %31 %67 %50
               OpBranchConditional %68 %62 %63
         %62 = OpLabel
               OpBranch %64
         %64 = OpLabel
               OpBranch %61
         %63 = OpLabel
         %69 = OpLoad %7 %12
               OpReturnValue %69
               OpFunctionEnd
