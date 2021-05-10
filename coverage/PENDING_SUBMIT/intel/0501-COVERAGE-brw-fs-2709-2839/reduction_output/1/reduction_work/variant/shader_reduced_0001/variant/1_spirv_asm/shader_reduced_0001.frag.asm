; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 105
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %25 "i"
               OpName %41 "m1"
               OpName %42 "buf2"
               OpMemberName %42 0 "one"
               OpName %44 ""
               OpName %64 "m0"
               OpName %81 "buf0"
               OpMemberName %81 0 "_GLF_uniform_float_values"
               OpName %83 ""
               OpDecorate %9 Location 0
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpMemberDecorate %42 0 Offset 0
               OpDecorate %42 Block
               OpDecorate %44 DescriptorSet 0
               OpDecorate %44 Binding 2
               OpDecorate %80 ArrayStride 16
               OpMemberDecorate %81 0 Offset 0
               OpDecorate %81 Block
               OpDecorate %83 DescriptorSet 0
               OpDecorate %83 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 3
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpConstant %10 1
         %19 = OpTypePointer Uniform %10
         %24 = OpTypePointer Function %10
         %34 = OpConstant %10 2
         %37 = OpTypeBool
         %39 = OpTypeMatrix %7 4
         %40 = OpTypePointer Function %39
         %42 = OpTypeStruct %10
         %43 = OpTypePointer Uniform %42
         %44 = OpVariable %43 Uniform
         %56 = OpConstant %6 1
         %57 = OpConstant %6 0
         %79 = OpConstant %11 1
         %80 = OpTypeArray %6 %79
         %81 = OpTypeStruct %80
         %82 = OpTypePointer Uniform %81
         %83 = OpVariable %82 Uniform
         %84 = OpTypePointer Uniform %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %25 = OpVariable %24 Function
         %41 = OpVariable %40 Function
         %50 = OpVariable %40 Function
         %64 = OpVariable %40 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %10 %20
         %22 = OpConvertSToF %6 %21
         %23 = OpCompositeConstruct %7 %22 %22 %22 %22
               OpStore %9 %23
         %26 = OpAccessChain %19 %16 %17 %18
         %27 = OpLoad %10 %26
               OpStore %25 %27
               OpBranch %28
         %28 = OpLabel
               OpLoopMerge %30 %31 None
               OpBranch %32
         %32 = OpLabel
         %33 = OpLoad %10 %25
         %35 = OpAccessChain %19 %16 %17 %34
         %36 = OpLoad %10 %35
         %38 = OpSLessThan %37 %33 %36
               OpBranchConditional %38 %29 %30
         %29 = OpLabel
         %45 = OpAccessChain %19 %44 %17
         %46 = OpLoad %10 %45
         %47 = OpAccessChain %19 %16 %17 %17
         %48 = OpLoad %10 %47
         %49 = OpIEqual %37 %46 %48
               OpSelectionMerge %52 None
               OpBranchConditional %49 %51 %63
         %51 = OpLabel
         %53 = OpAccessChain %19 %16 %17 %17
         %54 = OpLoad %10 %53
         %55 = OpConvertSToF %6 %54
         %58 = OpCompositeConstruct %7 %55 %57 %57 %57
         %59 = OpCompositeConstruct %7 %57 %55 %57 %57
         %60 = OpCompositeConstruct %7 %57 %57 %55 %57
         %61 = OpCompositeConstruct %7 %57 %57 %57 %55
         %62 = OpCompositeConstruct %39 %58 %59 %60 %61
               OpStore %50 %62
               OpBranch %52
         %63 = OpLabel
         %65 = OpLoad %39 %64
         %66 = OpCompositeConstruct %7 %56 %56 %56 %56
         %67 = OpCompositeExtract %7 %65 0
         %68 = OpFSub %7 %67 %66
         %69 = OpCompositeExtract %7 %65 1
         %70 = OpFSub %7 %69 %66
         %71 = OpCompositeExtract %7 %65 2
         %72 = OpFSub %7 %71 %66
         %73 = OpCompositeExtract %7 %65 3
         %74 = OpFSub %7 %73 %66
         %75 = OpCompositeConstruct %39 %68 %70 %72 %74
               OpStore %64 %75
               OpStore %50 %65
               OpBranch %52
         %52 = OpLabel
         %76 = OpLoad %39 %50
               OpStore %41 %76
         %77 = OpLoad %39 %41
         %78 = OpExtInst %6 %1 Determinant %77
         %85 = OpAccessChain %84 %83 %17 %17
         %86 = OpLoad %6 %85
         %87 = OpFOrdEqual %37 %78 %86
               OpSelectionMerge %89 None
               OpBranchConditional %87 %88 %89
         %88 = OpLabel
         %90 = OpAccessChain %19 %16 %17 %17
         %91 = OpLoad %10 %90
         %92 = OpConvertSToF %6 %91
         %93 = OpAccessChain %19 %16 %17 %18
         %94 = OpLoad %10 %93
         %95 = OpConvertSToF %6 %94
         %96 = OpAccessChain %19 %16 %17 %18
         %97 = OpLoad %10 %96
         %98 = OpConvertSToF %6 %97
         %99 = OpAccessChain %19 %16 %17 %17
        %100 = OpLoad %10 %99
        %101 = OpConvertSToF %6 %100
        %102 = OpCompositeConstruct %7 %92 %95 %98 %101
               OpStore %9 %102
               OpBranch %89
         %89 = OpLabel
               OpBranch %31
         %31 = OpLabel
        %103 = OpLoad %10 %25
        %104 = OpIAdd %10 %103 %18
               OpStore %25 %104
               OpBranch %28
         %30 = OpLabel
               OpReturn
               OpFunctionEnd
