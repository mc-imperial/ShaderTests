; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 107
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %88
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf1"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %25 "i"
               OpName %33 "buf0"
               OpMemberName %33 0 "_GLF_uniform_int_values"
               OpName %35 ""
               OpName %41 "buf2"
               OpMemberName %41 0 "one"
               OpName %43 ""
               OpName %88 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 1
               OpDecorate %32 ArrayStride 16
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 0
               OpMemberDecorate %41 0 Offset 0
               OpDecorate %41 Block
               OpDecorate %43 DescriptorSet 0
               OpDecorate %43 Binding 2
               OpDecorate %88 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 2
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpTypePointer Uniform %6
         %24 = OpTypePointer Function %15
         %32 = OpTypeArray %15 %10
         %33 = OpTypeStruct %32
         %34 = OpTypePointer Uniform %33
         %35 = OpVariable %34 Uniform
         %36 = OpConstant %15 1
         %37 = OpTypePointer Uniform %15
         %40 = OpTypeVector %6 2
         %41 = OpTypeStruct %40
         %42 = OpTypePointer Uniform %41
         %43 = OpVariable %42 Uniform
         %44 = OpConstant %9 0
         %48 = OpConstant %15 2
         %50 = OpTypeBool
         %52 = OpConstant %9 1
         %58 = OpConstant %6 256
         %59 = OpConstant %6 2
         %73 = OpConstant %6 0.00999999978
         %86 = OpTypeVector %6 4
         %87 = OpTypePointer Output %86
         %88 = OpVariable %87 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %25 = OpVariable %24 Function
         %18 = OpAccessChain %17 %14 %16 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
               OpBranch %20
         %20 = OpLabel
               OpLoopMerge %22 %23 None
               OpBranch %21
         %21 = OpLabel
               OpStore %25 %16
               OpBranch %26
         %26 = OpLabel
               OpLoopMerge %28 %29 None
               OpBranch %30
         %30 = OpLabel
         %31 = OpLoad %15 %25
         %38 = OpAccessChain %37 %35 %16 %36
         %39 = OpLoad %15 %38
         %45 = OpAccessChain %17 %43 %16 %44
         %46 = OpLoad %6 %45
         %47 = OpConvertFToS %15 %46
         %49 = OpExtInst %15 %1 SClamp %39 %47 %48
         %51 = OpINotEqual %50 %31 %49
               OpBranchConditional %51 %27 %28
         %27 = OpLabel
         %53 = OpAccessChain %17 %43 %16 %52
         %54 = OpLoad %6 %53
         %55 = OpAccessChain %17 %14 %16 %16
         %56 = OpLoad %6 %55
         %57 = OpFOrdGreaterThan %50 %54 %56
         %60 = OpSelect %6 %57 %58 %59
         %61 = OpLoad %6 %8
         %62 = OpFDiv %6 %61 %60
               OpStore %8 %62
               OpBranch %29
         %29 = OpLabel
         %63 = OpLoad %15 %25
         %64 = OpIAdd %15 %63 %36
               OpStore %25 %64
               OpBranch %26
         %28 = OpLabel
               OpBranch %23
         %23 = OpLabel
         %65 = OpAccessChain %17 %14 %16 %16
         %66 = OpLoad %6 %65
         %67 = OpAccessChain %17 %43 %16 %52
         %68 = OpLoad %6 %67
         %69 = OpFOrdGreaterThan %50 %66 %68
               OpBranchConditional %69 %20 %22
         %22 = OpLabel
         %70 = OpLoad %6 %8
         %71 = OpAccessChain %17 %14 %16 %36
         %72 = OpLoad %6 %71
         %74 = OpFSub %6 %72 %73
         %75 = OpFOrdGreaterThan %50 %70 %74
               OpSelectionMerge %77 None
               OpBranchConditional %75 %76 %77
         %76 = OpLabel
         %78 = OpLoad %6 %8
         %79 = OpAccessChain %17 %14 %16 %36
         %80 = OpLoad %6 %79
         %81 = OpFAdd %6 %80 %73
         %82 = OpFOrdLessThan %50 %78 %81
               OpBranch %77
         %77 = OpLabel
         %83 = OpPhi %50 %75 %22 %82 %76
               OpSelectionMerge %85 None
               OpBranchConditional %83 %84 %102
         %84 = OpLabel
         %89 = OpAccessChain %37 %35 %16 %16
         %90 = OpLoad %15 %89
         %91 = OpConvertSToF %6 %90
         %92 = OpAccessChain %37 %35 %16 %36
         %93 = OpLoad %15 %92
         %94 = OpConvertSToF %6 %93
         %95 = OpAccessChain %37 %35 %16 %36
         %96 = OpLoad %15 %95
         %97 = OpConvertSToF %6 %96
         %98 = OpAccessChain %37 %35 %16 %16
         %99 = OpLoad %15 %98
        %100 = OpConvertSToF %6 %99
        %101 = OpCompositeConstruct %86 %91 %94 %97 %100
               OpStore %88 %101
               OpBranch %85
        %102 = OpLabel
        %103 = OpAccessChain %37 %35 %16 %36
        %104 = OpLoad %15 %103
        %105 = OpConvertSToF %6 %104
        %106 = OpCompositeConstruct %86 %105 %105 %105 %105
               OpStore %88 %106
               OpBranch %85
         %85 = OpLabel
               OpReturn
               OpFunctionEnd
