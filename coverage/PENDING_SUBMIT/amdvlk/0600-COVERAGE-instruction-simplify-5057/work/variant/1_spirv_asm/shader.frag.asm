; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 85
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %65
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %22 "i"
               OpName %25 "buf1"
               OpMemberName %25 0 "_GLF_uniform_int_values"
               OpName %27 ""
               OpName %50 "v"
               OpName %65 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %24 ArrayStride 16
               OpMemberDecorate %25 0 Offset 0
               OpDecorate %25 Block
               OpDecorate %27 DescriptorSet 0
               OpDecorate %27 Binding 1
               OpDecorate %65 Location 0
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
         %17 = OpConstant %15 1
         %18 = OpTypePointer Uniform %6
         %21 = OpTypePointer Function %15
         %23 = OpConstant %9 3
         %24 = OpTypeArray %15 %23
         %25 = OpTypeStruct %24
         %26 = OpTypePointer Uniform %25
         %27 = OpVariable %26 Uniform
         %28 = OpTypePointer Uniform %15
         %39 = OpTypeBool
         %47 = OpTypeVector %6 4
         %49 = OpTypePointer Function %47
         %64 = OpTypePointer Output %47
         %65 = OpVariable %64 Output
         %66 = OpConstant %15 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %22 = OpVariable %21 Function
         %50 = OpVariable %49 Function
         %19 = OpAccessChain %18 %14 %16 %17
         %20 = OpLoad %6 %19
               OpStore %8 %20
         %29 = OpAccessChain %28 %27 %16 %17
         %30 = OpLoad %15 %29
               OpStore %22 %30
               OpBranch %31
         %31 = OpLabel
               OpLoopMerge %33 %34 None
               OpBranch %35
         %35 = OpLabel
         %36 = OpLoad %15 %22
         %37 = OpAccessChain %28 %27 %16 %16
         %38 = OpLoad %15 %37
         %40 = OpSLessThan %39 %36 %38
               OpBranchConditional %40 %32 %33
         %32 = OpLabel
         %41 = OpAccessChain %18 %14 %16 %17
         %42 = OpLoad %6 %41
         %43 = OpLoad %6 %8
         %44 = OpFAdd %6 %43 %42
               OpStore %8 %44
         %45 = OpAccessChain %18 %14 %16 %17
         %46 = OpLoad %6 %45
         %48 = OpCompositeConstruct %47 %46 %46 %46 %46
         %51 = OpLoad %47 %50
         %52 = OpLoad %6 %8
         %53 = OpCompositeConstruct %47 %52 %52 %52 %52
         %54 = OpFDiv %47 %51 %53
         %55 = OpExtInst %47 %1 FMin %48 %54
               OpBranch %34
         %34 = OpLabel
         %56 = OpLoad %15 %22
         %57 = OpIAdd %15 %56 %17
               OpStore %22 %57
               OpBranch %31
         %33 = OpLabel
         %58 = OpLoad %6 %8
         %59 = OpAccessChain %18 %14 %16 %16
         %60 = OpLoad %6 %59
         %61 = OpFOrdEqual %39 %58 %60
               OpSelectionMerge %63 None
               OpBranchConditional %61 %62 %80
         %62 = OpLabel
         %67 = OpAccessChain %28 %27 %16 %66
         %68 = OpLoad %15 %67
         %69 = OpConvertSToF %6 %68
         %70 = OpAccessChain %28 %27 %16 %17
         %71 = OpLoad %15 %70
         %72 = OpConvertSToF %6 %71
         %73 = OpAccessChain %28 %27 %16 %17
         %74 = OpLoad %15 %73
         %75 = OpConvertSToF %6 %74
         %76 = OpAccessChain %28 %27 %16 %66
         %77 = OpLoad %15 %76
         %78 = OpConvertSToF %6 %77
         %79 = OpCompositeConstruct %47 %69 %72 %75 %78
               OpStore %65 %79
               OpBranch %63
         %80 = OpLabel
         %81 = OpAccessChain %28 %27 %16 %17
         %82 = OpLoad %15 %81
         %83 = OpConvertSToF %6 %82
         %84 = OpCompositeConstruct %47 %83 %83 %83 %83
               OpStore %65 %84
               OpBranch %63
         %63 = OpLabel
               OpReturn
               OpFunctionEnd
